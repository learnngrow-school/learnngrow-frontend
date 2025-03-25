import { FC } from "react";
import CourseCard from "../CourseCard/course-card";
import { useNavigate } from "react-router-dom";
import '../../courses.css';
import { useCourses } from "../../../../services/courses.service";
import Sad from "../../../../assets/icons/sad.svg";
import { urls } from "../../../../navigation/app.urls";
import SubjectBarTeacher from "../SubjectBarTeacher/SubjectBarTeacher";

const Authorized: FC = () => {
    const { courses, error } = useCourses();
    const navigate = useNavigate();

    const handleCourseClick = (courseId: string) => {
        navigate(`${urls.myCoursesDeatil}/${courseId}`);
    };

    const user = JSON.parse(localStorage.getItem("user") as string);

    return (
        <div className="courses-page">
            <section className="sections">
                <section className="courses-section">
                    <h2 className="section-title section-title--green">Мои курсы</h2>
                    {user.isTeacher || user.isSuperuser ? (
                        <SubjectBarTeacher></SubjectBarTeacher>
                    ) : null}
                    {error ? (
                        <div className="error-container">
                            <img src={Sad} alt="sad" className="sad-icon"/>
                            <p className="text-error">Данных пока нет...</p>
                        </div>
                    ) : (<div className="course-list">
                        {courses.map((courseData) => {
                            const { title, price, string } = courseData.course || {};
                            const subject = courseData.subject?.title || "Предмет не указан";
                            return (
                                <div
                                    key={string}
                                    onClick={() => handleCourseClick(string)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <CourseCard
                                        key={string}
                                        title={title || "Не указано"}
                                        subject={subject}
                                        price={price != null ? price.toString() : "0"}
                                        progress={75}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
                </section>


                {user.isTeacher || user.isSuperuser ? (
                        null
                    ) : 
                    
                    <section className="courses-section">
                    <h2 className="section-title section-title--pink">Похожие курсы</h2>
                    {error ? (
                        <div className="error-container">
                            <img src={Sad} alt="sad" className="sad-icon"/>
                            <p className="text-error">Данных пока нет...</p>
                        </div>
                    ) : (
                    <div className="course-list">
                        <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="4000" />
                        <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="0" />
                    </div>
                    )}
                    </section>

                }
                
            </section>
        </div>
    );
};

export default Authorized;
