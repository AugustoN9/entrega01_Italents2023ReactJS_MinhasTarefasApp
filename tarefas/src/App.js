import { Login } from './components/Login/Login';
import { Welcome } from './components/Welcome/Welcome';
import { useState } from 'react';
import './App.css';


function App() { 

  const [usuarioLogin, setUsuarioLogin] = useState([]);

  return (
    <div className='App'>
      {
        !usuarioLogin.length > 0
          ? <Login setUsuarioLogin = {setUsuarioLogin} />
          : <Welcome usuarioLogin = {usuarioLogin} setUsuarioLogin = {setUsuarioLogin} />
      }
      
    </div>
  );
}

export default App;
