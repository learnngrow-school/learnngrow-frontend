import { useState } from "react";
import View from "../../../assets/pictures/view.png"
import Hide from "../../../assets/pictures/hide.png"
import "./passwordButton.css"

interface IProps {
    inputId: string
}

const ShowPasswordButton = (props: IProps) => {
    const [hidden, setHidden] = useState(true)
    const [icon, setIcon] = useState(Hide)
    

    const onClick = () => {
        if (hidden) {
            const passwordInput = document.getElementById(`${props.inputId}`) as HTMLInputElement;
            passwordInput.type = 'text';
            setIcon(View)
        }
        else {
            const passwordInput = document.getElementById(`${props.inputId}`) as HTMLInputElement;
            passwordInput.type = 'password';
            setIcon(Hide)
        }
        setHidden(!hidden)
    }
    return (
        <button onClick={onClick} className="password-button">
            <img src={icon} alt="eye" className="img-eye"/>
        </button>
    )
}

export default ShowPasswordButton