import { FC, useRef, useState } from "react";
import "./not-authorized.css";
import { NavLink, useNavigate } from "react-router-dom";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import FilterDropdown from "../FilterDropdown/filter-dropdown";
import CourseCard from "../CourseCard/course-card";
import Search from "../../../../assets/icons/search.svg";
import Sad from "../../../../assets/icons/sad.svg";
import { urls } from "../../../../navigation/app.urls";
import { useCourses } from "../../../../services/courses.service";
import SearchInput from "../../../../shared/Inputs/SearchInput";

const NotAuthorized: FC = () => {
    const { courses, error } = useCourses();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ [key: string]: boolean }>({});
    const filterButtonRef = useRef<HTMLButtonElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleFilterChange = (newFilters: { [key: string]: boolean }) => {
        setFilters(newFilters);
    };

    const handleCourseClick = (courseId: string) => {
        navigate(`${urls.courses}/${courseId}`);
    };

    const filteredCourses = courses.filter((courseData) => {
        const selectedSubjects = [];
        if (filters.math) selectedSubjects.push("Математика");
        if (filters.informatics) selectedSubjects.push("Информатика");
        if (filters.russianlang) selectedSubjects.push("Русский язык");

        const categoryMatch =
            selectedSubjects.length === 0 ||
            selectedSubjects.includes(courseData.subject?.title);
    
        return categoryMatch;
    });
    
    

    return (
        <>
            <div className="navBack">
                <div className="miniNav">
                    <NavLink to={urls.main} className="text--body-s link text-400">
                        Главная
                    </NavLink>
                    <div>{">"}</div>
                    <div className="text--body-s">Курсы</div>
                </div>
            </div>

            <div className="search-and-filter-container" ref={pageRef}>
                <div className="search-container">
                    <SearchInput />
                    <img src={Search} alt="search" className="search-icon" />
                </div>

                <BaseButton
                    text="Фильтр"
                    theme="white-secondary"
                    className="btn-filter"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    ref={filterButtonRef}
                />
                <FilterDropdown
                    isOpen={isFilterOpen}
                    buttonRef={filterButtonRef}
                    pageRef={pageRef} // Передаем реф страницы
                    onClose={() => setIsFilterOpen(false)}
                    onFilterChange={handleFilterChange}
                />
            </div>

            <div className="courses-page-not-auth">
                {error ? ( 
                    <div className="error-container-na">
                        <img src={Sad} alt="sad" className="sad-icon-na"/>
                        <p className="text-error">Данных пока нет...</p>
                    </div>
                    ) : (<div className="course-list-fullpage">
                        {filteredCourses.map((courseData) => {
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
                                        progress={0}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default NotAuthorized;
