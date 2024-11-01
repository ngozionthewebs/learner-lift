import '../styles/Leader-board.css'
import wing1 from '../assets/wing1.svg'
import wing2 from '../assets/wing2.svg'
import ProgressLine from '../components/ProgressLine'

const Leaderboard = () =>{
    return(
        <div className="container-fluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <img src={wing1} alt="Wing 1" className="wing-img" />
                            
                            <div className="header-text">
                                <h1>Scoreboard</h1>
                                <p>Let's see where you ranked!</p>
                            </div>
                            
                            <img src={wing2} alt="Wing 2" className="wing-img" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="leader-board">

                            <div className="user1">
                                <div className="ranking-no">1</div>
                                <div className="username">USERNAME</div>
                                    <ProgressLine/>

                                <div className="score">28/30</div>
                            </div>


                            <div className="user2">
                                <div className="ranking-no">2</div>
                                <div className="username">USERNAME</div>
                                <ProgressLine/>
                                <div className="score">22/30</div>
                            </div>


                            <div className="user3">
                                <div className="ranking-no">3</div>
                                <div className="username">USERNAME</div>
                                <ProgressLine/>
                                <div className="score">20/30</div>
                            </div>


                            <div className="user4">
                                <div className="ranking-no">4</div>
                                <div className="username">USERNAME</div>
                                <ProgressLine/>
                                <div className="score">17/30</div>
                            </div>



                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Leaderboard; 