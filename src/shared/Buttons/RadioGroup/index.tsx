// import { useState } from "react";
import { useState } from "react";
import "./radioGroup.css"

type RadioItem = {
    name: string;
    isChecked: boolean;
    value: any
}

interface IProps {
    data: RadioItem[]
    setValue?: any
    register?: any
}

export const RadioGroup = ({data, register, setValue}: IProps) => {
    const [selectedItem, setSelectedItem] = useState('');
    const onClick = (item: any) => {
        setSelectedItem(item);
        if (data[0].name == selectedItem) {
            data[0].isChecked = true;
            data[1].isChecked = false;
            setValue(data[0].value);
        }
        else{
            data[0].isChecked = false;
            data[1].isChecked = true;
            setValue(data[1].value);
        }
        console.log(data);
    }
    return (
        <div className="radio-buttons-group">
        {data.map((item, index) => (
            <div key={index} onClick={() => onClick(item.name)}>
                <input type="radio" className="btn-check" name="options-base" id={`option${item.name}`} 
                    autoComplete="off" checked={selectedItem === item.name} {...register} onChange={() => onClick(item.name)}/>
                <label className="radio-label btn" htmlFor={`option${item.name}`}>{item.name}</label>
            </div>
        ))}
        </div>
    );
};

export default RadioGroup