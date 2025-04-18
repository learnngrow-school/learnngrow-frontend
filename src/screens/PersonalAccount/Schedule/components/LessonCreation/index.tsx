import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import TextError from "../../../../../shared/Errors/TextError";
import TextInput from "../../../../../shared/Inputs/TextInput";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import DateTimeInput from "../../../../../shared/Inputs/DateTimeInput";
import ListSelect from "../../../../../shared/Inputs/ListSelect";
import RadioGroup from "../../../../../shared/Buttons/RadioGroup";
import { getTeachers } from "../../../../../services/teacher.service";
import { getAllStudents } from "../../../../../services/students.service";
import { getSubjects } from "../../../../../services/subject.service";
import { createLesson } from "../../../../../services/lesson.service";
import { ERROR_RUS } from "../../../../../shared/Errors/errorTypes";
import { Teacher } from "../../../../../types/teacher";
import { User } from "../../../../../types/user";
import Lesson from "../../../../../types/lesson";
import './lessonCreation.css';
import ListSelectSubjects from "../../../../../shared/Inputs/ListSelectSubjects";

interface IProps {
    onClose: () => void;
}

const LessonCreation = ({ onClose }: IProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [duration, setDuration] = useState(60);
    const [teachers, setTeachers] = useState<User[]>([]);
    const [students, setStudents] = useState<User[]>([]);
    const [subjects, setSubjects] = useState<{ id: number; title: string }[]>([]);
    const [repeatLesson, setRepeatLesson] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Lesson | any>();

    useEffect(() => {
        getTeachers().then((res: any) => {
            if (!(res instanceof AxiosError) && res.status === 200) {
                const teachersAsUsers = res.data.map((t: Teacher) => t.userData);
                setTeachers(teachersAsUsers);
            }
        });

        getAllStudents().then((res: any) => {
            if (!(res instanceof AxiosError) && res.status === 200) {
                setStudents(res.data);
            }
        });

        getSubjects().then((res: any) => {
            if (!(res instanceof AxiosError) && res.status === 200) {
                console.log("Полученные предметы:", res.data); // Логируем данные
                setSubjects(res.data); // Сохраняем предметы в состояние
            }
        });
    }, []);

    const onLessonCreateClick = async (lesson: Lesson) => {
        setLoading(true);

        const seconds = Math.floor(new Date(lesson.timestamp).getTime() / 1000);
        lesson.timestamp = seconds;
        lesson.duration = duration;
        lesson.fileSlug = "123"; // Заглушка
        console.log('Добавлен урок на ', new Date(lesson.timestamp));

        const lessonsToCreate = [lesson];

        if (repeatLesson) {
            for (let i = 1; i < 4; i++) { 
                const newLesson = { ...lesson };
                newLesson.timestamp = seconds + i * 7 * 24 * 60 * 60;
                lessonsToCreate.push(newLesson);
            }
        }

        for (const lessonToCreate of lessonsToCreate) {
            const response = await createLesson(lessonToCreate);

            if (response instanceof AxiosError) {
                const errorRus = ERROR_RUS[response.message as string];
                setError(errorRus ? errorRus : 'Ошибка сети');
                setLoading(false);
                return;
            }
        }

        onClose();
        window.location.reload();
    };

    return (
        <form className="px-4 py-3 creation-form" onSubmit={handleSubmit(onLessonCreateClick)}>
            <div className="text--heading3 text-600 text--blue title">Добавление занятия</div>

            <div className="text--body-s text-600 text--blue lesson-input-label">Выберите дату и время</div>
            <DateTimeInput 
                placeholder="Выберите время урока"
                register={{ ...register('timestamp', { required: "Выберите дату и время урока" }) }}
            />
            <TextError text={errors.timestamp?.message?.toString() || ''} />

            <div className="text--body-s text-600 text--blue lesson-input-label">Выберите продолжительность урока</div>
            <RadioGroup 
                data={[
                    { name: '1 час', isChecked: true, value: 60 },
                    { name: '1.5 часа', isChecked: false, value: 90 },
                ]}
                setValue={setDuration}
                register={{ ...register('duration', { required: "Выберите продолжительность урока" }) }}
            />

            <div className="text--body-s text-600 text--blue lesson-input-label">Выберите предмет</div>
            {subjects.length > 0 ? (
                <ListSelectSubjects 
                data={subjects} 
                register={{ ...register('subjectId', { required: "Выберите предмет" }) }} 
                />
            ) : (
                <div>Загрузка данных...</div>
            )}

            <div className="text--body-s text-600 text--blue lesson-input-label">Выберите ученика</div>
            {students.length > 0 ? (
                <ListSelect 
                    data={students}
                    register={{ ...register('studentSlug', { required: "Выберите ученика" }) }}
                    error={errors.studentSlug} 
                />
            ) : (
                <div>Загрузка данных...</div>
            )}

            <div className="text--body-s text-600 text--blue lesson-input-label">Выберите преподавателя</div>
            {teachers.length > 0 ? (
                <ListSelect 
                    data={teachers}
                    register={{ ...register('teacherSlug', { required: "Выберите преподавателя" }) }}
                    error={errors.teacherSlug} 
                />
            ) : (
                <div>Загрузка данных...</div>
            )}

            <div className="text--body-s text-600 text--blue lesson-input-label">Добавьте название занятия</div>
            <TextInput 
                placeholder="Название занятия"
                type="text"
                id="homework"
                register={{ ...register('homework') }}
                error={errors.homework} 
            />

            <div className="text--body-s text-600 text--blue lesson-input-label-1">Добавьте комментарий к занятию</div>
            <TextInput 
                placeholder="Комментарий"
                type="text"
                id="teacherNotes"
                register={{ ...register('teacherNotes') }}
                error={errors.teacherNotes} 
            />

            <div className="text--body-s text-600 text--blue lesson-input-label">Повторить задание на месяц вперёд?</div>
            <RadioGroup 
                data={[
                    { name: 'Да', isChecked: repeatLesson, value: true },
                    { name: 'Нет', isChecked: !repeatLesson, value: false },
                ]}
                setValue={setRepeatLesson}
                register={{ ...register('repeatLesson') }} 
            />

            {error && <TextError text={error} />}

            <div className="row-block">
                <BaseButton text="Отмена" onClick={onClose} theme="white-primary" className="cancel-btn"/>
                <BaseButton type="submit" text={loading ? 'Добавление...' : 'Добавить урок'} theme="pink-primary"/>
            </div>
        </form>
    );
}

export default LessonCreation;
