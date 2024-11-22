import React from 'react';
import './custom-checkbox.css';

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        className="custom-checkbox-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="custom-checkbox-label">
        <span className="custom-checkbox-box">
          
        </span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
