import './cadastrar.css';
import {useState} from 'react'


class Cadastro {
    constructor(codeId, name, cpf, vaccine, date, lotNumber) {
        this.codeId = codeId;
        this.name = name;
        this.cpf = cpf;
        this.vaccine = vaccine;
        this.date = date;
        this.lotNumber = lotNumber;
    }
}


let formValues = {
    name: '',
    cpf: '',
    vaccine: '',
    date: '',
    loteNumber: ''
};
function getFormValues(event) {
    formValues.name = event.target.elements.nome.value;
    formValues.cpf = event.target.elements.cpf.value;
    formValues.vaccine = event.target.elements.vacina.value;
    formValues.date = event.target.elements.data.value;
    formValues.loteNumber = event.target.elements.lote.value;
}


const getBanco = () => JSON.parse(localStorage.getItem('cadastros')) ?? [];
const setBanco = (banco) => localStorage.setItem('cadastros', JSON.stringify(banco));
let formSubmited = false;

const handleSubmit = (event) => {
    event.preventDefault();
    getFormValues(event);
    const banco = getBanco();
    const id = banco.length + 1;
    let cadastro = new Cadastro(
        id, 
        formValues.name,
        formValues.cpf,
        formValues.vaccine,
        formValues.date,
        formValues.loteNumber
    )
    banco.push(cadastro);
    console.log(banco);
    setBanco(banco);
    formSubmited = true;
    
}


export function Cadastrar(){

    const [formSent, setFormState] = useState(false);
    const handleFormState = () => setTimeout(() => {if(formSubmited){setFormState(true) }; formSubmited = false;}, 10);

    if(formSent){
        return(<><h1>form sent :)</h1> </>)
    }
    else{
        return(
            <> 
                <h1>Cadastrar</h1>
                <form className="cadastroForm" name="cadastro-form"onSubmit={handleSubmit}>
                    <label>
                        <h1>Nome</h1>
                        <input name="nome" type="text" required />
                    </label>
                    <label>
                        <h1>CPF</h1>
                        <input name="cpf" type="number" required />
                    </label>
                    <label>
                        <h1>Vacina</h1>
                        <input name="vacina" type="text" required />
                    </label>
                    <label>
                        <h1>Data</h1>
                        <input name="data"type="date" required />
                        {/* https://teamtreehouse.com/community/html-input-date-field-how-to-set-default-value-to-todays-date */}
                    </label>
                    <label>
                        <h1>Número Lote</h1>
                        <input name="lote" type="number" required />
                    </label>
                    <button type="submit" disabled={''} onClick={handleFormState}>Confirmar</button>
                </form>
            </>
        )
    }

}