import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { User } from "../../../types/user";

interface IProps {
    placeholder?: string;
    data: any;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    register?: any;
    onSelectChange?: (value: string) => void;
}

const ListSelectGrade = ({ data, register, onSelectChange }: IProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSlug = e.target.value;
        if (onSelectChange) {
            onSelectChange(selectedSlug);
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
                {data.map((item: User) => (
                    <option key={item.slug} value={item.lastName}>
                        {item.lastName} {item.firstName} {item.middleName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListSelectGrade;
