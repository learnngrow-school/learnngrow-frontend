import "../../main.css";
import { Review } from "../../../../types/review";
import PointsSlider from "../PointsSlider";

// const reviews: Review[]= [
//     {
//         id: '0',
//         author: "Людмила - мама, ЕГЭ",
//         text:"Спасибо Вам огромное, Ксения."+ 
//         "Вы для Миши Авторитет. Спасибо за комфортную обстановку на занятиях, за неравнодушие, за умение..."
//     },
//     {
//         id: '1',
//         author: "Анна - ученица, 8 класс + ОГЭ",
//         text:"Я сдала ОГЭ!!! Ксения, Спасибо Вам ОГРОМНОЕ 💖💖💖 Не знаю, что бы без Вас делала)))"
//     },
//     {
//         id: '2',
//         author: "Сергей - папа ученика, ОГЭ",
//         text: "У Сергея по русскому за ОГЭ четвёрка. Спасибо вам за помощь, Ксения, надеемся на дальнее сотрудничество)))."
//     },
//     {
//         id: '3',
//         author: "Петунья - тётя ученика, История магии",
//         text:"Предмет 3/10, преподавание 0/10.\n"+ 
//         "Преподаватель что-то бубнит себе под нос - ничего не слышно и не понятно.\n"+
//         "И вообще он привидение😳"
//     },
//     {
//         id: '4',
//         author: "Гермиона - ученица, прорицания",
//         text: "Ноги моей больше не будет на этом предмете!👺"
//     }
// ]

interface IProps {
    data: Review[]
}

const Reviews = ({data}: IProps) => {

    return (
        <div className="reviews-container">
            <div className="text--heading2 text-600 title-2">Отзывы</div>
            <div className="text--body-s text-400 about">
                Что о нас говорят наши студенты и их родители
            </div>
            <PointsSlider 
                dataType="reviews" 
                data={data} 
                dataClassName="review-cards"
                oddBlockLength={3} evenBlockLength={3}
            />
        </div>
    );
};

export default Reviews;