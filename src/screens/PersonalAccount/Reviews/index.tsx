import { useState } from "react";
import BaseButton from "../../../shared/Buttons/BaseButton"
import FormModal from "../../../shared/Modals/FormModal";
import ReviewCreation from "./ReviewCreation";
// import { AxiosError } from "axios";
// import { ERROR_RUS } from "../../../shared/Errors/errorTypes";
// import { Review } from "../../../types/review";

const Reviews = () => {
   const [modalVisible, setModalVisible] = useState(false);

   
       const onReviewCreateClick = () => {
        //    //setLoading(true);
        //    console.log(review.timestamp, typeof review.);
   
        //    const date = new Date(review.timestamp);
        //    review.timestamp = date.getTime();
        //    console.log('Добавлен урок на ',new Date(review.timestamp));
           
        //    const response = await createLesson(review);
   
        //    if (!(response instanceof AxiosError)) {
        //        hideModal();
        //    }
        //    else {
        //        const errorRus = ERROR_RUS[response.message as string]
        //        console.log(errorRus? errorRus : response.message);
        //        //setError( errorRus? errorRus : 'Ошибка сети');
        //    }
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