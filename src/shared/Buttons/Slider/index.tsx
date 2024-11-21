import "./slider.css"

interface IProps {
    imagePath?: string
    imgClassName?: string
    onClick: () => void
}

const Slider = ({ onClick, imagePath, imgClassName }: IProps) => {
    return (
    <button onClick={onClick} className="slider">
        <img className={"slider-img " + imgClassName} src={imagePath} alt="slider" />
    </button>
    );
}

export default Slider