import { useEffect, useState } from "react";
import BaseButton from "../../../shared/Buttons/BaseButton"
import FormModal from "../../../shared/Modals/FormModal";
import ReviewCreation from "./ReviewCreation";
import { AxiosError } from "axios";
import { ERROR_RUS } from "../../../shared/Errors/errorTypes";
import { Review } from "../../../types/review";
import { createReview, getReviews } from "../../../services/review.service";
import "./reviews.css"

const Reviews = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [reviews, setReviews] = useState<Review[]>([]);

   useEffect(() => {
    getReviews().then((response : any) => {
        if (!(response instanceof AxiosError)) {
            setReviews(response.data);
        }
    });
    }, 
    [])

   
    const onReviewCreateClick = async (review: Review)  => {
        //setLoading(true);
        console.log(review.authorName, review.details);  
        const response = await createReview(review);
   
        if (!(response instanceof AxiosError)) {
            hideModal();
        }
        else {
            const errorRus = ERROR_RUS[response.message as string]
            console.log(errorRus? errorRus : response.message);
            // setError( errorRus? errorRus : 'Ошибка сети');
        }
    }
   
       const showModal = () => {
           setModalVisible(true);
       }
   
       const hideModal = () => {
           setModalVisible(false);
       }
    
    return (
        <>
            <div className="text--heading2 text-600 text--blue">Отзывы</div>

                <div className="review-item-container">
                    <div className="text--body-s text-600 text--blue">Автор</div>
                    <div className="text--body-s text-600 text--blue">Текст отзыва</div>
                    {reviews.length > 0 ? 
                    reviews.map((r : Review, index) => (
                        <>
                        
                        <div key={index + 1}>{r.authorName}</div>
                        <div key={index + 1.1}>{r.details}</div>
                        </>
                        ))
                    : <div>Данных пока нет</div>
                    }
                </div>
                <BaseButton data-bs-toggle="modal" data-bs-target="#reviewCreationModal" 
                    text="Добавить отзыв" onClick={showModal} theme="pink-primary"/>
                <FormModal id="reviewCreationModal" 
                    content={
                    <ReviewCreation onSubmit={onReviewCreateClick} onCancel={hideModal}/>
                    } 
                    isOpen={modalVisible} 
                />
        </>
    )
}

export default Reviews