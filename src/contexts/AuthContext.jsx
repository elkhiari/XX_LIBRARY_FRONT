import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(window.localStorage.getItem("darkMode"));

  // Toggle Dark Mode Function and save it to local storage , and when refresh the page get the value from local storage and set it to dark mode state id and change it in html class
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



  


  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("YOUR_API_URL", {
        identifier: email,
        password: password,
      });
      const data = response.data;
      if (data.message) {
        setError(data.message[0].messages[0].message);
      } else {
        setUser(data.user);
        setToken(data.jwt);
        navigate("/");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error);
    }
    setLoading(false);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/login");
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
    }
    setLoading(false);
  };

  



  useEffect(() => {
    if (token) {
      CheckToken();
    }
  }, [token]);


  const value = { user,darkMode, login, logout, token, loading, error,toggleDarkMode };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
