import './contacts.css'
import Address from "../../assets/icons/address.svg"
import Vk from "../../assets/icons/vk.svg"
import Telegram from "../../assets/icons/telegram.svg"
import Phone from "../../assets/icons/phone.svg"
import Email from "../../assets/icons/mail.svg"
import Whatsapp from "../../assets/icons/whatsapp.svg"
import { NavLink } from 'react-router-dom'
import { urls } from '../../navigation/app.urls'

const Contacts = () => {

    return (
        <div className="content">

            <div className="navBack">
                <div className="miniNav">
                    <NavLink to={urls.main} className="text--body-s link text-400">Главная</NavLink>
                    <div>{">"}</div>
                    <div className="text--body-s">Контакты</div>
                </div>
            </div>

            <div className="contactsContainer"> 
                <div className="addressItem">
                    <img src={Address} alt="address" className="icon"/>
                    <div>
                        <div className="text--heading4 text-600 heading-4">Адрес: </div>
                        <div className="text--body-s heading-4"> г. Екатеринбург, ул. Набережная рабочей молодежи, д.1</div>
                    </div>
                </div>
                
                <hr className="hrContacts"/>

                <div className="phoneContainer">
                    <div className="gridItem" onClick={() => window.open("tel:+79122587798")}>
                        <img src={Phone} alt="phone" className="icon"/>
                        <div>
                            <div className="text--heading4 text-600 heading-4">Телефон:</div>
                            <div className="text--heading4 heading-4 contactText">+7 (912) 258-77-98</div>
                        </div>
                    </div>

                    <div className="gridItem" onClick={() => window.open("https://vk.com/whaletoy") }>
                        <img src={Vk} alt="vk" className="icon"/>
                        <div>
                            <div className="text--heading4 text-600 heading-4">ВКонтакте:</div>
                            <div className="text--heading4 heading-4 contactText">vk.com/whaletoy</div>
                        </div>
                    </div>

                    <div className="gridItem" onClick={() => window.open("https://wa.me/79122587798") }>
                        <img src={Whatsapp} alt="whatsapp" className="icon"/>
                        <div>
                            <div className="text--heading4 text-600 heading-4">WhatsApp:</div>
                            <div className="text--heading4 heading-4 contactText">+7 (912) 258-77-98</div>
                        </div>
                    </div>

                    <div className="gridItem" onClick={() => window.open("https://t.me/whaletoy") }>
                        <img src={Telegram} alt="telegramm" className="icon"/>
                        <div>
                            <div className="text--heading4 text-600 heading-4">Телеграмм:</div>
                            <div className="text--heading4 heading-4 contactText">+7 (912) 258-77-98</div>
                        </div>
                    </div>

                </div>

                <hr className="hrContacts"/>

                <div className="gridItem" onClick={() => window.open("mailto:sonya.kiyatkina@mail.ru") }>
                    <img src={Email} alt="mail" className="icon"/>
                    <div>
                        <div className="text--heading4 text-600 heading-4">Почта:</div>
                        <div className="text--heading4 heading-4 contactText">sonya.kiyatkina@mail.ru </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts