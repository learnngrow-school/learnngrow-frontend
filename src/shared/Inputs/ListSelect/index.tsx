import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { User } from "../../../types/user";
import "./listSelect.css"

interface IProps {
    placeholder?: string
    data: any
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    register?: any
}

const ListSelect = ({data,  register} :IProps) => {
    return (
        <div className="select-container ">
            <select className="select-field form-select" id="floatingSelect">
                {data.map((item: User, index: any) => (
                    <option 
                    key={item.slug}
                    value={item ? item.slug : index}
                    {...register}
                    >
                    {item.lastName} {item.firstName} {item.middleName}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ListSelect