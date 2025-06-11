import { removeToken, storeToken } from "../../../src/utils/tokenService";
import { logout as apiLogout, login } from "../../api/authAPI";
import { logout, setCredentials, setError, setLoading } from "./authSlice";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    const response = await login(credentials);

    if (response.token) {
      await storeToken(response.token);
      dispatch(
        setCredentials({
          user: response.user,
          token: response.token,
        })
      );
    } else {
      throw new Error("No token received");
    }

    return response;
  } catch (error) {
    dispatch(setError(error.message || "Login failed"));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await apiLogout();
    await removeToken();
    dispatch(logout());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const token = await getToken();
    if (token) {
     
      dispatch(
        setCredentials({
          token,
          user: null, 
        })
      );
    }
  } catch (error) {
    console.error("Auth check error:", error);
    await removeToken();
  }
};
