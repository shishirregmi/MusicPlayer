import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export default AppContext;

export const AuthProvider = ({ children }) => {
  let [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );
    let [allMusic, setAllMusic] = useState([]);
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://localhost:7254/api/User/LoginUserFromApp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          pass: e.target.password.value,
          role_id: "2",
        }),
      }
    );
    let data = await response.json();

    if (data.status === "0") {
      setAuthToken(data.message);
      setUser(jwt_decode(data.message));
      localStorage.setItem("authToken", JSON.stringify(data.message));
      navigate(-1);
    } else {
      alert(data.message);
    }
  };

  let logoutUser = async () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  let populateSongs = async () => {
    const requestBody = {
      artist: "3",
    };
    let response = await fetch(
      "https://localhost:7254/api/Music/GetAll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify(requestBody),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setAllMusic(data);
    }
  };

  let contextData = {
    user: user,
    allMusic: allMusic,
    authToken: authToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
    populateSongs: populateSongs
  };

  return (
    <AppContext.Provider value={contextData}>
      {children}
    </AppContext.Provider>
  );
};
