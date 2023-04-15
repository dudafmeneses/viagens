import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
import {useState, useEffect} from 'react';
function Geral(){
    const [variavel, FunctionMudarVariavel] = useState(false)
    const Logar = () => {
        FunctionMudarVariavel(true)
    }
    const Deslogar = () =>{
        FunctionMudarVariavel(false)
    }

    useEffect(() => {
        console.log ("renderizei a primeira vez")
    },[variavel])
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            {
                variavel ? <p>Logado</p> : <p>Deslogado</p>
            }
            <Botao tarefa = {Logar} classe="botao purple"> Entrar </Botao>
            <Botao tarefa = {Deslogar} classe="botao blue"> Sair </Botao>
        </>
    )
}

export default Geral;