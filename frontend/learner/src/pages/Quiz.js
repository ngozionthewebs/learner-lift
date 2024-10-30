import '../styles/Quiz.css';
import Question from '../components/Question';
import wing3 from '../assets/wing3.svg';
import wing4 from '../assets/wing4.svg';
import Option from '../components/Option';

const Quiz = () =>{
    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="quiz-container">
                            <img src={wing3} alt="Wing Left" className="wing-img-left" />
                            <div className="question-container">
                                <Question />
                            </div>
                            <img src={wing4} alt="Wing Right" className="wing-img-right" />
                    </div>
        
                </div>
            </div>

            <div className="row">
                <div className="col-6"> 
                    <div className="option-1"> A. <Option/> </div>
                </div>

                <div className="col-6">
                    <div className="option-2"> B. <Option/></div>
                </div>
            </div>

            <div className="row">
                <div className="col-6"> 
                    <div className="option-3">C. <Option/></div>
                </div>

                <div className="col-6">
                    <div className="option-4">D. <Option/></div>
                </div>
            </div>
        </div>
        
    );
}

export default Quiz; 