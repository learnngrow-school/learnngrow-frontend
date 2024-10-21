
export interface ITextInputProps {
    className?: string
    placeholder: string
    type: string
    id: string
}

const TextInput = (props: ITextInputProps) => {
    return (
        <div className="mb-3">
                <input type={props.type} className={`form-control ${props.className}`} 
                id={props.id}
                placeholder={props.placeholder}
                // {...register('password', { required: "Это поле не может быть пустым" })}
                />
                {/* {<p>{errors.password?.message?.toString()}</p>} */}
        </div>
    )
}

export default TextInput;