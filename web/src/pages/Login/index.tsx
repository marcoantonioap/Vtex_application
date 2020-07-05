import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as api from "../../services/api";
import "./style.css";
import { Credentials, Store } from "../../models";
import { AuthState, onLogin, Logout, AuthActions } from "../../redux/AuthStore";
import { ThunkDispatch } from "redux-thunk";

const mapStateToProps = (state: AuthState) => {
  return {
    state,
  };
};
const mapDispatchToProps = (
  dispatch: ThunkDispatch<AuthState, {}, AuthActions>
) => ({
  login: (store: Store, token: string) => dispatch(onLogin(store, token)),
  logout: () => dispatch(Logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {}

function Login(props: Props) {
  const history = useHistory();
  const { login, state } = props;
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function performLogin(credentials: Credentials) {
    const { store, token } = await api.login(credentials);
    if (store) {
      login(store, token);
      history.push("/home");
    }
  }

  function handleSubmitLogin(event: FormEvent) {
    event.preventDefault();
    const { email, senha } = formData;
    const data = {
      login: email,
      password: senha,
    };
    performLogin(data);
  }

  return (
    <div className="page-login">
      <div className="container">
        <div className="log-in">
          <form onSubmit={handleSubmitLogin}>
            <h1>Login</h1>
            <input
              type="text"
              name="email"
              placeholder="Insira login"
              onChange={handleInputChange}
            />{" "}
            <br />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleInputChange}
            />{" "}
            <br />
            <button type="submit">Entrar</button>
          </form>
        </div>
        <h1>ou</h1>
        <div className="cadastro">
          <Link to="/register">Inscreva-se</Link>
        </div>
      </div>
    </div>
  );
}

export default connector(Login);
