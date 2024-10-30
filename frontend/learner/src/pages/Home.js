import '../styles/Home.css'
import wing1 from '../assets/wing1.svg'
import wing2 from '../assets/wing2.svg'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="header">
                        <img src={wing1} alt="Wing 1" className="wing-img" />
                        
                        <div className="header-text">
                            <h1>Welcome!</h1>
                            <p>Welcome to After Robot! Made By South Africans for South Africans. If you're gearing up to get your learner's licence and want to make it fun and challenging, you're in the right place. Let’s dive in and let the games begin!</p>
                        </div>
                        
                        <img src={wing2} alt="Wing 2" className="wing-img" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="road-rules">

                    </div>
                </div>

                <div className="col-4">
                    <div className="road-signs">

                    </div>
                </div>

                <div className="col-4">
                    <div className="vehicle-controls">
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Home;
