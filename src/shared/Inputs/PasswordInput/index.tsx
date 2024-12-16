import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form"
import ShowPasswordButton from "../../Buttons/ShowPasswordButton"
import TextError from "../../Errors/TextError"
import "./passwordInput.css"

interface IPasswordInputProps {
    id: string
    register?: any
    placeholder?: string
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const PasswordInput = (props: IPasswordInputProps)  => {
    return (
        <div className="pswd-block">
            <div className="password-input">
                <input type="password" className="form-control inputText" id={props.id} 
                    placeholder={props.placeholder}
                    {...props.register}/>
                <ShowPasswordButton inputId={props.id}/>
            </div>
            {props.error?.message && <TextError text={props.error?.message?.toString() || ''}/>}
        </div>
    )
}

export default PasswordInput