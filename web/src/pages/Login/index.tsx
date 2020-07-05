import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Login(){
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    }

    function handleSubmitLogin(event: FormEvent) {
        event.preventDefault();
        const { email, senha } = formData;

        const data = {
            email,
            senha
        };

        //vai q vai gabicodigos
    }

    return(
        <div className="page-login">
            <div className="container">
                <div className="log-in">
                    <form onSubmit={handleSubmitLogin}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Insira seu e-mail"
                            onChange={handleInputChange}
                            /> <br/>
                        <input type="password" name="senha" placeholder="Senha"/> <br/>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
                <h1>ou</h1>
                <div className="cadastro">
                    <Link to="/register">Inscreva-se</Link>
                </div>
            </div>
        </div>
    )
}