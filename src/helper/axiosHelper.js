import axios from "axios";

const rootUrlEP = "http://localhost:8000/api/v1";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
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
  const obj = {
    method: "get",
    url: rootUrlEP + "/users/",
  };
};
