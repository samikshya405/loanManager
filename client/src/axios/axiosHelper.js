import axios from "axios";
import { useSelector } from "react-redux";
const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";
const customerEp = rootAPI + "/customers";

export const postNewUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEP, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const userLogin = async (loginInfo) => {
  try {
    const { data } = await axios.post(userEP + "/login", loginInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserInfo = async () => {
  try {
    const headers = {
      Authorization: getAccessJWT(),
    };
    const data = await axios.get(userEP, {
      headers: {
        Authorization: getAccessJWT(),
      },
    });
    return data.data.user;
  } catch (error) {
    console.log(error);
  }
};

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

export const postNewCustomer = async (userId, customerInfo) => {
  try {
    const response = await axios.post(customerEp, customerInfo, {
      headers: {
        Authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const logout = () => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};
