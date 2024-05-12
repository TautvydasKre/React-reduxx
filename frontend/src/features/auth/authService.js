/** @format */

import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));

    // Fetch and save user role to local storage
    const roleResponse = await axios.get(API_URL + "role", {
      headers: {
        Authorization: `Bearer ${response.data.token}`,
      },
    });

    if (roleResponse.data) {
      localStorage.setItem("userRole", JSON.stringify(roleResponse.data.role));
    }
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userRole");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
