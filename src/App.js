import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const logOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-post">Create Post</Link>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logOutUser}>Logout</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
