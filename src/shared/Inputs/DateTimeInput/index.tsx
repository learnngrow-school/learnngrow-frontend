import React, { useState } from 'react';
import "./datetime.css"

interface IProps {
    register?: any;
    minDate?: Date;
    placeholder?: string;
    id?: string | number;
}

const DateTimeInput: React.FC<IProps> = ({register, minDate, placeholder, id}) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <input
      className='calendar' 
      type="datetime-local"
      id={id}
      value={value} 
      onChange={(e) => setValue(new Date(e.target.value))}
      min={minDate}
      placeholder={placeholder}
      step={"5"}
      {...register}
    />
  );
};

export default DateTimeInput;