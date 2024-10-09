import { IButtonProps } from "../BaseButton"

export interface IDropDownButtonProps extends IButtonProps {
    items: string[]
}
const DrowDownButton = (props: IDropDownButtonProps) => {
    return (
        <>
        <div className="btn-group">
            <button className={`button btn primary btn-sm dropdown-toggle ${props.className}`} 
                type="button" data-bs-toggle="dropdown" aria-expanded="false"
                data-theme={props.theme ? props.theme : 'white'}>
                {props.text}
            </button>
            <ul className="dropdown-menu" data-theme={props.theme ? props.theme : 'white'}>
                {props.items.map((item, index) => (
                    <li key={index} onClick={props.onClick}>
                        <a className="dropdown-item" href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default DrowDownButton