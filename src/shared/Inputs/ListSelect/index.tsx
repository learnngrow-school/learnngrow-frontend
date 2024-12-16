import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form"
import { Teacher } from "../../../types/teacher"
import "./listSelect.css"

interface IProps {
    placeholder: string
    data: any
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    register?: any
}

const ListSelect = ({data, placeholder, register} :IProps) => {
    console.log(data);
    return (
        <div className="form-floating select-container">
            <select className="form-select" id="floatingSelect">
                {data.map((item: Teacher, index: any) => (
                    <option 
                    key={item.userData.slug}
                    value={item.userData ? item.userData.slug : index}
                    {...register}
                    >
                    {item.userData.lastName} {item.userData.firstName} {item.userData.middleName}
                    </option>
                ))}
            </select>
            <label htmlFor="floatingSelect">{placeholder}</label>
        </div>
    )
}

export default ListSelect