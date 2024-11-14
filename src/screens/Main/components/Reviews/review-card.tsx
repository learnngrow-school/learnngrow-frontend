import "./reviews.css"
import BaseButton from "../../../../shared/Buttons/BaseButton"

interface IReviewCardProps {
    author: string
    text: string
}
const ReviewCard = ({author, text}: IReviewCardProps) => {
    return (
        <div className="review-card">
            <div>{author}</div>
            <div className="text text--body-s text-400">{text}</div>
            <BaseButton theme="white" text="Читать далее"/>
        </div>
    );
}

export default ReviewCard