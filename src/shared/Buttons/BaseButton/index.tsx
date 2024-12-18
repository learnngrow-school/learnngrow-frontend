import { forwardRef, useState } from "react"

export interface IButtonProps {
    text: string
    onClick?: (arg: any) => void,
    type?:
    | 'submit'
    | 'button'
    theme:
    | 'white-primary'
    | 'white-secondary'
    | 'white-without-shadow'
    | 'dark-blue-primary'
    | 'dark-blue-secondary'
    | 'pink-primary'
    | 'pink-secondary'
    | 'green'
    className?: string,
    iconFirst?: boolean,
    icon?: JSX.Element,
    iconPath?: string,
    iconPathHover?: string,
    iconClassName?: string,
}

const BaseButton = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const [iconPath, setIconPath] = useState(props.iconPath)

    const Icon = () => props.iconPath ? 
    <img src={iconPath} alt="icon" className={props.iconClassName} /> 
    : <div style={{marginLeft: '-5px'}}/>

    const IconPlusText = () => 
        <>
            <Icon/>        
            {props.text}
        </>

    const TextPlusIcon = () => 
        <>
        {props.text}
        <Icon/>        
        </>

    return (
        <button 
            ref={ref}
            type={props.type? props.type : 'button'}
            data-theme={props.theme ? props.theme : 'white'} 
            className={`button btn primary ${props.className}`} 
            onClick={props.onClick}
            onMouseEnter={() => setIconPath(props.iconPathHover)}
            onMouseLeave={() => setIconPath(props.iconPath)}>
            {props.iconFirst? <IconPlusText/> : <TextPlusIcon/>}
        </button>
    );
});

export default BaseButton