import { FC, useState } from "react";
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
    const [selectedSubject, setSelectedSubject] = useState<string>("Все предметы");

    const handleCourseClick = (courseId: string) => {
        navigate(`${urls.myCoursesDeatil}/${courseId}`);
    };

    const user = JSON.parse(localStorage.getItem("user") as string);

    // Фильтрация курсов по выбранному предмету
    const filteredCourses = selectedSubject === "Все предметы"
        ? courses
        : courses.filter(courseData => courseData.subject?.title === selectedSubject);

    return (
        <div className="courses-page">
            <section className="sections-courses-page">
                <section className="courses-section">
                    <h2 className="section-title section-title--green section-green-header-courses">Мои курсы</h2>
                    {user.isTeacher || user.isSuperuser ? (
                        <SubjectBarTeacher
                            selectedSubject={selectedSubject}
                            onSubjectChange={setSelectedSubject}  // Передаем функцию изменения выбранного предмета
                        />
                    ) : null}
                    {error ? (
                        <div className="error-container">
                            <img src={Sad} alt="sad" className="sad-icon"/>
                            <p className="text-error">Данных пока нет...</p>
                        </div>
                    ) : (
                        <div className="course-list-s">
                            {filteredCourses.map((courseData) => {
                                const { title, price, slug } = courseData.course || {};
                                const subject = courseData.subject?.title || "Предмет не указан";
                                return (
                                    <div
                                        key={slug}
                                        onClick={() => handleCourseClick(slug)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <CourseCard
                                            key={slug}
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
                    // <div className="course-list">
                    //     {/* <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="4000" />
                    //     <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="0" /> */}
                    // </div>
                    <div className="error-container">
                        <img src={Sad} alt="sad" className="sad-icon"/>
                        <p className="text-error">Данных пока нет...</p>
                    </div>
                    )}
                    </section>

                }
                
            </section>
        </div>
    );
};

export default Authorized;
