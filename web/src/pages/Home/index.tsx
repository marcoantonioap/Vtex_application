import React from 'react';
import { FiImage } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css'; 

export default function Home(){
    return(
        <div className="page-home">
            <header>
                <div className="links">
                    <Link to="/login">Log-in</Link>
                    <Link to="/register"id="inscreva">Inscreva-se</Link>
                </div>              
            </header>
            <h3 id="title">Produtos</h3>
            <div className="container_prods">
                <form id="formlog" action="">
                    <div className="prod">
                        <div className="tumb">
                            <FiImage size={35} color="#FFF"/>
                        </div>
                        <div className="describe">
                            <h1>Nome do produto</h1>
                            <p>R$ 34,99</p>
                        </div>

                        <button id="comprar" type="submit">Comprar</button>
                    </div>
                </form>
                <form id="formlog" action="">
                    <div className="prod">
                        <div className="tumb">
                            <FiImage size={35} color="#FFF"/>
                        </div>
                        <div className="describe">
                            <h1>Nome do produto</h1>
                            <p>R$ 34,99</p>
                        </div>

                        <button id="comprar" type="submit">Comprar</button>
                    </div>
                </form>
                <form id="formlog" action="">
                    <div className="prod">
                        <div className="tumb">
                            <FiImage size={35} color="#FFF"/>
                        </div>
                        <div className="describe">
                            <h1>Nome do produto</h1>
                            <p>R$ 34,99</p>
                        </div>

                        <button id="comprar" type="submit">Comprar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}