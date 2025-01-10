import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "../../../../../shared/Inputs/TextInput";
import "./main.css";
import BackArrow from "../../../../../assets/icons/back-arrow.svg";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import FileInput from "../../../../../shared/Inputs/FileInput";
import FileAdd from "../../../../../assets/icons/file-add.svg";

interface ICreateHomeworkForm {
  title: string;
  files: string;
  studentSlug: string;
  comments: string;
}

const CreateHomework = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateHomeworkForm>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const onSubmit = async (data: ICreateHomeworkForm) => {
    try {
      const filesData = uploadedFiles.map((file) => file.name);
      console.log("Задание успешно создано", { ...data, files: filesData });
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
                onFilesChange={setUploadedFiles}
            />
            <div className="uploaded-files">
                {uploadedFiles.slice(0, 3).map((file, index) => (
                  <span key={index} className="uploaded-file-name">
                    <img src={FileAdd} alt="file-add" />{file.name}
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
          <TextInput 
            placeholder="Выберите учеников" 
            type="text" 
            id="studentSlug" 
            register={{ ...register('studentSlug') }} 
            error={errors.studentSlug}
            containerClassName="field-create-homework"
          />
        </div>

        <div className="container-input-homework">
          <label className="title-homework">Комментарий преподавателя <span className="optional-text">(не обязательно)</span></label>
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
