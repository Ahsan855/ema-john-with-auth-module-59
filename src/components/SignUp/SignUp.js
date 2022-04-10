import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("your two password did not macth");
      return;
    }
    if (password.length < 6) {
      setError("password Must be 6 caracters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onBlur={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="SignUp" required/>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="line">
          <div className="throw">
            <hr />
          </div>
          <div className="or">or</div>
          <div className="throw">
            <hr />
          </div>
        </div>
        <div>
          <button className="form-submit-continue">
            <span></span> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
