import './styleLogin.css';
import Logo from "../../image/checkboxLogo-p.png";
import { useState } from 'react';

export function Login({setUsuarioLogin}) {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(usuario === "" || senha === ""){
            setError(true);
            return
        }
        
        setError(false);

        setUsuarioLogin([usuario])
    }

    return(
        <div className="container">
            <div className="form-image">
            </div>
            <div className="form">
                <img src={Logo} alt="Logo do App Tarefas" />
                <h1>Minhas Tarefas AppReact</h1>
                <h2>Login</h2>
                <form className="formularioLogin" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)} 
                    placeholder='Informe email ou username'
                    />
                    <input 
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)} 
                    placeholder='Informe a senha'
                    />
                   
                    <button>Entrar</button>
                </form>
                {error && <p>Todos os campos são obrigatorios!</p>}
            </div>

        </div>
    )
}
