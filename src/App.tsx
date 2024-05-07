import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Advice{
  id: number;
  advice: string;
}

function App() {

  const [nome, setNome] = useState<String>();
  const [personagem, setPersonagem] = useState<Object>();

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/3/')
    .then(function (response) {
     console.log(response.data);
     setPersonagem(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])

  const defName = (nome: string) => {
    setNome(nome);
  }

  return (
    <div>
      <strong> Meu personagem é {personagem && personagem.name}, o verdadeiro herói de Star Wars</strong>

      {/* <button onClick={() => defName('Tomate')}>Tomate</button> */}
      {/*<button onClick={() => defName('Batata')}>Batata</button> */}
      {/*<button onClick={() => defName('Beterraba')}>Beterraba</button> */}
      <Link to={'/teste'}>novo teste</Link>
    </div>
  )
}

export default App
