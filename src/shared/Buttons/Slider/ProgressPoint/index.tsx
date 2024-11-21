import "./progress-point.css";

interface IProps {
    isActive: boolean
}

const ProgressPoint = ({ isActive }: IProps) => {
    const pointClass = isActive ? 'point-active' : '';
    return (
        <div className="points-container">
            <div className={"point " + pointClass}/>
        </div>
    )
};

export default ProgressPoint