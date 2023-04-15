import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
import {useState} from 'react';
function Geral(){
    const [variavel, FunctionMudarVariavel] = useState(false)
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            {
                variavel ? <p>logado</p> : <p>Deslogado</p>
            }
            <Botao classe="botao purple"> Entrar </Botao>
            <Botao classe="botao blue"> Sair </Botao>
        </>
    )
}

export default Geral;