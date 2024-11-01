import '../styles/Cards.css';
import { Link } from 'react-router-dom';

const RoadRules = () => {
    return (
        <div className="road-rules">
            <div className="image1"></div>
            <div className="title-container">
                <h3>Road Rules</h3>
                <h5>(30 questions)</h5>
            </div>
            <p>Ready to test your knowledge of the rules of <br />
                the road? Dive into our interactive quiz! It’s <br />
                packed with all the questions you might face <br />
                in the official exam.
            </p>
            <Link to="/quiz/8">
                <button>Take The Test</button>
            </Link>
        </div>
    );
}

export default RoadRules;
