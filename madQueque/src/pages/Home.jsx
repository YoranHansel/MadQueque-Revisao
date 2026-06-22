import { useState } from "react";
import "./Home.css";

function Home(){
    const [fila, setFila] = useState({
        grave: [],
        medio: [],
        normal: []
    });
    
    let dados = localStorage.getItem("dados-fila");
    if (dados == null || dados == undefined) {
      dados = fila;
    } else {
      try {
        dados = JSON.parse(dados);
      } catch (e) {
        dados = fila;
      }
    }

    return <>
    <h1>Lista de pacientes</h1>

    <div className="list-container">
      <section>
        <h3>Fila de baixa prioridade</h3>
        <ul id="list-normal">
          {dados.normal.map((item, index) => (
            <li key={`normal-${index}`}>{item.nome}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Fila de prioridade média</h3>
        <ul id="list-media">
          {dados.medio.map((item, index) => (
            <li key={`medio-${index}`}>{item.nome}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Fila de prioridade alta</h3>
        <ul id="list-grave">
          {dados.grave.map((item, index) => (
            <li key={`grave-${index}`}>{item.nome}</li>
          ))}
        </ul>
      </section>
    </div>
  </>
}

export default Home;