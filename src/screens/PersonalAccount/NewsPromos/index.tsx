import { useState } from "react"
import BaseButton from "../../../shared/Buttons/BaseButton"
import NewsCard from "./components/NewsCard"
import Promos from "./components/PromoCard"
import "./newspromos.css"

const NewsPromos = () => {
    const [activeNews, setActiveNews] = useState(true)

    const onNewsClick = () => {
        setActiveNews(true)
    }

    const onPromosClick = () => {
        setActiveNews(false)
    }

    return (
        <>
            <div className="news-promos-body">
                <div className="news-promos-nav">
                    <BaseButton theme={activeNews? "white-secondary" : "white-without-shadow"} text="Новости" onClick={onNewsClick} className="nav-promos-news-btn"/>
                    <BaseButton theme={activeNews? "white-without-shadow": "white-secondary" } text="Акции" onClick={onPromosClick} className="nav-promos-news-btn"/>
                </div>
                <div className="news-promos-area">
                    {activeNews? <NewsCard/> : <Promos/>}
                </div>
            </div>
        </>
    )
}

export default NewsPromos
