import './LogIn.css';
import Logo from '../../assets/img/logo.png'

function UserLogIn() {
  return (
    <div className='main-container'>
        <div className="card col col-6 mx-auto section-blur shadow rounded-4 border-0">
            <div className="card-body">
                <div className='login-container'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-center'>
                        <img src={Logo} className='main-logo'/>
                        </div>
                        <div className='col-12'>
                            <div className="mb-3">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="input-uid">NIC Number</label>
                                        <input type="text" className="form-control" id="input-uid" placeholder="Enter your 12 digit NIC number"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="input-password">Password</label>
                                        <input type="password" className="form-control" id="input-password" placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="consent-check"/>
                                        <label className="form-check-label" htmlFor="consent-check">I agree</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Log In</button>
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
