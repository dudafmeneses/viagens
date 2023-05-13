import "./Card.css"
import {FiTrash2} from 'react-icons/fi'
function Card(props){
    const {id,data,desc,price} = props
    return (
        <>
            <div className = "Card">
                <h1>{props.nome}</h1>
                <div className = "conteudoCard">
                    <p>{desc}</p>
                    <p>{data}</p>
                    <p>{price}</p>
                </div>
                <div className = "bottom">
                    <div className = "botoes">
                        <div onClick={()=>props.deleteTravel(id)}>
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