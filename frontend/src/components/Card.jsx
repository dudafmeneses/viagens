import "./Card.css"
import {FiTrash2} from 'react-icons/fi'
import { FormatarData } from "../fn-helpers/Data"
import { useState } from "react";
function Card(props){
    const {id,data,desc,price} = props
    const [isDelete, setIsDelete] = useState(false)
    const deleteMode=()=>{
        setIsDelete(true);
        setTimeout(()=>{
            props.deleteTravel(id)
        }, 700)
    }
    return (
        <>
            <div className ={isDelete? "Card disappear": "Card"}>
                <h1>{props.nome}</h1>
                <div className = "conteudoCard">
                    <p>{desc}</p>
                    <p>{FormatarData(data)}</p>
                    <p>{price}</p>
                </div>
                <div className = "bottom">
                    <div className = "botoes">
                        <div onClick={()=>deleteMode()}>
                        <FiTrash2 size={28}/>
                        </div>
                        <div className = "icons">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card