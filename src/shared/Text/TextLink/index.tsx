import { NavLink } from "react-router-dom"
import { ILink } from "../../../navigation/navigation.types"
import '../../../styles/text.css'
import './textLink.css'

const TextLink = (props: ILink) => {
    return (
        <>
        <NavLink
            className={"textLink text--body-l text-400"}
            to={props.path}>
            {props.icon} {props.name}
        </NavLink>
        </>
    )
}

export default TextLink