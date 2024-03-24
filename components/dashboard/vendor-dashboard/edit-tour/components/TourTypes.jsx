import React from 'react';

const DropdownList = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select an option</option>
      {options?.data.map((option, index) => (
        <option key={index} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default DropdownList;