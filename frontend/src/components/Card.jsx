import "./Card.css"
import {FiTrash2} from 'react-icons/fi'
import { FormatarData } from "../fn-helpers/Data"
import {FiEdit} from "react-icons/fi"
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
    const setEditing = ()=>{
        props.setTravel({
            nome: props.nome,
            data: data.slice(0,16),
            desc: desc,
            price: price
        })
        props.setEditID(id)
    }
    return (
        <>
            <div className ={isDelete? "Card disappear": "Card"}>
                <h1>{props.nome}</h1>
                <div className = 'conteudoCard'>
                    <p>{desc}</p>
                    <p>{FormatarData(data)}</p>
                    <p className="price">{price}</p>
                </div>
                <div className = "bottom">
                    <div className = "btns">
                        <div onClick={()=>deleteMode()}
                        id ="trashDelete"
                        className='icons'
                        >
                        <FiTrash2 size={28}/>
                        </div>
                        <div 
                        id = 'editIcon'
                        className = "icons"
                        onClick={()=>setEditing()}
                        >
                        <FiEdit size = {28}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card