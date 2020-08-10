import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/57272977?s=460&u=1419b49a6c611441b5efc5cd0074227c9e50ba39&v=4" alt="Dudu" />
                <div>
                    <strong>Eduardo de Oliveira Almeida</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Projeto da Imersão React, organizada pelo Alura, sendo esse repositório um
      <br />
      "clone" do projeto proposto, ou seja, sem incrementos no visual.
    </p>

            <footer>
                <p>
                    Preço/Hora
        <strong>R$80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="ícone whatsapp" />
        Entrar em contato
      </button>
            </footer>
        </article>
    );
}

export default TeacherItem;