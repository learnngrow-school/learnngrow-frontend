import React, { useState } from 'react';
import "./datetime.css"

interface IProps {
    register?: any;
    minDate?: Date;
    placeholder?: string;
    id?: string | number;
}

const DateTimeInput: React.FC<IProps> = ({register, minDate, placeholder, id}) => {
  const [value, setValue] = useState<Date | any>(undefined);

  return (
    <input
      className='calendar' 
      type="datetime-local"
      id={id}
      value={value} 
      onChange={(e) => setValue(new Date(e.target.value))}
      min={minDate && minDate.setMinutes(0)}
      placeholder={placeholder}
      step={"60"}
      {...register}
    />
  );
};

export default DateTimeInput;