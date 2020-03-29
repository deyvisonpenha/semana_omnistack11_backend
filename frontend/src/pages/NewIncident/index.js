import React from 'react';
import {Link} from "react-router-dom";

import { FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
    return (
         <div className="new-incident-container">
            <div className="content">
                <session>
                    <img src={logoImg} alt="Be the hero" />

                     <h1> Cadastrar novo caso</h1>
                     <p>Descreva detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </session>

                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}