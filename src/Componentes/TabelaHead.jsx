import React from "react";

const TabelaHead = (props) => {
  return (
    <thead>
      <tr>
        <th colSpan="4">Tabela de livros</th>
      </tr>
      <tr>
        <th>ISBN</th>
        <th>Titulo</th>
        <div className="container-setinhas">
          <div onClick={() => props.ordenarCrescente()}>&#129093;</div>
          <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
        </div>
        <th>Autor</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default TabelaHead;
