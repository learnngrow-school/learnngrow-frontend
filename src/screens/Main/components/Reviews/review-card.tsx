import "./reviews.css"
import BaseButton from "../../../../shared/Buttons/BaseButton"

interface IReviewCardProps {
    author: string
    text: string
}
const ReviewCard = ({author, text}: IReviewCardProps) => {
    return (
        <div className="review-card">
            <div className="text-block">
                <div className="text--heading3 text-600">{author}</div>
                <div className="text text--body-s text-400">{text}</div>
            </div>
            <BaseButton theme="white-secondary" text="Читать далее" className="text--body-s"/>
        </div>
    );
}

export default ReviewCard