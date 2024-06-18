import "./LogIn.css";
import Logo from "../../assets/img/logo.png";
import { useState, FormEvent, useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAlertSnack, AlertType } from "../AlertSnack";
import { UseUser } from "../auth/UserContext";
import isLoggedIn from "../auth/CheckUser";

function AdminLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = UseUser();
  //const { showAlert } = useAlertSnack();
  const navigate = useNavigate();

  useEffect(() => {
    let user = isLoggedIn();
    if (user) {
      setUser(user);

      navigate('/'); // Navigate to the dashboard
    }
  }, [navigate]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validate the fields

    try {
      let response = await axiosInstance.post("/api/Login", {
        userName: email,
        password
      });

      const token = response.data.token;
      if (token) {
        // Store the token and user data in cookies
        Cookies.set('jwtToken', token, { expires: 1 });
        Cookies.set('userId', response.data.userId);
        Cookies.set('userName', response.data.userName);
        Cookies.set('role', response.data.role);

        // Set the token in Axios defaults
        let user = isLoggedIn(); // get the user object
        setUser(user); // Set the user in the context

        //showAlert("Success", "Login successful", AlertType.success);
        navigate("/");
      }
      else {
        throw new Error("Token not found");
      }
    }
    catch (error) {
      console.log(error);
      //showAlert("Error", "Someting went wrong", AlertType.error);
    }
  };

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
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="input-uid" className="mb-1">
                      Administrator Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input-uid"
                      placeholder="Email"
                      value={email}
                      onChange={e => {setEmail(e.target.value)}}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="input-password">Password</label>
                    <input
                      type="password"
                      className="form-control mt-1 mb-4"
                      id="input-password"
                      placeholder="******"
                      value={password}
                      onChange={e => {setPassword(e.target.value)}}
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

export default AdminLogIn;
