import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lulinha from './Componets/Lulinha';
import Apresentacao from './Componets/Apresentacao';

ReactDOM.render(
  <div>
    <Lulinha />
    <Apresentacao titulo = "Nome: Lulinha Molusco" />
    <Apresentacao titulo = "Epecialidade: Tocador de clarinete" />
    <Apresentacao titulo = "Idade: Velho" />
    <Apresentacao titulo = "Coisa que mais gosta: Estudar clarinete" />
    <Apresentacao titulo = "Coisa que menos gosta: Bob Esponja" />
  </div>,
  document.getElementById('root')
);


 