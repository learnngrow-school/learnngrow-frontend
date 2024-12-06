import React from "react";
import "./searchInput.css";

export interface ISearchInputProps {
    defaultValue?: string;
    disabled?: boolean;
    containerClassName?: string;
    placeholder?: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const SearchInput = (props: ISearchInputProps) => {
    return (
        <div className={"search-input-container" + " " + props.containerClassName}>
            <input
                type="text"
                id={props.id || "search-input"}
                className="search-input"
                placeholder={props.placeholder || "Найти..."}
                value={props.defaultValue}
                disabled={props.disabled}
                onChange={props.onChange}
            />
            <div className="error-message">{props.error}</div>
        </div>
    );
};

export default SearchInput;
