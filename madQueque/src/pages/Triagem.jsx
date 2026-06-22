import "./Triagem.css";

function Triagem(){
  function salvaPaciente(e){
    e.preventDefault();
    let dados = localStorage.getItem('dados-fila');
    if (dados == null || dados == undefined) {
      dados = {grave: [], medio: [], normal: []};
    } else {
      try {
        dados = JSON.parse(dados);
      } catch (err) {
        dados = {grave: [], medio: [], normal: []};
      }
    }

    let nome = document.getElementById("input-nome").value;
    let idade = document.getElementById("input-idade").value;
    let gravidade = document.getElementById("input-prioridade").value;

    if (!dados[gravidade]) dados[gravidade] = [];
    dados[gravidade].push({nome, idade});
    localStorage.setItem('dados-fila', JSON.stringify(dados));
  }

  return <>
    <form id="form-paciente">
      <div>
        <label htmlFor="input-nome">Nome</label>
        <input type="text" id="input-nome" />
      </div>

      <div>
        <label htmlFor="input-idade">Idade</label>
        <input type="text" id="input-idade" />
      </div>

      <div>
        <label htmlFor="input-prioridade">Prioridade</label>
        <select id="input-prioridade">
          <option value="normal">Baixa</option>
          <option value="medio">Médio</option>
          <option value="grave">Alto</option>
        </select>
      </div>

      <div><button type="button" onClick={salvaPaciente}>Salvar</button></div>
    </form>
  </>
}

export default Triagem