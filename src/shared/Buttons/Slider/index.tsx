import "./slider.css"

interface IProps {
    disabled?: boolean
    imagePath?: string
    imgClassName?: string
    containerClassName?: string
    onClick: () => void
}

const Slider = ({ onClick, imagePath, imgClassName, disabled = false, containerClassName }: IProps) => {
    return (
    <button onClick={onClick} className={`slider ${containerClassName || ""} ${disabled ? "disabled" : ""}`}>
        <img className={"slider-img " + imgClassName} src={imagePath} alt="slider" />
    </button>
    );
}

export default Slider