import React from "react";
import ArrowRight from "../../../../assets/icons/long-arrow-right.svg"
import ArrowLeft from "../../../../assets/icons/long-arrow-left.svg"
import Slider from "../../../../shared/Buttons/Slider";
import "./slider.css"

interface IProps{
    children: React.JSX.Element[]
    onRightClick: () => void
    onLeftClick: () => void
}

const PointsSlider = ({children, onRightClick, onLeftClick} : IProps) => {
    return (
        <div className="slider-points-container">
            <Slider imagePath={ArrowLeft} onClick={onLeftClick} imgClassName="slider-buttonr"/>
            <div className="points">
                {children}
            </div>
            <Slider imagePath={ArrowRight} onClick={onRightClick} imgClassName="slider-button"/>
            </div>
        )
    
}

export default PointsSlider