import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Leader-board.css';
import wing1 from '../assets/wing1.svg';
import wing2 from '../assets/wing2.svg';
import ProgressLine from '../components/ProgressLine';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [quizData, setQuizData] = useState(null);
    const location = useLocation();
    
    // Extract the quizId from the query parameters
    const query = new URLSearchParams(location.search);
    const quizId = query.get('quizId');

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/leaderboard/${quizId}`);
                setLeaderboardData(response.data.leaderboard);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/quiz/${quizId}`);
                setQuizData(response.data.quiz);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        if (quizId) {
            fetchLeaderboardData();
            fetchQuizData();
        }
    }, [quizId]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="header">
                        <img src={wing1} alt="Wing 1" className="wing-img" />
                        <div className="header-text">
                            <h1>Scoreboard</h1>
                            <p>{quizData ? `Results for "${quizData.title}"` : "Loading quiz details..."}</p>
                        </div>
                        <img src={wing2} alt="Wing 2" className="wing-img" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="leader-board">
                        {leaderboardData.length > 0 ? (
                            leaderboardData.map((entry, index) => (
                                <div className={`user${index + 1}`} key={entry.user_id}>
                                    <div className="ranking-no">{index + 1}</div>
                                    <div className="username">{entry.username || 'Username'}</div>
                                    <ProgressLine score={entry.score} total={quizData ? quizData.questions.length : 30} />
                                    <div className="score">{entry.score}/{quizData ? quizData.questions.length : 30}</div>
                                </div>
                            ))
                        ) : (
                            <p>No data available yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
