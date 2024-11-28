import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"
import TextError from "../../Errors/TextError"
import "./textInput.css"

export interface ITextInputProps {
    defaultValue?: string
    disabled?: boolean
    containerClassName?: string
    placeholder: string
    type: string
    id: string
    children?: JSX.Element
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const TextInput = (props: ITextInputProps) => {
    return (
        <div className={"mb-3" + " " + props.containerClassName}>
            <input type={props.type} className="form-control input-white"
                id={props.id}
                placeholder={props.placeholder}
                value={props.defaultValue}
                disabled={props.disabled}
            />
            <TextError text={props.error?.message?.toString() || ''}/>
        </div>
    )
}

export default TextInput;