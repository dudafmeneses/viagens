import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
function Geral(){
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            <Botao classe="botao purple"> Entrar </Botao>
            <Botao classe="botao blue"> Sair </Botao>
        </>
    )
}

export default Geral;