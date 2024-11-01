// components/Option.js
import React from 'react';
import '../styles/Quiz.css';

const Option = ({ option, onSelect, isSelected }) => {
    return (
        <div 
            className={`option ${isSelected ? 'selected' : ''}`} // Apply a class when selected
            onClick={onSelect}
        >
            {option.option_text} {/* Ensure this matches the property name in your option object */}
        </div>
    );
};

export default Option;
