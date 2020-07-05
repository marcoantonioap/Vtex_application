import React from 'react';

import './style.css'

export default function Register(){
    return(
        <div className="page-register">
            <div className="form">
                <h1>Cadastre seu comercio</h1>
                <h3>Preencha todos os campos</h3>
                <form action="">
                    <label htmlFor="name">Nome da loja</label>
                    <input type="text" />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" />

                    <label htmlFor="estoque">CNPJ</label>
                    <input type="text" />

                    <div className="group_input">
                        <div className="uf">
                            <label htmlFor="uf">UF</label> <br/>
                            <select name="uf" id="uf">
                                <option value="">Selecione um UF</option>
                            </select>
                        </div>
                        <div className="city">
                            <label htmlFor="cidade">Cidade</label> <br/>
                            <select name="cidade" id="cidade">
                                <option value="">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="cat">Categorias da sua loja</label>
                    <input type="text" placeholder="ex: frutas, carnes, roupa infantil..."/>

                    <button type="submit">Concluir</button>
                </form>
            </div>
        </div>
    )
}