import "./Atendimento.css";

function Atendimento(){
  let dados = localStorage.getItem("dados-fila");
  if (dados == null || dados == undefined) {
    dados = { grave: [], medio: [], normal: [], historico: [] };
  } else {
    try {
      dados = JSON.parse(dados);
      if (!dados.historico) dados.historico = [];
    } catch (e) {
      dados = { grave: [], medio: [], normal: [], historico: [] };
    }
  }

  const todosPacientes = [...dados.grave, ...dados.medio, ...dados.normal];
  const proximoPaciente = todosPacientes.length > 0 ? todosPacientes[0] : null;

  function chamarProximo() {
    if (dados.grave.length > 0) {
      dados.historico.push(dados.grave.shift());
    } else if (dados.medio.length > 0) {
      dados.historico.push(dados.medio.shift());
    } else if (dados.normal.length > 0) {
      dados.historico.push(dados.normal.shift());
    }

    localStorage.setItem("dados-fila", JSON.stringify(dados));
    window.location.reload();
  }

  return (
    <div className="atedimento-content">
      <section>
        <h2>{proximoPaciente ? proximoPaciente.nome : "Nenhum paciente"}</h2>
        <button onClick={chamarProximo}>Chamar Próximo</button>
      </section>

      <section>
        <h3>Histórico</h3>
        <ul>
          {dados.historico.map((value, index) => (
            <li key={`historico-${index}`}>{value.nome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Atendimento;