import React from 'react';

import './style.css';

export default function Profile(){
    return(
        <div className="page-profile">
            <div className="form">
                <h1>Modas&Ju</h1>
                <h3>Cadastre um novo produto</h3>
                <form action="">
                    <label htmlFor="name">Nome do produto</label>
                    <input type="text" />

                    <label htmlFor="preco">Preço</label>
                    <input type="text" />

                    <label htmlFor="estoque">Quantidade em estoque</label>
                    <input type="number" />

                    <label htmlFor="categoria">Categoria</label> <br/>
                    <select name="cats" id="cats">
                        <option value="">Selecione uma categoria</option>
                    </select>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}