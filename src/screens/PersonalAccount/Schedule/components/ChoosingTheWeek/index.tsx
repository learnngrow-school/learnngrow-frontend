import Slider from "../../../../../shared/Buttons/Slider";
import ArrowRight from "../../../../../assets/icons/long-arrow-right.svg";
import ArrowLeft from "../../../../../assets/icons/long-arrow-left.svg";
import "./main.css";
import useWindowSize from "../../../../Courses/components/WindowSize/useWindowSize";

interface ChoosingTheWeekProps {
    weekOffset: number;
    setWeekOffset: (offset: number) => void;
}

const ChoosingTheWeek = ({ weekOffset, setWeekOffset }: ChoosingTheWeekProps) => {
    const onRightClick = () => {
        if (weekOffset < 3) {
            setWeekOffset(weekOffset + 1);
        }
    };

    const onLeftClick = () => {
        if (weekOffset > -3) {
            setWeekOffset(weekOffset - 1);
        }
    };

    const getWeekRangeText = (): string => {
        const today = new Date();
    
        // Начало недели — понедельник
        const monday = new Date(today);
        monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7) + weekOffset * 7);
    
        // Конец недели — воскресенье
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
    
        const formatDate = (date: Date) =>
            `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}.${date.getFullYear().toString().slice(-2)}`;
    
        return `${formatDate(monday)} - ${formatDate(sunday)}`;
    };

    const { width } = useWindowSize();
    const showMobil = width <= 768;

    return (
        <>
            {!showMobil ? (
                <div className="week-selector-schedule">
                    <div className="btn-week-selector-schedule">
                        <Slider imagePath={ArrowLeft} onClick={onLeftClick} imgClassName="slider-button"/>
                    </div>
                    <div className="btn-week-selector-schedule">
                        <Slider imagePath={ArrowRight} onClick={onRightClick} imgClassName="slider-button"/>
                    </div>
                </div>
            ) : (
                <div className="week-selector-schedule">
                    <div className="btn-week-selector-schedule">
                        <Slider imagePath={ArrowLeft} onClick={onLeftClick} containerClassName="slider-button-lesson"/>
                    </div>
                    <div className="week-range-text">
                        {getWeekRangeText()}
                    </div>
                    <div className="btn-week-selector-schedule">
                        <Slider imagePath={ArrowRight} onClick={onRightClick} containerClassName="slider-button-lesson"/>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default ChoosingTheWeek;
