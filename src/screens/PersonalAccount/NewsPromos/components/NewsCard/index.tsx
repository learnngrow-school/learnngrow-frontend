import { News } from "../../../../../types/news"
import Books from "../../../../../assets/pictures/books.png"
import Skills from "../../../../../assets/pictures/5-skills.png"
import "./news.css"

const newsList: News[] = [
    {
        id: 1,
        title: "Двойная выгода: учитесь больше, платите меньше!",
        details: "Посещайте занятия сразу у двух репетиторов и получайте скидку на каждое занятие! " +
        "В акции участвуют следующие предметы и преподаватели: Математика: " +
        "Даниил Павлович, Физика: Даниил Павлович, Английский язык: Мария Эдуардовна, Максим...",
        picturePath: Books,
    },
    {
        id: 2,
        title: "5 навыков, которые откроют двери в будущее!",
        details: 
                <p>{`Мир меняется стремительно, и чтобы быть успешным завтра, нужно развивать правильные навыки уже сегодня. ` + 
                `Какие из них будут наиболее востребованы? Мы собрали ТОП-5!`}
                    <br/>
                    <br/> 
                {`Критическое мышление : Это не просто умение анализирова...`}
                </p>,
        picturePath: Skills,
    }
]

const NewsCard = () => {
    return (
        <>
        {newsList.map((item) => 
            <div className="news-card" key={item.id}>
                <div>
                    <div className="text--heading3 text--blue text-600 news-title">{item.title}</div>
                    <div className="text--body-s text--blue text-400">{item.details}</div>
                </div>
                <div className="news-img-container">
                    <img src={item.picturePath} alt="picture"/>
                </div>
            </div>   
        )}   
        </>
    )
}

export default NewsCard