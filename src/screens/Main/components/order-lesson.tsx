import "../main.css";
import BaseButton from "../../../shared/Buttons/BaseButton";

const OrderLesson = () => {
    const onOrderClick = () => {
        window.open("https://skobelkin.ru/whatsapp/79122587798?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,+%D1%85%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9+%D1%83%D1%80%D0%BE%D0%BA");
    }

    return (
        <div className="order-lesson-block">
            <div>
                <div className="text--heading3 text-600">Хочу заниматься с преподавателем!</div>
                <div className="text--body-s text-400">Запишись на бесплатный пробный урок</div>
            </div>
            <BaseButton text="Оставить заявку" theme="pink-secondary" 
                className="order-lesson-button text-400 text--body-s" 
                onClick={onOrderClick}/>
        </div>
    );
};

export default OrderLesson;