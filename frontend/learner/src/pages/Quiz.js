import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Quiz.css';
import Question from '../components/Question';
import Option from '../components/Option';
import wing3 from '../assets/wing3.svg';
import wing4 from '../assets/wing4.svg';
import { UserContext } from '../context/UserContext'; // Ensure you have a UserContext for user data

const Quiz = () => {
    const { quizId } = useParams();
    const history = useHistory();
    const { user } = useContext(UserContext); // Get the current user from context
    const [quizData, setQuizData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0); // Keep track of the user's score
    const [timer, setTimer] = useState(59); // Set initial timer value

    const handleEndQuiz = useCallback(async () => {
        if (!user) {
            console.error('User is not logged in');
            return;
        }

        try {
            // Save the score to the backend with userId and quizId
            await axios.post('http://localhost:5001/api/quiz/complete', {
                userId: user.id, // Dynamically use the logged-in user's ID
                quizId: quizId,
                score: score,
            });

            // Navigate to the leaderboard page
            history.push(`/leader-board?quizId=${quizId}`);
        } catch (error) {
            console.error('Error saving quiz results:', error);
        }
    }, [user, quizId, score, history]);

    const handleNextQuestion = useCallback(() => {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); // Reset the selected option for the next question
        } else {
            handleEndQuiz(); // End the quiz if it was the last question
        }
    }, [currentQuestionIndex, quizData, handleEndQuiz]);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
                setQuizData(response.data.quiz);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };
        fetchQuizData();
    }, [quizId]);

    useEffect(() => {
        if (timer > 0) {
            const timerId = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearTimeout(timerId); // Cleanup timer on unmount
        } else {
            handleNextQuestion(); // Automatically move to next question when time runs out
        }
    }, [timer, handleNextQuestion]);

    useEffect(() => {
        setTimer(59); // Reset timer when the question changes
    }, [currentQuestionIndex]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option.is_correct) {
            setScore((prevScore) => prevScore + 1); // Increment score if the selected option is correct
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null); // Reset the selected option for the previous question
        }
    };

    return (
        <div className="container-fluid">
            {quizData ? (
                <>
                    <div className="row">
                        <div className="col-12">
                            <div className="quiz-container">
                                <img src={wing3} alt="Wing Left" className="wing-img-left" />
                                <div className="question-container">
                                    <Question 
                                        question={quizData.questions[currentQuestionIndex]} 
                                        timer={timer} // Pass the timer as a prop
                                    />
                                </div>
                                <img src={wing4} alt="Wing Right" className="wing-img-right" />
                            </div>
                        </div>
                    </div>

                    {/* Render options for the current question */}
                    <div className="row">
                        {quizData.questions[currentQuestionIndex]?.options?.map((option, index) => (
                            <div className="col-6" key={index}>
                                <Option 
                                    option={option} 
                                    onSelect={() => handleOptionSelect(option)}
                                    isSelected={selectedOption === option}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-between">
                            {currentQuestionIndex > 0 && (
                                <button onClick={handlePreviousQuestion} className="btn btn-secondary">
                                    Previous Question
                                </button>
                            )}
                            {currentQuestionIndex < quizData.questions.length - 1 ? (
                                <button onClick={handleNextQuestion} className="btn btn-primary">
                                    Next Question
                                </button>
                            ) : (
                                <button onClick={handleEndQuiz} className="btn btn-danger">
                                    End Quiz
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading quiz...</p>
            )}
        </div>
    );
};

export default Quiz;
