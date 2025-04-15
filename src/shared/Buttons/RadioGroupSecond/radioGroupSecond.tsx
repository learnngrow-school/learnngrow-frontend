import React from 'react';
import './radioGroupSecond.css';

interface RadioGroupProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  name: string;
}

const RadioGroupSecond: React.FC<RadioGroupProps> = ({ options, selected, onChange, name }) => {
  return (
    <div className="radio-group-s">
      {options.map((option) => (
        <div key={option} className="radio-item-s">
          <input
            type="radio"
            id={option}
            name={name}
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            className="radio-input-s"
          />
          <label htmlFor={option} className="radio-label-s">
            <span className="radio-circle-s"></span>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroupSecond;
