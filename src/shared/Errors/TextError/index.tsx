export interface ITextErrorProps {
    text: string
}

const TextError = (props: ITextErrorProps) => {
    return (
        <p className="input--error">
            {props.text}
        </p>
    )
}

export default TextError