import { useState } from 'react';
import { CustomSelectOption } from '../typings/my-types';


interface CustomSelectProps {
  options: CustomSelectOption[];
}
function CustomSelect({ options }: CustomSelectProps) {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CustomSelectOption>(options[0]);

  const toggleSelect = () => {
    setIsActive(!isActive);
  };

  const selectOption = (option: CustomSelectOption) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <div className="custom-select">
      <div className="flex justify-center items-center gap-2 bg-gray-800 rounded-md p-2 cursor-pointer" onClick={toggleSelect}>
        {selectedOption.icon} {selectedOption.title}
      </div>
      {isActive && (
        <ul className="options">
          {options.map((option) => (
            <li key={`${option.value}-${option.title}`} className="flex justify-center items-center gap-2 hover:bg-gray-600 cursor-pointer" onClick={() => selectOption(option)}>
              {option.icon} {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
