import FunctionSimples from "./components/FunctionSimples";
import FunctionDupla from "./components/FunctionDupla";
import Botao from "./layout/Botao";
function Geral(){
    return(
        <>
            <FunctionSimples/>
            <FunctionDupla/>
            <Botao>Entrar</Botao>
        </>
    )
}

export default Geral;