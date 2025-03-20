import { getUser } from "../helper/axiosHelper";

export const autoLogin = async () => {
  const accessJWT = localStorage.getItem("accessToken"); // getting token from the local storage
  if (accessJWT) {
    // Call api to get the users
    const { status, user } = await getUser(); // destructure status and user and excute getuser function

    return status === "success" ? user : {}; // conditional rendering

    // mount the user in the state
  }
};
