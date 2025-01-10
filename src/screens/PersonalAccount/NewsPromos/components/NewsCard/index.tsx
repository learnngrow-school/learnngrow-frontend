import { News } from "../../../../../types/news"
import Skills from "../../../../../assets/pictures/5-skills.png"
import OnlineLearning from "../../../../../assets/pictures/online-learning.jpg"
import "./news.css"

const newsList: News[] = [
    {
        id: 1,
        title: "Онлайн-обучение: Удобство и эффективность в одном формате!",
        details: 
           `В современном мире, где время – самый ценный ресурс, онлайн-обучение становится всё более популярным. Оно сочетает в себе удобство и эффективность, открывая новые возможности для обучения и развития.\nПочему стоит выбрать онлайн-обучение?
            
            Удобство: Учитесь в любое время и в любом месте, где есть интернет. Никаких пробок и привязки к конкретному расписанию
            
            Гибкость: Занимайтесь в своем темпе, совмещая обучение с работой, семьей и другими делами`,
        picturePath: OnlineLearning,
        vkUrl: "https://vk.com/wall-216089771_52"
    },
    {
        id: 2,
        title: "5 навыков, которые откроют двери в будущее!",
        details: 
                `Мир меняется стремительно, и чтобы быть успешным завтра, нужно развивать правильные навыки уже сегодня.\n`+ 
                `Какие из них будут наиболее востребованы? Мы собрали ТОП-5!\n \nКритическое мышление: Это не просто умение анализировать информацию,`,
        picturePath: Skills,
        vkUrl: "https://vk.com/wall-216089771_28"
    }
]

const NewsCard = () => {
    return (
        <>
        {newsList.map((item) => 
            <div className="news-card" key={item.id} onClick={() => window.open(item.vkUrl)}>
                <div>
                    <div className="text--heading3 text--blue text-600 news-title">{item.title}</div>
                    <div className="text--body-s text--blue text-400 news-details">{item.details.length > 220? item.details.slice(0, 220) + "..." : item.details}</div>
                </div>
                <div className="news-img-container">
                    <img src={item.picturePath} alt="picture" className="news-img"/>
                </div>
            </div>   
        )}   
        </>
    )
}

export default NewsCard