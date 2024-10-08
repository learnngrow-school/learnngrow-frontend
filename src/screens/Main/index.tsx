import { FC } from "react";
import "./main.css";

const Main: FC = () => {

    return (
    <div>
        <div className="title-container">
            <h1 className="text--heading1 heading-1">{"Учебный клуб"}</h1>
            <h1 className="text--heading1 heading-1">{"Learn&Grow"}</h1>
            <p className="text--heading2 heading-2">Самое комфортное место для учебы</p>
            <div className="button-text-container">
                <p className="text--heading3 text-500 heading-3">Подготовка к ЕГЭ, ОГЭ, ВПР, олимпиадам</p>
                <button type="button" className="btn btn-primary dark-blue-primary">Начать обучение</button>
            </div>
        </div>
    </div>
    );
};

export default Main