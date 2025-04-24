import { useState } from "react";
import ArrowRight from "../../../../assets/icons/long-arrow-right.svg"
import ArrowLeft from "../../../../assets/icons/long-arrow-left.svg"
import Slider from "../../../../shared/Buttons/Slider";
import "./slider.css"
import ReviewCard from "../Reviews/review-card";
import TeacherCard from "../Teachers/teacher-card";
import ProgressPoint from "../../../../shared/Buttons/Slider/ProgressPoint";
import useWindowSize from "../../../Courses/components/WindowSize/useWindowSize";

interface IProps {
    data: any[]
    dataType:
    | 'teachers'
    | 'reviews'
    dataClassName : string
    evenBlockLength : number
    oddBlockLength : number
}

const PointsSlider = (
    {data, dataType, dataClassName, oddBlockLength, evenBlockLength } : IProps) => 
{
    const { width } = useWindowSize();
    const isMobile = width <= 767;
    const BLOCK_LENGTH = data.length % 2 == 0 ? evenBlockLength : oddBlockLength;
    const STEP = Math.floor(BLOCK_LENGTH / 2);

    const deltaLength = dataType == "reviews" && data.length%2 == 0 ? 1 : 0;
    const initialStart = Math.floor(data.length / 2) - STEP - deltaLength;
    const [start, setStart] = useState(initialStart);
    const [end, setEnd] = useState(initialStart + BLOCK_LENGTH);
    const initialList = data.slice(start, end);
    const [smallList, setSmallList] = useState(initialList);
    
    const onRightClick = () => {
        if ( end < data.length) 
        {
            setStart(currentStart => currentStart + 1);
            setEnd((end) => end + 1);
            const slice = smallList.slice();
            slice.push(data[end]);
            slice.shift();
            setSmallList(slice);
        }
    }

    const onLeftClick = () => {
        if (start > 0) 
        {
            const slice = smallList.slice(0, BLOCK_LENGTH - 1);
            slice.unshift(data[start - 1]);
            setSmallList(slice);

            setStart(currentStart => currentStart - 1);
            setEnd(currentEnd => currentEnd - 1);
        }
    }

    return (
        <>
        <div className={`${dataClassName} ${isMobile ? "scroll-container" : ""}`}>
        { dataType == 'reviews' ?
            smallList.map((review) => (
                <ReviewCard key={review.id} author={review.authorName} text={review.details}/>
            ))
        :   smallList.map((teacher) => (
                <TeacherCard
                    id={teacher.id}
                    key={teacher.id}
                    name={teacher.name}
                    iconPath={teacher.iconPath}
                    subjects={teacher.subjects}/>))
            }
        </div>
        <div className="slider-points-container">
            {!isMobile && (
                <>
                <Slider imagePath={ArrowLeft} onClick={onLeftClick} 
                disabled={start <= 0} imgClassName="slider-button"/>
                <div className="points">
                    {data.map((item, index) => (
                        <ProgressPoint key={item.id} 
                        isActive={Number(index) >= start && Number(index) < end}/>))
                    }
                </div>
                <Slider imagePath={ArrowRight} onClick={onRightClick} 
                    disabled={end >= data.length} imgClassName="slider-button"/>
                </>
            )} 
        </div>
        </>
        )
}

export default PointsSlider