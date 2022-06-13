import { useState } from 'react'
import { Cadastrar } from '../components/Cadastrar/Cadastrar';
import { Consultar } from '../components/Consultar/Consultar';


import './App.css'

export default function App() {
  const [choice, setChoice] = useState('selection__menu');
    
  const handleMenuNavigation = event => {
      setChoice(event.target.value)
  }
  {
    if(choice == 'selection__menu'){
      return (
        <div className="container">
          <section className="selection__menu">
            <h1>Escolha uma opção</h1>
            <button className="selection__btn" value="cadastrar" onClick={handleMenuNavigation}>Cadastrar Vacina</button>
            <button className="selection__btn" value="listar" onClick={handleMenuNavigation}>Listar Aplicações</button>
            <button className="selection__btn" value="consultar" onClick={handleMenuNavigation}>Consultar por CPF</button>
          </section>
        </div>
      )
    }
    if(choice == 'cadastrar'){
      return(
        <div className="container">
          <Cadastrar/>
          <button className="return__menu-btn" type="button" value='selection__menu' onClick={handleMenuNavigation}>Retornar ao Menu</button>
        </div>
      )
    }
    if(choice == 'listar'){
      return(
        <div className="container">
          Nada aqui por enquanto ;-;
          <button className="return__menu-btn" type="button" value='selection__menu' onClick={handleMenuNavigation}> Retornar ao Menu</button>
        </div>
      )
    }
    if(choice == 'consultar'){
      return(
        <div className="container">
          <Consultar/>
          <button className="return__menu-btn" type="button" value='selection__menu' onClick={handleMenuNavigation}> Retornar ao Menu</button>
        </div>
      )
    }
  }

}

