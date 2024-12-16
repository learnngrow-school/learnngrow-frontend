import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"
import TextError from "../../Errors/TextError"

export interface ITextInputProps {
    defaultValue?: string
    disabled?: boolean
    containerClassName?: string
    placeholder: string
    type: string
    id: string
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    register?: any
}

const TextInput = (props: ITextInputProps) => {
    return (
        <div className={"mb-3" + " " + props.containerClassName}>
            <input type={props.type} className="form-control inputText"
                id={props.id}
                placeholder={props.placeholder}
                value={props.defaultValue}
                {...props.register}
                disabled={props.disabled}
            />
            {props.error?.message && <TextError text={props.error.message.toString() || ''}/>}
        </div>
    )
}

export default TextInput;