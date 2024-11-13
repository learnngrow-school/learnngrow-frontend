export interface ITextErrorProps {
    text: string
}

const TextError = (props: ITextErrorProps) => {
    return (
        <p className="input--error text--body-xs">
            {props.text}
        </p>
    )
}

export default TextError