import Tarefa from '../Tarefas/Tarefa';
import Logo from "../../image/checkboxLogo-p.png";
import './styleWelcome.css'
import Footer from '../Footer/Footer';

export function Welcome({usuarioLogin, setUsuarioLogin}){

    const handleLogout = () => {
        
        setUsuarioLogin([])
    }

    return(
        <div className='cabecalho'>
            <div className='cabecalhoLogo'>
                <img src={Logo} width={'70px'} alt="Logo do App Tarefas" />
                <h3>Minhas Tarefas ReactApp</h3>
            </div>
            <div className='cabecalhoUser'>
                <p>Bem Vindo {usuarioLogin}</p>
                <button onClick={handleLogout}>Terminar sessao</button>
            </div>     
            <Tarefa />
            <Footer />
        </div>
    )
}