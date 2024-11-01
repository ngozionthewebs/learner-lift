import React from 'react';
import '../styles/Quiz.css';

const Question = ({ question, timer }) => {
    return (
        <div className="container-fluid">
            {question ? (
                <>
                    <div className="row">
                        <div className="col-12">
                            <div className="timer-container">
                                <div className="timer">{timer}</div> {/* Display dynamic timer */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="question">
                                <h1>{question.question_text || question.text}</h1> {/* Access correct property */}
                            </div>
                        </div>
                    </div>

                    {/* Conditionally render image if provided */}
                    {question.image_path || question.imagePath ? (
                        <div className="row">
                            <div className="col-12">
                                <div className="question-image-container">
                                    <img 
                                        src={`http://localhost:5001/${question.image_path || question.imagePath}`} 
                                        alt="Question Visual" 
                                        className="question-image"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </>
            ) : (
                <p>Loading question...</p>
            )}
        </div>
    );
};

export default Question;
