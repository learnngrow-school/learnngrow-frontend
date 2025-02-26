import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "../../../../../shared/Inputs/TextInput";
import "./main.css";
import BackArrow from "../../../../../assets/icons/back-arrow.svg";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import FileInput from "../../../../../shared/Inputs/FileInput";
import FileAdd from "../../../../../assets/icons/file-add.svg";
import ListSelect from "../../../../../shared/Inputs/ListSelect";
import { getAllStudents } from "../../../../../services/students.service";
import { AxiosError } from "axios";
import { User } from "../../../../../types/user";
import { createTask } from "../../../../../services/tasks.service";
import { uploadFile } from "../../../../../services/files.service";

interface ICreateHomeworkForm {
  title: string;
  files: string;
  studentsSlug: string;
  comments: string;
}

const CreateHomework = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateHomeworkForm>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [students, setStudents] = useState<User[]>([]);

  useEffect(() => {
    getAllStudents().then((res: any) => {
      if (!(res instanceof AxiosError) && res.status === 200) {
        setStudents(res.data);
      }
    });
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleFilesChange = (newFiles: File[]) => {
    console.log('Полученные', newFiles);
    setUploadedFiles((prevFiles) => {
      const prevFileNames = new Set(prevFiles.map((file) => file.name));
      console.log('Получаем имена всех файлов в текущем массиве', prevFiles);

      const filesToAdd = newFiles.filter((file) => !prevFileNames.has(file.name));
      console.log('Отфильтровываем новые файлы, добавляя только те, которые не встречались раньше', filesToAdd);

      return [...prevFiles, ...filesToAdd];
    });
  };

  const onFileRemove = (indexToRemove: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = async (data: ICreateHomeworkForm) => {
    try {
      // Сначала загружаем файлы и получаем их slugs
      const fileSlugs = await Promise.all(
        uploadedFiles.map(async (file) => {
          const slug = await uploadFile(file);
          if (slug instanceof Error) {
            throw new Error(`Ошибка при загрузке файла: ${file.name}`);
          }
          return slug;
        })
      );

      // Отправляем задание с полученными slugs файлов
      const response = await createTask(data.title, fileSlugs, data.comments);

      if (response instanceof AxiosError) {
        console.error("Ошибка при создании задания:", response.message);
      } else {
        console.log("Задание успешно создано:", response.data);
        navigate(-1); // Переход к предыдущей странице
      }
    } catch (error) {
      console.error("Ошибка при создании задания:", error);
    }
  };

  return (
    <div className="container-create-homework">
      <div className="back-to-homework" onClick={handleBackClick}>
        <img className="back-arrow" src={BackArrow} alt="Back" />
        Все задания
      </div>

      <h2 className="header-create-homework">Создание задания</h2>
      <form className="form-container-hw" onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input-homework">
          <label className="title-homework">Введите название</label>
          <TextInput
            placeholder="Например, 'Функции'"
            type="text"
            id="title"
            register={{ ...register('title') }}
            error={errors.title}
            containerClassName="field-create-homework"
          />
        </div>

        <div className="container-input-homework">
          <label className="title-homework">Прикрепите файл</label>
          <div className="container-line-homework">
            <FileInput
              id="file"
              placeholder="Выберите файл"
              register={{ ...register("files") }}
              error={errors.files}
              containerClassName="field-create-homework"
              onFilesChange={handleFilesChange}
              fileList={uploadedFiles}
            />
            <div className="uploaded-files">
              {uploadedFiles.slice(0, 3).map((file, index) => (
                <span
                  key={index}
                  className="uploaded-file-name"
                  onClick={() => onFileRemove(index)}
                >
                  <img src={FileAdd} alt="file-add" />
                  {file.name}
                </span>
              ))}
              {uploadedFiles.length > 3 && (
                  <span className="uploaded-file-name ellipsis">...</span>
                )}
            </div>
          </div>
        </div>

        <div className="container-input-homework">
          <label className="title-homework">Выберите учеников</label>
          <div className="fieldlist-create-homework">
            {students.length > 0 ? (
              <ListSelect
                data={students}
                register={{ ...register('studentsSlug', { required: "Выберите ученика" }) }}
                error={errors.studentsSlug}
              />
            ) : (
              <div>Загрузка данных...</div>
            )}
          </div>
        </div>

        <div className="container-input-homework">
          <label className="title-homework">
            Комментарий преподавателя <span className="optional-text">(не обязательно)</span>
          </label>
          <TextInput
            placeholder="Комментарий"
            type="text"
            id="comments"
            register={{ ...register('comments') }}
            error={errors.comments}
            containerClassName="comments-create-homework"
          />
        </div>

        <BaseButton
          type="submit"
          text={"Создать задание"}
          theme={"pink-secondary"}
          className="button-submit-homework"
        />
      </form>
    </div>
  );
};

export default CreateHomework;
