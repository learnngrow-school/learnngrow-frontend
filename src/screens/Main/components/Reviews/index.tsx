import "../../main.css";
import { Review } from "../../../../types/review";
import ReviewCard from "./review-card";

const data: Review[]= [
    {
        author: "Людмила - мама, ЕГЭ",
        text:"Спасибо Вам огромное, Ксения."+ 
        "Вы для Миши Авторитет. Спасибо за комфортную обстановку на занятиях, за неравнодушие, за умение..."
    },
    {
        author: "Анна - ученица, 8 класс + ОГЭ",
        text:"Я сдала ОГЭ!!! Ксения, Спасибо Вам ОГРОМНОЕ 💖💖💖 Не знаю, что бы без Вас делала)))"
    }
]

const Reviews = () => {
    return (
        <div className="reviews-container">
            <div className="text--heading2 text-600 title-2">Отзывы</div>
            <div className="text--body-s text-400 text">Что о нас говорят наши студенты и их родители</div>
            <div className="cards">
                {data.map((review) => (
                    <ReviewCard key={review.author} author={review.author} text={review.text}/>
                ))}
            </div>
        </div>
    );
};

export default Reviews;