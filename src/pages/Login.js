import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true); //create an identifier in localStorage to see when a user is loged
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <p>Sing in with Google to continue</p>
      <button className="login-with-google-btn" onClick={singInWithGoogle}>
        Sing in with Google
      </button>
    </div>
  );
};

export default Login;
