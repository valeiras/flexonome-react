/* eslint-disable react/prop-types */
import './Input.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';

const Input = ({
  setOutputValue,
  defaultValue,
  minValue,
  maxValue,
  id,
  inputClass = '',
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById(id);
    setOutputValue(
      Math.max(minValue, Math.min(maxValue, parseInt(input.value)))
    );
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const increaseInput = () => {
    setInputValue((prevValue) => {
      const newValue = Math.min(maxValue, parseInt(prevValue) + 1);
      setOutputValue(newValue);
      return newValue;
    });
  };

  const decreaseInput = () => {
    setInputValue((prevValue) => {
      const newValue = Math.max(minValue, parseInt(prevValue) - 1);
      setOutputValue(newValue);
      return newValue;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="number"
          name={id}
          id={id}
          value={inputValue}
          min={minValue}
          max={maxValue}
          onChange={handleInputChange}
          className={inputClass}
        ></input>
        <div className="arrow-container">
          <FaChevronUp className="arrow" onClick={increaseInput} />
          <FaChevronDown className="arrow" onClick={decreaseInput} />
        </div>
      </div>
    </form>
  );
};

export default Input;
