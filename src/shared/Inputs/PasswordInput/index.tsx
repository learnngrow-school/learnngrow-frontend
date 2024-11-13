import ShowPasswordButton from "../../Buttons/ShowPasswordButton"
import "./passwordInput.css"

interface IPasswordInputProps {
    inputId: string
    children: JSX.Element
}

const PasswordInput = (props: IPasswordInputProps)  => {
    return (
        <div className="password-input">
            {props.children}
            <ShowPasswordButton inputId={props.inputId}/>
        </div>
    )
}

export default PasswordInput