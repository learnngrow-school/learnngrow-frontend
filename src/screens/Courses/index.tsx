import { FC, useEffect, useState } from "react";
import '../../styles/text.css';
import "./courses.css"
import { Link } from 'react-router-dom';


const Courses: FC = () => {
    const [courses, setCourses] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/courses/');
                if (!response.ok) {
                    throw new Error('${response.statusText}');
                }
                const data = await response.json();
                console.log("Полученные курсы:", data);
                setCourses(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!Array.isArray(courses)) {
        return <p>Invalid course data</p>;
    }

    return (
        
        <div className="courses-page">
            <section className="sections">
                <section className="courses-section">
                    <h2 className="section-title section-title--green">Мои курсы</h2>
                    <div className="course-list">
                    {courses.map((courseData) => (
                        <CourseCard
                            key={courseData.course.id}
                            title={courseData.course.title}
                            //description={courseData.course.description} 
                            description="Профильный уровень ЕГЭ"
                            price={courseData.course.price.toString()}
                            progress={75} // Или другое значение, если оно доступно
                        />
                    ))}

                    </div>
                </section>
                
                <section className="courses-section">
                    <h2 className="section-title section-title--pink">Похожие курсы</h2>
                    <div className="course-list">
                        <CourseCard title="Математика" description="Профильный уровень ЕГЭ" price="4000"/>
                        <CourseCard title="Математика" description="Профильный уровень ЕГЭ" price="0"/>
                    </div>
                </section>
            </section>
        </div>
    );
};

const CourseCard: FC<{ title: string, description: string, price: string, progress?: number }> = ({ title, description, price, progress }) => {
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
                <p className="course-description">{description}</p>
                <p className="course-price">
                    {price === "0" ? "Бесплатно" : `${price} р/мес`}
                </p>
            </div>
        </Link>
    );
};
export default Courses;