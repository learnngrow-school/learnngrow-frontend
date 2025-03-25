import Slider from "../../../../../shared/Buttons/Slider";
import ArrowRight from "../../../../../assets/icons/long-arrow-right.svg";
import ArrowLeft from "../../../../../assets/icons/long-arrow-left.svg";
import "./main.css";

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

    return (
        <div className="week-selector-schedule">
            <div className="btn-week-selector-schedule">
                <Slider imagePath={ArrowLeft} onClick={onLeftClick} imgClassName="slider-button"/>
            </div>
            <div className="btn-week-selector-schedule">
                <Slider imagePath={ArrowRight} onClick={onRightClick} imgClassName="slider-button"/>
            </div>
            <div className="btn-week-selector-schedule">
                {/* <span>{weekOffset === -1 ? "Прошлая" : weekOffset === 0 ? "Текущая" : "Будущая"}</span> */}
            </div>
        </div>
    );
};

export default ChoosingTheWeek;
