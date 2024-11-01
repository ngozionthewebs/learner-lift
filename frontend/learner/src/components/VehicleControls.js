import '../styles/Cards.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const VehicleControls = () =>{
    return(
        <div className="vehicle-controls">
            <div className="image3"></div>
            <div className="title-container3">
                <h3>Road Rules</h3>
                <h5>(08 questions)</h5>
            </div>
            <p>Ready to test your knowledge of the Vehicle <br /> 
                Controls? Dive into our interactive quiz! It’s <br />
                packed with all the questions you might face <br />
                in the official exam.
            </p>
            <Link to="/quiz/10">
                <button>Take The Test</button>
            </Link>

        </div>
    );
}

export default VehicleControls; 