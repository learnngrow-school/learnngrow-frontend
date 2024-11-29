import { FC } from "react";
import { useParams } from "react-router-dom";
import { useCourseDetails } from "../../services/course-details.service.ts";
import './course-details.css';

const CourseDetails: FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    const { courseData } = useCourseDetails(id);

    if (!courseData) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    // Извлекаем данные из объекта курса
    //const { title, price, description, grade } = courseData.course || {}; // Название и цена курса

    return (
        <div className="course-details">
            <h2 className="course-detail-title">Еще не сверстал...</h2>
        </div>
    );
};

export default CourseDetails;
