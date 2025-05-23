import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";
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