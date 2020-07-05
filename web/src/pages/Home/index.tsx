import React, { useState, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./style.css";
import { Product } from "../../models";
import { RootState } from "../../redux/store";
import { ConnectedProps, connect } from "react-redux";
import * as api from "../../services/api";

const mapStateToProps = (state: RootState) => {
  return {
    store: state.AuthReducer.store,
    token: state.AuthReducer.token,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsFromRedux {}

function Home(props: Props) {
  const { store, token } = props;
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    if (store) {
      const url = `/products?store_id=${store.id_store}`;
      const response = await api.get(url, token);
      setProducts(response.data || []);
    }
  };

  useEffect(() => {
    loadProducts();
  });

  return (
    <div className="page-home">
      <header>
        <div className="links">
          <Link to="/profile" id="inscreva">
            Adicionar Produto
          </Link>
        </div>
      </header>
      <h3 id="title">Produtos</h3>
      <div className="container_prods">
        <form id="formlog" action="">
          <div className="prod">
            <div className="tumb">
              <FiImage size={35} color="#FFF" />
            </div>
            <div className="describe">
              <h1>Nome do produto</h1>
              <p>R$ 34,99</p>
            </div>

            <button id="comprar" type="submit">
              Comprar
            </button>
          </div>
        </form>
        <form id="formlog" action="">
          <div className="prod">
            <div className="tumb">
              <FiImage size={35} color="#FFF" />
            </div>
            <div className="describe">
              <h1>Nome do produto</h1>
              <p>R$ 34,99</p>
            </div>

            <button id="comprar" type="submit">
              Comprar
            </button>
          </div>
        </form>
        <form id="formlog" action="">
          <div className="prod">
            <div className="tumb">
              <FiImage size={35} color="#FFF" />
            </div>
            <div className="describe">
              <h1>Nome do produto</h1>
              <p>R$ 34,99</p>
            </div>

            <button id="comprar" type="submit">
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connector(Home);
