import BaseButton from "../../../../../shared/Buttons/BaseButton"
import { PromoParticipant } from "../../../../../types/promo"
import Books from "../../../../../assets/pictures/books.png"
import "./promo.css"


const Promos = () => {
    const promoParticipants: PromoParticipant[] = [
        {       
            subject: "Математика",
            teacher: "Даниил Павлович",
        },
        {       
            subject: "Физика",
            teacher: "Даниил Павлович",
        },
        {       
            subject: "Английский язык",
            teacher: "Мария Эдуардовна, Максим Геннадьевич",
        },
        {       
            subject: "Русский язык",
            teacher: "Ксения Алексеевна",
        },
        {       
            subject: "Литература",
            teacher: "Ксения Алексеевна",
        },
        {       
            subject: "Обществознание",
            teacher: "Максим Геннадьевич",
        },

    ]

    const onGetPromoClick = () => {
        window.open("https://skobelkin.ru/whatsapp/79122587798?text=Здравствуйте,+хочу+участвовать+в+акции");
    }

    return (
        <div className="promo-card-container">
            <div className="promo-title-container">
                <div className="text--heading3 text--blue text-600">Двойная выгода: учитесь больше, платите меньше!</div>
                <img className="promo-title-img" src={Books} alt="books"/>
            </div>

           <div className="text--body-s text-400 text--blue">
                <div>Посещайте занятия сразу у двух репетиторов и получайте скидку на каждое занятие!</div>
                <br/>
                <div>
                    <div>В акции участвуют следующие предметы и преподаватели:</div>
                    <ol>
                        { promoParticipants.map((p, index) => 
                            <li key={index}>
                                {p.subject}: {p.teacher}
                            </li>
                        )}
                    </ol>
                </div>
                <br/>
                <div>Не упустите возможность получить качественное образование по выгодной цене!</div>
            </div>

            <div className="text--heading3 text-600 text--blue price-text">Цена за занятие:</div>
        
            <div className="price-btn-block">
                <div className="old-new-prices-block">
                    <div className="text--heading3 text-600 new-price">1000 ₽/час</div>
                    <div className="text--body-s old-price">1200 ₽/час</div>
                </div>
                <BaseButton theme="pink-primary" text="Участвовать в акции" onClick={onGetPromoClick} className="get-promo-btn"/>
            </div>
        </div>
    )
}

export default Promos