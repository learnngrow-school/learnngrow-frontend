export interface IButtonProps {
    text: string
    onClick?: (arg: any) => void,
    type?:
    | 'submit'
    | 'button'
    theme:
    | 'white'
    | 'dark-blue-primary'
    | 'dark-blue-secondary'
    | 'pink'
    | 'green'
    className?: string,
    logoPath?: string,
    icon?: JSX.Element,
    iconPath?: string,
    iconClassName?: string
}

const BaseButton = (props: IButtonProps) => {

    const Icon = () => props.iconPath ? 
    <img src={props.iconPath} alt="icon" className={props.iconClassName}/> 
    : <p/>

    return (
        <button type={props.type? props.type : 'button'}
            data-theme={props.theme ? props.theme : 'white'} 
            className={`button btn primary ${props.className}`} 
            onClick={props.onClick}>
        <Icon/>        
        {props.text}
        </button>
    )
}

export default BaseButton