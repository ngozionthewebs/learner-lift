// components/Option.js
import React from 'react';
import '../styles/Quiz.css';

const Option = ({ text, onSelect, isSelected }) => {
    return (
        <div 
            className={`option ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}> 
            This is the right answer
            {text}
        </div>
    );
}

export default Option;