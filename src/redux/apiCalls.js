import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "./registerRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, navigate, setError, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    if (res.status === 200) {
      navigate("/contact");
    }
  } catch (error) {
    dispatch(loginFailure());
    setError("WRONG USERNAME OR PASSWORD");
  }
};

export const register = async (dispatch, navigate, setError, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    if (res.status === 201) {
      navigate("/login");
    }
  } catch (error) {
    dispatch(registerFailure());
    setError("WRONG REGISTRTION PROCESS");
  }
};
