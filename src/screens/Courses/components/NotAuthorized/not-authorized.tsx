import { FC, useState } from "react";
import '../../courses.css';
import { NavLink } from "react-router-dom";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import FilterDropdown from "../FilterDropdown/filter-dropdown";
import CourseCard from "../CourseCard/course-card";
import Search from "../../../../assets/icons/search.svg";
import { urls } from "../../../../navigation/app.urls";


const NotAuthorized: FC<{ courses: any[] }> = ({ courses }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <>
            <div className="navBack">
                <div className="miniNav">
                    <NavLink to={urls.main} className="text--body-s link text-400">Главная</NavLink>
                    <div>{">"}</div>
                    <div className="text--body-s">Курсы</div>
                </div>
            </div>

            <div className="search-and-filter-container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Найти курс"
                        className="search-input"
                    />
                    <img src={Search} alt="search" className="search-icon" />
                </div>

                <BaseButton
                    text="Фильтр"
                    theme="white-secondary"
                    className="btn-filter"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                />
                <FilterDropdown
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                />
            </div>

            <div className="courses-page">
                <div className="course-list-fullpage">
                    {courses.map((courseData) => {
                        const { title, price } = courseData.course || {}; // Безопасный доступ к вложенным данным
                        return (
                            <CourseCard
                                key={courseData.id}
                                title={title || 'Не указано'}
                                description="Профильный уровень ЕГЭ"
                                price={(price != null ? price.toString() : '0')}
                                progress={0}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default NotAuthorized;
