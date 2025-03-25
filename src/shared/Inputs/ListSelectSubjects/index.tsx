import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import "./main.css";

interface Subject {
    id: number;
    title: string;
}

interface IProps {
    placeholder?: string;
    data: Subject[];
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    register?: any;
    onSelectChange?: (value: string) => void;
}

const ListSelectSubjects = ({ data, register, onSelectChange }: IProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        if (onSelectChange) {
            onSelectChange(selectedId);
        }
    };

    return (
        <div className="select-container">
            <select
                className="select-field form-select"
                id="floatingSelect"
                {...register}
                onChange={handleChange}
            >
                <option value="" className="text-select-subject-list">Выберите предмет</option>
                {data.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                        {subject.title}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default ListSelectSubjects;
