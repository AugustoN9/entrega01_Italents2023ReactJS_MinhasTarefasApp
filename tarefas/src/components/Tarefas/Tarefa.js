import { useState } from 'react';
import TarefaItem from '../Tarefa-Item/TarefaItem';
import './styleTarefa.css';

const Tarefa = () => {
    const [tarefas, setTarefas] = useState([]); 
    const [tarefaText, setTarefaText] = useState(''); 

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        setTarefas([...tarefas, tarefaText]);
        setTarefaText('');
    }

    return(
        <section className="ListaTarefas">
            <h2 className="Listatarefas__titulo">Minha lista de Tarefas</h2>
            <form className="novaTarefa" onSubmit={handleSubmit}>
                <label htmlFor="novaTarefa"></label>
                <input type="text" id="novaTarefa" placeholder="Nova tarefa" value={tarefaText} onChange={handleChange}/>
                <button className="btn-enviar" type="submit">Enviar</button>
            </form>

            <ol className="Tarefas">
                {tarefas.map((tarefa, index) => (
                    <TarefaItem tarefa = { tarefa } key = { index } />
                ))}                
            </ol>
        </section>
    )
}

export default Tarefa;