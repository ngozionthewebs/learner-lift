import React, { useState } from 'react';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);

  const handleOptionChange = (index, newText) => {
    const newOptions = [...options];
    newOptions[index].text = newText;
    setOptions(newOptions);
  };

  const handleCorrectChange = (index) => {
    const newOptions = options.map((option, i) => ({
      ...option,
      isCorrect: i === index,
    }));
    setOptions(newOptions);
  };

  return (
    <form>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div>
        <label>Question Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <h3>Answer Options</h3>
      {options.map((option, index) => (
        <div key={index}>
          <label>{index + 1}.</label>
          <input
            type="text"
            value={option.text}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <label>
            <input
              type="radio"
              name="correctOption"
              checked={option.isCorrect}
              onChange={() => handleCorrectChange(index)}
            />
            Correct
          </label>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
