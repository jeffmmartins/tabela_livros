import React from "react";

const TabelaFoot = ({ qdeLivros }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan="5">Quatidade de Livros na Tabela: {qdeLivros}</td>
      </tr>
    </tfoot>
  );
};

export default TabelaFoot;
