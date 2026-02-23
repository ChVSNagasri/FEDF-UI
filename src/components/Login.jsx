import { useRef, useState, useEffect } from "react";
import OIP from "./OIP.jpg";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const unameRef = useRef(null);
  const pwdRef = useRef(null);

  const [themeColor, setThemeColor] = useState("#a3edf4");
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/nav");
    }
  }, [navigate]);

  const handleLogin = () => {
    const uname = unameRef.current.value;
    const pwd = pwdRef.current.value;

    if (uname === "2500030484" && pwd === "nagasri@08") {
      sessionStorage.setItem("user", uname);

      alert("Successfully logged in");
      navigate("/nav");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="left-panel" style={{ backgroundColor: themeColor }}>
        <div className="image">
          <img src={OIP} alt="Image here" width={100} height={100} />
        </div>

        <div
          className="color-btn"
          style={{ backgroundColor: "#e4abf3" }}
          onClick={() => setThemeColor("#e4abf3")}
        />
        <div
          className="color-btn"
          style={{ backgroundColor: "#daf47b" }}
          onClick={() => setThemeColor("#daf47b")}
        />
        <div
          className="color-btn"
          style={{ backgroundColor: "#a4c7fc" }}
          onClick={() => setThemeColor("#a4c7fc")}
        />
      </div>

      <div className="right-panel">
        <input type="text" placeholder="Enter username *" ref={unameRef} />
        <input type="password" placeholder="Enter password *" ref={pwdRef} />
        <button
          style={{ backgroundColor: themeColor }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}