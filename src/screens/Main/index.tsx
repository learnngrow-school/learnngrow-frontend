import { FC } from "react";
import "./main.css";
import BaseButton from "../../shared/Buttons/BaseButton";
import Steps from "./components/steps";
import Subjects from "./components/subjects";
import Teachers from "./components/Teachers";
import OrderLesson from "./components/order-lesson";
import Reviews from "./components/reviews";
import Title from "./components/title";
import StudyTypes from "./components/study-types";

const Main: FC = () => {

    return (
    <>
        <div className="content">
            <Title />
            <StudyTypes />
            <Steps />
        </div>
        <Subjects />
        <div className="content">
            <Teachers />
            <OrderLesson />
            <Reviews />
         </div>
    </>
    );
};

export default Main