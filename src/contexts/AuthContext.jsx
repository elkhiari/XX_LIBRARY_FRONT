import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [darkMode, setDarkMode] = useState(window.localStorage.getItem("darkMode"));
  const navigate = useNavigate();
  
  const toggleDarkMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      window.localStorage.setItem("darkMode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode("dark");
      window.localStorage.setItem("darkMode", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+"/users/login", {
        email: email,
        password: password,
      });
      const data = response.data;
      if (data.message) {
        setUser(data.user);
        setToken(data.token);
        window.localStorage.setItem("token", data.token);
        navigate("/");
        setError(
          `Welcome back, ${data.user.name}! We're thrilled to see you again. Get ready to pick up where you left off and make the most of your time here. Happy exploring!`
        );
        setLoginError(null);
      }
    } catch (error) {
      setLoginError(error.response.data.message+". Please try again.");
      console.log(error);
    }
    setLoading(false);
  };

  const register = async (email, password, name , gender, avatar) => {
    setLoading(true);
    try {
        const response = await axios.post(process.env.REACT_APP_API_URL+"/users/register", {
          email,
          password,
          name,
          gender,
          avatar
        });
        if (response.data && response.data.message) {
          setUser(response.data.user);
          setToken(response.data.token);
          window.localStorage.setItem("token", response.data.token);
          navigate("/");
          setError(
            `Dear ${response.data.user.name}, Congratulations! You have successfully registered`
          );
        } else {
          setRegisterError("Unexpected response from the server");
        }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setRegisterError(error.response.data.message + ". Please try again.");
      } else {
        setRegisterError("An error occurred. Please try again.");
      }
      console.log(error);
    }
    setLoading(false);
  }


  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/login");
    setError(null);
    setLoginError(null);
    setRegisterError(null);
    window.localStorage.removeItem("token");
  };

  const CheckToken = async () => {
    setLoading(true);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL+"/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      setUser(data.user);
    } catch (error) {
      logout()
      setError("An error occurred. please try login again")
    }
    setLoading(false);
  };

  



  useEffect(() => {
    if (token) {
      CheckToken();
    }
  }, [token]);


  const value = { user,darkMode, login, logout, token, loading, error,toggleDarkMode,register,setRegisterError,registerError ,setError,setLoginError,loginError,setTypeError,typeError,setLoading};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
