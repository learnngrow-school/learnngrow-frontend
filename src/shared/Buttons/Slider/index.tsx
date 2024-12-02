import "./slider.css"

interface IProps {
    disabled?: boolean
    imagePath?: string
    imgClassName?: string
    onClick: () => void
}

const Slider = ({ onClick, imagePath, imgClassName, disabled = false }: IProps) => {
    return (
    <button onClick={onClick} className={"slider" + (disabled ? " disabled" : "")}>
        <img className={"slider-img " + imgClassName} src={imagePath} alt="slider" />
    </button>
    );
}

export default Slider