import React, { FC, useState } from "react";
import CustomCheckbox from "../../../../shared/Buttons/CheckBox/checkbox";
import "./filter-dropdown.css";

interface FilterDropdownProps {
    isOpen: boolean;
    onClose: () => void;
    onFilterChange?: (filters: { [key: string]: boolean }) => void; // Для передачи фильтров в родительский компонент
}

const FilterDropdown: FC<FilterDropdownProps> = ({ isOpen, onClose, onFilterChange }) => {
    const [filters, setFilters] = useState<{ [key: string]: boolean }>({
        math: false,
        informatics: false,
        beginner: false,
        intermediate: false,
        advanced: false,
    });

    const handleCheckboxChange = (key: string, value: boolean) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);

        // Вызываем onFilterChange, если передано
        if (onFilterChange) {
            onFilterChange(updatedFilters);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="filter-dropdown-overlay">
            <div className="filter-dropdown-content">
                <div className="first-block">
                    <div className="label">Рубрика</div>
                    <div className="filter-option">
                        <CustomCheckbox
                            id="math"
                            label="Математика"
                            checked={filters.math}
                            onChange={(value) => handleCheckboxChange("math", value)}
                        />
                    </div>
                    <div className="filter-option">
                        <CustomCheckbox
                            id="informatics"
                            label="Информатика"
                            checked={filters.informatics}
                            onChange={(value) => handleCheckboxChange("informatics", value)}
                        />
                    </div>
                </div>
                <div className="last-block">
                    <div className="label">Уровень</div>
                    <div className="filter-option">
                        <CustomCheckbox
                            id="beginner"
                            label="Начальный"
                            checked={filters.beginner}
                            onChange={(value) => handleCheckboxChange("beginner", value)}
                        />
                    </div>
                    <div className="filter-option">
                        <CustomCheckbox
                            id="intermediate"
                            label="Средний"
                            checked={filters.intermediate}
                            onChange={(value) => handleCheckboxChange("intermediate", value)}
                        />
                    </div>
                    <div className="filter-option">
                        <CustomCheckbox
                            id="advanced"
                            label="Углубленный"
                            checked={filters.advanced}
                            onChange={(value) => handleCheckboxChange("advanced", value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
