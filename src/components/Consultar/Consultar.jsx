import { useState } from 'react';
import './consultar.css';
const getBanco = () => JSON.parse(localStorage.getItem('cadastros')) ?? [];

export function Consultar(){

    const [searchResult, setSearchResult] = useState({name: '', cpf: '', vaccine: '', date: '', lote: '' });
    const [cpfConsulta, setCpfConsulta] = useState();
    const [cpfAchou, setCpfAchou] = useState(false);

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
                    lote: banco[i].loteNumber
                })
                found = true;
                setCpfAchou(true)
            }
        }
        if(!found){
            console.log("Cpf não encontrado");
        }   
    }

    if(!cpfAchou){
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
    else if(cpfAchou){
        return (<>Cpf encontrado: {searchResult.name}</>)
    }
    else{
        console.error("cpfAchou useState")
    }

}