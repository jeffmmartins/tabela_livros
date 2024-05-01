import "./App.css";
import React, { useEffect, useState } from "react";
import TabelaBody from "./Componentes/TabelaBody";
import TabelaFoot from "./Componentes/TabelaFoot";
import TabelaHead from "./Componentes/TabelaHead";
import { api } from "./service/api";

function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get();
        console.log(response.data);
        setLivros(response.data);
      } catch (error) {
        console.log("erro na Resquisição");
      } finally {
        console.log("sempre retorna");
      }
    }
    loadData();
  }, []);

  const handleRemoverLinha = (id) => {
    const novosLivros = livros.filter((l) => l.id !== id);
    setLivros(novosLivros);
  };

  const handleOrdenarCrescente = () => {
    const novosLivros = [...livros].sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    setLivros(novosLivros);
  };

  const handleOrdenarDecrescente = () => {
    const novosLivros = [...livros].sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    novosLivros.reverse();
    setLivros(novosLivros);
  };

  return (
    <div className="conteudo">
      <div>
        <TabelaHead
          ordenarCrescente={handleOrdenarCrescente}
          ordenarDecrescente={handleOrdenarDecrescente}
        />
        <TabelaBody livros={livros} removerLinha={handleRemoverLinha} />
        <TabelaFoot qdeLivros={livros.length} />
      </div>
    </div>
  );
}

export default App;
