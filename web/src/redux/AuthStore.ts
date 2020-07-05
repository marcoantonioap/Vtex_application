import { Dispatch } from "redux";
import { Store } from "../models";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    store: Store;
    token: string;
  };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActions = LoginAction | LogoutAction;

// REDUCER

export interface AuthState {
  store: Store | null;
  isLoggedIn: boolean;
  token: string;
}

const initialState: AuthState = {
  store: null,
  isLoggedIn: false,
  token: "",
};

export const AuthReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        store: action.payload.store,
        token: action.payload.token,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

// ACTION CREATOR

export const onLogin = (store: Store, token: string) => (
  dispatch: Dispatch<AuthActions>
) => {
  dispatch({ type: LOGIN, payload: { store, token } });
};

export const Logout = () => (dispatch: Dispatch<AuthActions>) => {
  dispatch({ type: LOGOUT });
};
