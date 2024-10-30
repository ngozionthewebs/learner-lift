import '../styles/Login.css'

const Login = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                {/* Form Column */}
                <div className="col-6 d-flex flex-column justify-content-center align-items-start p-5 form">
                    <h2 >WELCOME <br/> BACK! :)</h2>
                    
                    <label className="mt-4" htmlFor="username">What should we call you? (username)</label>
                    <input type="text" id="username" className="form-control mb-3" placeholder="Enter your username" />

                    <label htmlFor="password">Secure your account</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Enter your password" />

                    <p className="mt-3" style={{ fontSize: '0.9rem' }}>
                        I Don’t have an account? <a href="/sign-up" style={{ textDecoration: 'underline', color: '#467966' }}>Sign Up</a>
                    </p>

                    <button className="button-3">
                        LOGIN
                    </button>
                </div>

                {/* Image Column */}
                <div className="col-6">
                    <div className="image-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Login; 