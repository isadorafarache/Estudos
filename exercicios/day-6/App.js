import logo from './logo.svg'; 
import './App.css';
import Item from './Item';

function App() {
  function botao(){}
  return (

<div>
<Item titulo="Luzes Misteriosas" sub="Moradores registram luzes no céu" tipo="Brasil" botao={botao
}/>
<Item titulo="Governo taxa brusinhas da Shein" sub="Presidente sancionou a chamada a nova taxação passa a valer a partir de 1º de agosto" tipo="Brasil" botao={botao
}/>
<Item titulo="Acompanhe resultados ao vivo" sub=" Resultados de futebol, placares ao vivo, classificação de campeonatos, tabelas de torneios, estatísticas de jogos..." tipo="Futebol" botao={botao
}/>
</div>
  
  );
}

export default App;