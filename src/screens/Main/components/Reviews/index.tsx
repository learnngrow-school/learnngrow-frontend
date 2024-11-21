import "../../main.css";
import { Review } from "../../../../types/review";
import ReviewCard from "./review-card";
import ProgressPoint from "../../../../shared/Buttons/Slider/ProgressPoint";
import PointsSlider from "../PointsSlider";
import { useState } from "react";

const data: Review[]= [
    {
        id: '0',
        author: "Людмила - мама, ЕГЭ",
        text:"Спасибо Вам огромное, Ксения."+ 
        "Вы для Миши Авторитет. Спасибо за комфортную обстановку на занятиях, за неравнодушие, за умение..."
    },
    {
        id: '1',
        author: "Анна - ученица, 8 класс + ОГЭ",
        text:"Я сдала ОГЭ!!! Ксения, Спасибо Вам ОГРОМНОЕ 💖💖💖 Не знаю, что бы без Вас делала)))"
    },
    {
        id: '2',
        author: "Сергей - папа ученика, ОГЭ",
        text: "У Сергея по русскому за ОГЭ четвёрка. Спасибо вам за помощь, Ксения, надеемся на дальнее сотрудничество)))."
    }
]

const BLOCK_LENGTH = 3;

const Reviews = () => {
    const [start] = useState(0);
    // const [end, setEnd] = useState(BLOCK_LENGTH);

    return (
        <div className="reviews-container">
            <div className="text--heading2 text-600 title-2">Отзывы</div>
            <div className="text--body-s text-400 about">Что о нас говорят наши студенты и их родители</div>
            <div className="cards">
                {data.map((review) => (
                    <ReviewCard key={review.author} author={review.author} text={review.text}/>
                ))}
            </div>
            {data.length >= BLOCK_LENGTH && 
            <PointsSlider 
                onRightClick={() =>{}}
                onLeftClick={() =>{}}
                children={
                data.map((review) => (<ProgressPoint key={review.author} 
                    isActive={Number(review.id) === start}/>))
                }
            />}
            {/* { (
                    <div className="slider-points-container">
                       <Slider imagePath={Arrow}
                            onClick={() =>{}} imgClassName="left-slider"/>
                        {data.map((review) => (
                            <ProgressPoint key={review.author} isActive={false}/>
                        ))}
                       <Slider
                            imagePath={Arrow}
                            onClick={() =>{}} imgClassName="right-slider"/>
                    </div>)
                } */}
        </div>
    );
};

export default Reviews;