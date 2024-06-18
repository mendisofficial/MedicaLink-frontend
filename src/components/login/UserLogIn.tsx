import './LogIn.css';
import Logo from '../../assets/img/logo.png'

function UserLogIn() {
    

    return (
        <div className='main-container'>
            <div className="col mx-auto d-flex justify-content-center">
                <div className="login-container card shadow rounded-4 border-0">
                    <div className='login-container'>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <img src={Logo} className='main-logo' />
                            </div>
                            <div className='col-12'>
                                <div className="mt-5 mb-3">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="input-uid" className="mb-1">NIC Number</label>
                                            <input type="text" className="form-control mb-3" id="input-uid" placeholder="Enter your 12 digit NIC number" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="input-password">Password</label>
                                            <input type="password" className="form-control mt-1 mb-4" id="input-password" placeholder="Password" />
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="consent-check" />
                                            <label className="form-check-label" htmlFor="consent-check">I agree</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4 btn-login">Log In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogIn;
