import React, { FC } from 'react';
import { InputProps } from '../../../types/types';
import './Input.scss';

const Input: FC<InputProps> = ({
  onChange,
  type,
  value,
  ref,
  children,
  placeholder,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      className="input"
      ref={ref}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

export default Input;
