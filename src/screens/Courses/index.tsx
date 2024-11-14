import { FC } from "react";
import '../../styles/text.css';
import "./courses.css"
import { Link } from 'react-router-dom';


const Courses: FC = () => {
//    const selectedSubject = localStorage.getItem('subject');

    return (
        <div className="courses-page">
            <section className="sections">
                <section className="courses-section">
                    <h2 className="section-title section-title--green">Мои курсы</h2>
                    <div className="course-list">
                        <CourseCard title="Математика" level="Профильный уровень ЕГЭ" price="4 000 р/мес" progress={100}/>
                        <CourseCard title="Математика" level="Профильный уровень ЕГЭ" price="5 000 р/мес" progress={67}/>
                    </div>
                </section>

                <section className="courses-section">
                    <h2 className="section-title section-title--pink">Похожие курсы</h2>
                    <div className="course-list">
                        <CourseCard title="Математика" level="Профильный уровень ЕГЭ" price="4 000 р/мес"/>
                        <CourseCard title="Математика" level="Профильный уровень ЕГЭ" price="Бесплатно"/>
                    </div>
                </section>
            </section>

        </div>
    );  
};

const CourseCard: FC<{ title: string, level: string, price: string, progress?: number }> = ({ title, level, price, progress }) => {
    return (
        <Link to={"#"} className="course-card-link">
            <div className="course-card">
                <div className="course-image"> {/*изображение*/}
                    {progress !== undefined && (
                        <div className="course-progress-bar">
                            <div className="course-progress" style={{ width: `${progress}%` }}>
                                <span className="course-progress-text">{progress}%</span>
                            </div>
                        </div>
                        )} 
                </div>
                
                <p className="course-title">{title}</p>
                <p className="course-level">{level}</p>
                <p className="course-price">{price}</p>
            </div>
        </Link>
    );
};
export default Courses;