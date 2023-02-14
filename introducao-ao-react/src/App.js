import logo from './logo.svg';
import './App.css';

function App() {

  const nome = "Barbosa"
  function olaMundo(nome){
    alert(`Olá Mundo e ${nome}`)
  }
  console.log(nome);

  return (
    <div className="App">
      <h1>Oi</h1>
      <button onClick={()=>olaMundo(nome)} className='meu-nome'>Clique em min, {nome}</button>
    </div>
  );
}


export default App;
