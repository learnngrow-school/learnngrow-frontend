import { FC } from "react";
import CourseCard from "../CourseCard/course-card";
import '../../courses.css';

const Authorized: FC<{ courses: any[] }> = ({ courses }) => {
    return (
        <div className="courses-page">
            <section className="sections">
                <section className="courses-section">
                    <h2 className="section-title section-title--green">Мои курсы</h2>
                    <div className="course-list">
                        {courses.map((courseData) => {
                            const { title, price } = courseData.course || {};
                            const subject = courseData.subject?.title || "Предмет не указан";
                            return (
                                <CourseCard
                                    key={courseData.id}
                                    title={title || 'Не указано'}
                                    subject={subject}
                                    price={(price != null ? price.toString() : '0')}
                                    progress={75}
                                />
                            );
                        })}
                    </div>
                </section>

                <section className="courses-section">
                    <h2 className="section-title section-title--pink">Похожие курсы</h2>
                    <div className="course-list">
                        <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="4000" />
                        <CourseCard title="Математика" subject="Профильный уровень ЕГЭ" price="0" />
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Authorized;
