import '../styles/Quiz.css'

const Question = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="timer-container">
                        <div className="timer">59</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="question">
                        <h1>Question HERE</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="question-image-container">
                        <div className="question-image">
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Question; 