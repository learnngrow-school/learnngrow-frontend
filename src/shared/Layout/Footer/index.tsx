import WhiteLogo from "../../../assets/icons/whiteLogo.svg"
import './footer.css'
import { useNavigate } from "react-router-dom"
import { urls } from "../../../navigation/app.urls"

const Footer = () => {

    const navigate = useNavigate()

    const onLogoClick = () => { 
        navigate(urls.main);
    }

    return (
        <>
            <img className="footerLogo" src={WhiteLogo} alt="logo" onClick={onLogoClick}/>
            <div className="infoContainer">
                <div className="text--body-m text-400">+7 (912) 258 77 98</div>
                <div className="text--body-s text-400">г. Екатеринбург, ул. Набережная рабочей молодежи, д. 1</div>
            </div>
        </>
    )
}

export default Footer