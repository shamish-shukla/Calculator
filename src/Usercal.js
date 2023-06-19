import React, { useState } from 'react';
import "../src/Usercal.css";
const Usercal = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='body'>
      <h1>Calculator App</h1>
      <input type="text" value={input} readOnly />
      <button className='result' onClick={handleClearClick}>Clear</button>
      <div className='subsection'>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className='subsection'>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div className='subsection'>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div className='subsection'>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default Usercal;
