import './listar.css';
const getBanco = () => JSON.parse(localStorage.getItem('cadastros')) ?? [];

export function Listar(){
    
    const banco = getBanco();
    let pessoas = []

    for(let i = 0; i < banco.length; i++) {   
        pessoas.push(
            <ul>
                <li>Código: <span>  {banco[i].codeId}  </span></li>
                <li>Nome:   <span>  {banco[i].name}    </span></li>
                <li>CPF:    <span>  {banco[i].cpf}     </span></li>
                <li>Vacina: <span>  {banco[i].vaccine} </span></li>
                <li>Data:   <span>  {banco[i].date}    </span></li>
                <li>Lote:   <span>  {banco[i].lotNumber}</span></li>
            </ul>
        )
    }
    return(
        <section className="display__wrapper">
            <div className="display"> {pessoas} </div>
        </section>
    );
}