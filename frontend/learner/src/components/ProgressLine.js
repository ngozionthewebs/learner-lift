import React from 'react';
import '../styles/Leader-board.css';

const ProgressLine = ({ score, total }) => {
    const percentage = (score / total) * 100;

    return (
        <div className="line">
            <div className="progress-line">
                <div className="inner-line" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressLine;
