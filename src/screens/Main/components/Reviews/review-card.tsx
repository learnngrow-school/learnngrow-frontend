import "./reviews.css"
import BaseButton from "../../../../shared/Buttons/BaseButton"
import ReviewPopup from "./Popup"
import { useState } from "react"

interface IReviewCardProps {
    author: string
    text: string
}
const ReviewCard = ({author, text}: IReviewCardProps) => {
    const [popupVisible, setPopupVisible] = useState(false)

    const onReadMoreClick = () => {
        setPopupVisible(true);
    }

    const onPopupClose = () => {
        setPopupVisible(false);
    }

    return (
        <div className="review-card">
            <div className="text-block">
                <div className="text--heading3 text-600">{author}</div>
                <div className="text text--body-s text-400">{text.length > 155? text.slice(0, 155) + "..." : text}</div>
            </div>
            <BaseButton theme="white-secondary" text="Читать далее" className="text--body-s" onClick={onReadMoreClick}/>
            <ReviewPopup text={text} onHide={onPopupClose} isOpen={popupVisible}/>
        </div>
    );
}

export default ReviewCard