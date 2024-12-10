import { FC, useRef, useState } from "react";
import CourseCard from "../Courses/components/CourseCard/course-card";
import { useNavigate } from "react-router-dom";
import "./shop.css";
import { useCourses } from "../../services/courses.service";
import SearchInput from "../../shared/Inputs/SearchInput";
import BaseButton from "../../shared/Buttons/BaseButton";
import FilterDropdown from "../Courses/components/FilterDropdown/filter-dropdown";
import Search from "../../assets/icons/search.svg";
import { urls } from "../../navigation/app.urls";

const Shop: FC = () => {
    const { courses } = useCourses();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ [key: string]: boolean }>({});
    const filterButtonRef = useRef<HTMLButtonElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleFilterChange = (newFilters: { [key: string]: boolean }) => {
        setFilters(newFilters);
    };

    const handleCourseClick = (courseId: string) => {
        navigate(`${urls.myCoursesDeatil}/${courseId}`);
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
        <div className="courses-page" ref={pageRef}>
            <section className="sections">
                <section className="courses-section">
                    <h2 className="section-title section-title--green">Магазин</h2>

                    <div className="search-and-filter-container-shop">
                        <div className="search-container-shop">
                            <SearchInput />
                            <img src={Search} alt="search" className="search-icon" />
                        </div>

                        <BaseButton
                            text="Фильтр"
                            theme="white-secondary"
                            className="btn-filter-shop"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            ref={filterButtonRef}
                        />
                        <FilterDropdown
                            isOpen={isFilterOpen}
                            buttonRef={filterButtonRef}
                            pageRef={pageRef}
                            onClose={() => setIsFilterOpen(false)}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className="course-list">
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
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Shop;
