import React, { FC, useState } from 'react';
import { SelectProps } from '../../../types/types';
import './Select.scss';
import arrowImg from '../../../assets/arrow.svg';

const Select: FC<SelectProps> = ({ onChange, options, value }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className="select"
        onClick={handleClick}
        onBlur={() => setIsClicked(false)}
      >
        {options.map((option) => (
          <option key={option} value={option} className="select__option">
            {option}
          </option>
        ))}
      </select>
      <img
        src={arrowImg}
        alt="arrow"
        className="select__arrow"
        style={{ transform: isClicked ? 'rotate(180deg)' : '' }}
      />
    </>
  );
};

export default Select;
