import { FC, useEffect, useState } from "react";
import "./main.css";
import Steps from "./components/steps";
import Subjects from "./components/subjects";
import Teachers from "./components/Teachers";
import OrderLesson from "./components/order-lesson";
import Reviews from "./components/Reviews";
import Title from "./components/title";
import StudyTypes from "./components/study-types";
import { getReviews } from "../../services/review.service";
import { getTeachers } from "../../services/teacher.service";
import { Review } from "../../types/review";
import {Teacher} from "../../types/teacher";
import { AxiosError } from "axios";
import { Subject } from "../../types/subject";
import { getSubjects } from "../../services/subject.service";

const Main: FC = () => {
    const [reviews, setReviews] = useState<Review[]>()
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {

        getReviews().then((response : any) => {
            if (! (response instanceof AxiosError) && response.status === 200) {
                setReviews(response.data);
                //console.log(reviews);
            }
        });
        
        getTeachers().then((response : any) => {
            if (! (response instanceof AxiosError) && response.status === 200) {
                setTeachers(response.data);
                //console.log(teachers);
            }
        });

        getSubjects().then((response : any) => {
            if (! (response instanceof AxiosError) && response.status === 200) {
                setSubjects(response.data);
            }
        });
    },[]);

    return (
    <div className="main-content">
        <div className="content">
            <Title />
            <StudyTypes />
            <Steps />
        </div>
        <Subjects data={subjects}/>
        <div className="content">
            {teachers.length > 0 && <Teachers data={teachers}/>}
            <OrderLesson />
            {reviews && reviews.length > 0 && <Reviews data={reviews}/>}
         </div>
    </div>
    );
};

export default Main