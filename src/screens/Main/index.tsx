import { FC } from "react";
import "./main.css";
import BaseButton from "../../shared/Buttons/BaseButton";
import Steps from "./components/steps";
import Subjects from "./components/subjects";
import Teachers from "./components/teachers";
import OrderLesson from "./components/order-lesson";
import Reviews from "./components/reviews";

const Main: FC = () => {

    const onStudyStartClick = () => {
        window.open('https://skobelkin.ru/whatsapp/79122587798?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,+%D1%85%D0%BE%D1%87%D1%83+%D0%BF%D1%80%D0%B8%D0%BE%D0%B1%D1%80%D0%B5%D1%81%D1%82%D0%B8+%D0%BA%D1%83%D1%80%D1%81');
    }

    const studyTypes = [
        "Подготовка к ЕГЭ", 
        "Подготовка к ОГЭ", 
        "Подготовка к ВПР",
        "Подготовка к олимпиадам",
    ]

    return (
    <div>
        <div className="title-container">
            <h1 className="text--heading1 heading-1">
                Учебный клуб<br />
                Learn&Grow
            </h1>
            <div className="button-text-container">
                <div className="text--heading2 heading-2">- самое комфортное место для учебы</div>
                <BaseButton text="Начать обучение" theme="dark-blue-secondary" 
                    className="button-start-study text-400" onClick={onStudyStartClick}/>
            </div>
        </div>

        <div className="grid-4">
            {studyTypes.map(studyType => (
                <div className="text--body-m text-400 study-type-card" key={studyType}>{studyType}</div>
            ))}
         </div>

         <div className="text--heading2 text-600 title-2">Как начать заниматься?</div>
         <Steps />

         <Subjects />

         <Teachers />

         <OrderLesson />

         <Reviews />
         
    </div>
    );
};

export default Main