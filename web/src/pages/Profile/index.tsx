import React, { useState, ChangeEvent, FormEvent } from "react";

import "./style.css";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: 0,
    category: 0,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmitLogin(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="page-profile">
      <div className="form">
        <h1>Modas&Ju</h1>
        <h3>Cadastre um novo produto</h3>
        <form action="">
          <label htmlFor="name">Nome do produto</label>
          <input onChange={handleInputChange} type="text" />
          <label htmlFor="preco">Preço</label>
          <input onChange={handleInputChange} type="text" />
          <label htmlFor="estoque">Quantidade em estoque</label>
          <input onChange={handleInputChange} type="number" />
          <label htmlFor="categoria">Categoria</label> <br />
          <select name="cats" id="cats">
            <option value="">Selecione uma categoria</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
