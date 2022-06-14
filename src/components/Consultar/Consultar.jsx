import { useState } from 'react';
import './consultar.css';
const getBanco = () => JSON.parse(localStorage.getItem('cadastros')) ?? [];

export function Consultar(){
    const [searchResult, setSearchResult] = useState({name: '', cpf: '', vaccine: '', date: '', lote: '' });
    const [cpfConsulta, setCpfConsulta] = useState();
    const [cpfConsultado, setCpfConsultado] = useState(false);
    const [cpfNaoEncontrado, setCpfNaoEncontrado] = useState(false);

    function handleConsultarNovamente(){
        setCpfNaoEncontrado(false);
        setCpfConsultado(false);
    }

    function handleConsulta(cpf){
        let found = false;
        const banco = getBanco();
        for(let i = 0; i < banco.length; i++) {
            if(banco[i].cpf === cpf) {
                setSearchResult({
                    ...searchResult, 
                    name:banco[i].name, 
                    cpf: banco[i].cpf, 
                    vaccine: banco[i].vaccine, 
                    date: banco[i].date, 
                    lote: banco[i].lotNumber
                })
                found = true;
                setCpfConsultado(true)
            }
        }
        if(!found){
            setCpfNaoEncontrado(true);
        }   
    }
    if(cpfNaoEncontrado){
        return(
            <div className="cpfNaoEncontrado">
                <h1>Cpf não encontrado</h1>
                <button className="buscar__novamente-btn" onClick={handleConsultarNovamente}>Buscar Novamente</button>
            </div>
        )
    }
    else if(!cpfConsultado){
        return(
            <section className="consultar__container">
                <h1>Consultar por CPF</h1>
                <input 
                    type="number" 
                    placeholder="Digite o cpf que deseja consultar"  
                    onChange={(e) => setCpfConsulta(e.target.value)}
                />
                <button onClick={() => handleConsulta(cpfConsulta)}>Consultar</button>
            </section>
        )
    }
    else if(cpfConsultado){
        return (
            <>
                <section className="result__container">
                    <div className="result__wrapper">
                        <h1>Cpf encontrado!</h1>
                        <h2>  Nome:   <span>{searchResult.name}   </span>  </h2>
                        <h2>  Cpf:    <span>{searchResult.cpf}    </span>  </h2>
                        <h2>  Vacina: <span>{searchResult.vaccine}</span>  </h2>
                        <h2>  Data:   <span>{searchResult.date}   </span>  </h2>
                        <h2>  Lote:   <span>{searchResult.lote}   </span>  </h2>
                        
                    </div>
                </section>
                <button className="buscar__novamente-btn" onClick={handleConsultarNovamente}>Buscar Novamente</button>
            </>
        )
    }
    else{
        console.error("cpfAchou useState")
    }

}