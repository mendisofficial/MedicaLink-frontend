import "./LogIn.css";
import Logo from "../../assets/img/logo.png";

function UserLogIn() {
  return (
    <div className="main-container">
      <div className="col mx-auto d-flex justify-content-center">
        <div className="login-container card shadow rounded-4 border-0">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={Logo} className="main-logo" />
            </div>
            <div className="col-12">
              <div className="mt-5 mb-3">
                <form>
                  <div className="form-group">
                    <label htmlFor="input-uid" className="mb-1">
                      Administrator Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input-uid"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="input-password">Password</label>
                    <input
                      type="password"
                      className="form-control mt-1 mb-4"
                      id="input-password"
                      placeholder="******"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consent-check"
                    />
                    <label
                      className="form-check-label small fst-italic"
                      htmlFor="consent-check"
                    >
                      By checking this box, you agree to our Terms of Service
                      and that we will store and process your personal data in
                      accordance with our Privacy Policy.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 btn-login"
                  >
                    Authorize
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogIn;
