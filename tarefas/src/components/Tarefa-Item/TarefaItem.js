import './styleTarefaItem.css';
const TarefaItem = ( {tarefa} ) => {
    return(
        <li className="Tarefa__item">
           {tarefa}
            <input className='checkbox' type="checkbox" />
        </li>
    )
}

export default TarefaItem;