import { useState } from "react";
import Perfil from './components/Perfil/index.jsx';
import Formulario from './components/Formulario/index.jsx';
import ReposList from './components/RepoList/index.jsx';


function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
    const nomeUsuario = "helbert-guirra"; 

    return (
        <div>
            <Perfil nomeUsuario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario} />
            {formularioEstaVisivel && <Formulario />}
            <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
                Toggle Form
            </button>
        </div>
    );
}

export default App;

