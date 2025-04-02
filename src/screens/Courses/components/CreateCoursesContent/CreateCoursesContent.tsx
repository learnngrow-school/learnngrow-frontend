import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateCoursesContent.css";
import BackArrow from "../../../../assets/icons/back-arrow.svg";
import { urls } from "../../../../navigation/app.urls";
import AddBlock from "./components/AddBlock";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import Plus from "../../../../assets/icons/plus-pink.svg";
import PlusBlue from "../../../../assets/icons/plus-blue.svg";
import AddTest from "./components/AddTest";
import Programm from "./components/Programm";

const CreateCoursesContent = () => {
    const navigate = useNavigate();
    const [lessonName, setLessonName] = useState<string | null>(null);
    const [lessonContentName, setLessonContentName] = useState<string | null>(null); // Доп. материал (тест, задание)
    const [lessonType, setLessonType] = useState<string | null>(null);

    const handleBackClick = () => {
        navigate(`${urls.myCourses}`);
    };

    const handleLessonSubmit = (lesson: string, content: string, type: string) => {
        setLessonName(lesson);
        setLessonContentName(content);
        setLessonType(type);
    };

    const renderLessonComponent = () => {
        switch (lessonType) {
            case "теста":
                return <AddTest lessonName={lessonContentName} />;
            default:
                return null;
        }
    };

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
                    {lessonName ? (
                        <Programm 
                            lessonName={lessonName}
                            lessonContentName={lessonContentName}
                        />
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
