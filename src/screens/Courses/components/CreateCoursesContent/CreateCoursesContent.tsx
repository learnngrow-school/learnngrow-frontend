import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateCoursesContent.css";
import BackArrow from "../../../../assets/icons/back-arrow.svg";
import { urls } from "../../../../navigation/app.urls";
import AddBlock from "./components/AddBlock";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import Plus from "../../../../assets/icons/plus-pink.svg";
import PlusBlue from "../../../../assets/icons/plus-blue.svg";
import AddTest from "./components/AddTest";
import Programm from "./components/Programm";
import { CourseContent } from "../../../../types/course-content";
import { createCourseContent } from "../../../../services/course-content.service";
import AddLectureText from "./components/AddLectureText";

const CreateCoursesContent = () => {
    const navigate = useNavigate();
    const [nameLesson, setLessonName] = useState<string | null>(null);
    const [nameTask, setLessonContentName] = useState<string | null>(null); // Доп. материал (тест, задание)
    const [typeTask, setLessonType] = useState<string | null>(null);
    const { slug } = useParams<{ slug: any}>();
    const [typeTaskBool, setLessonTypeBool] = useState<boolean | null>(null);
    const [slugLecture, setSlugLecture] = useState<number | null>(null);

    const handleBackClick = () => {
        navigate(`${urls.myCourses}`);
    };

    // Принемаем все занчения
    const handleLessonSubmit = (nameLesson: string, nameTask: string, typeTask: string, typeTaskBool: boolean) => {
        setLessonName(nameLesson);
        setLessonContentName(nameTask);
        setLessonType(typeTask);
        setLessonTypeBool(typeTaskBool);
    };

    const handleSelectSlug = (slugLecture: number) => {
        console.log("slugLecture передан в родительский компонент:", slugLecture);
        setSlugLecture(slugLecture);
    };

    const renderLessonComponent = () => { 
        switch (typeTask) {
            case "теста":
                return <AddTest nameTask={nameTask} />;
            case "классной работы (Лекция)":
                return <AddLectureText nameTask={nameTask} handleSelectSlug={handleSelectSlug} slug={slug}/>;
            default:
                return null;
        }
    };

    useEffect(() => {
        console.log("slugLecture обновлен:", slugLecture);
        if (slugLecture && nameLesson && typeTaskBool !== null) {
            const courseContentData = {
                description: "description",
                isTest: typeTaskBool,
                lectureId: slugLecture || 0,
                testId: 0,
                title: nameLesson,
            };
    
            // Отправляем данные в API
            const onSubmit = async () => {
                try {
                    const response = await createCourseContent(courseContentData, slug);
                    console.log('Контент', response);
                } catch (error) {
                    console.error('Ошибка при создании курса', error);
                }
            };
    
            // Выполняем запрос
            onSubmit();
        }
    }, [slugLecture, typeTaskBool, nameLesson, slug]);
    

    return (
        <div className="container-create-courses-content">
            <div className="back-to-homework" onClick={handleBackClick}>
                <img className="back-arrow" src={BackArrow} alt="Back" />
                Все курсы
            </div>

            <div className="sections">
                <div className="left-block-create-courses-content">
                    <div className="header">Курс "Функции"</div>

                    {/* Меняем контент в зависимости от наличия lessonName */}
                    {nameLesson ? (
                        <div className="programm-block-course-content">
                            <Programm 
                                lessonName={nameLesson}
                                lessonContentName={nameTask}
                            />
                        </div>
                    ) : (
                        <div className="second-header">Учебная программа</div>
                    )}

                    <div className="add-block">
                        <AddBlock onLessonSubmit={handleLessonSubmit} />
                    </div>

                    <div className="add-chapter">
                        <BaseButton 
                            type="submit"
                            text="Новый раздел"
                            theme="white-secondary"
                            className="button-add-chapter"
                            iconFirst={true}
                            iconPath={Plus}
                            iconPathHover={PlusBlue}
                        />
                    </div>
                </div>

                <div className="right-block-create-courses-content">
                    {renderLessonComponent()}
                </div>
            </div>
        </div>
    );
};

export default CreateCoursesContent;
