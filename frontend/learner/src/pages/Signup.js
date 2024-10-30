import '../styles/Signup.css'

const Signup = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Form Column */}
                <div className="col-6 d-flex flex-column justify-content-center align-items-start p-5 form">
                    <h1 >Join the <br/> Community</h1>
                    
                    <label className="mt-4" htmlFor="username">What should we call you? (username)</label>
                    <input type="text" id="username" className="form-control mb-3" placeholder="Enter your username" />

                    <label htmlFor="email">Where should we send you news?</label>
                    <input type="email" id="email" className="form-control mb-3" placeholder="Enter your email" />

                    <label htmlFor="password">Secure your account</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Enter your password" />

                    <p className="mt-3" style={{ fontSize: '0.9rem' }}>
                        I already have an account! <a href="/login" style={{ textDecoration: 'underline', color: '#EB4C37' }}>Log In</a>
                    </p>

                    <button className='button-4'>
                        SIGN UP
                    </button>
                </div>

                {/* Image Column */}
                <div className="col-6">
                    <div className="image"></div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
