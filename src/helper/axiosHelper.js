import axios from "axios";

const rootUrlEP = "http://localhost:8000/api/v1";

// Function to call the JWT Token
const accessJWT = () => {
  return localStorage.getItem("accessToken");
};
const apiProcessor = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
    };
  }
};

// Post New USER
export const PostNewuser = (data) => {
  const obj = {
    method: "post",
    url: rootUrlEP + "/users",
    data,
  };
  return apiProcessor(obj);
};

// Login User

export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootUrlEP + "/users/login",
    data,
  };
  return apiProcessor(obj);
};

// Get User

export const getUser = () => {
  // calling database to get the users
  const obj = {
    method: "get",
    url: rootUrlEP + "/users/",
    headers: {
      Authorization: accessJWT(), // passing the accesstoken
    },
  };
  return apiProcessor(obj);
};

//Transactions
// Post Transactions

export const postTransaction = (data) => {
  const obj = {
    data,
    method: "post",
    url: rootUrlEP + "/transactions",
    headers: {
      Authorization: accessJWT(),
    },
  };
  return apiProcessor(obj);
};

// Get Transactions

export const fetchTransactions = () => {
  const obj = {
    method: "get",
    url: rootUrlEP + "/transactions",
    headers: {
      Authorization: accessJWT(),
    },
  };
  return apiProcessor(obj);
};
