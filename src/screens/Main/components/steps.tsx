import "../main.css";
import First from "../../../assets/icons/1.svg"
import Second from "../../../assets/icons/2.svg"
import Third from "../../../assets/icons/3.svg"
import Fourth from "../../../assets/icons/4.svg"

const steps = [
    { icon: First, title: "Завести личный кабинет" },
    { icon: Second, title: "Пройти тестирование в ТГ боте"},
    { icon: Third, title: "Приобрести подходящий курс" },
    { icon: Fourth, title: "Начать обучение"}
]

const Steps = () => {
    return (
        <div className="grid-4">
            {steps.map((step) => (
                <div className="step-card" key={step.title}>
                    <img src={step.icon} alt="icon"/> 
                    <div className="text--body-s text-400 step-text">{step.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Steps