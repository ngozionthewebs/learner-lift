import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/Cards.css';

const RoadSigns = () =>{
    return(
        <div className="road-signs">
            <div className="image2"></div>
            <div className="title-container2">
                <h3>Road Signs</h3>
                <h5>(30 questions)</h5>
            </div>
            <p>Ready to test your knowledge of the road signs?
                Dive into our interactive quiz! It’s <br />
                packed with all the questions you might face <br />
                in the official exam.
            </p>
            <Link to="/quiz/9">
                <div className="button2">TAKE THE TEST</div>
            </Link>

        </div>
    );
}

export default RoadSigns; 