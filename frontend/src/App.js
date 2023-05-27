import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './components/Form'
import Card from './components/Card'
import Popup from './components/Popup';
function App() {
  const [travels,setTravels] = useState([]);
  const [travel, setTravel] = useState({nome:'', data:'', price:0, desc:''})
  const [editId, setEditID] =useState(-1);
  const [showPopup, setShowPopup] = useState (false);
  const [popuContent, setPopupContent] = useState ({message: '', color: ''});
  function showAndHidePopup(){
    setShowPopup(true);
    setTimeout(()=>{
      setShowPopup(false);
    }, 3500)
  }
  useEffect(()=>{
    axios.get('http://localhost:3001/api/v1/travels')
      .then(resposta=>setTravels(resposta.data))
      .catch(erro=>console.error(erro))
  },[])

const deleteTravel = (id)=>{
  axios.delete(`http://localhost:3001/api/v1/travels/${id}`)
    .then(res=>{
      console.log(res.data)
      setTravels(travels.filter(t=>t.id !== id))
      setTravel({
        nome: '',
        data: '',
        price:'',
        desc:''
      })
      setEditID(-1)
      setPopupContent({message: res.data.message, color:'sucess'})
      showAndHidePopup()
    })
    .catch(erro=>{
      console.log("Erro ao editar")
      setPopupContent({message: 'Erro ao deletar', color:'warning'})
      showAndHidePopup()
    })
}
  const editTravel=(id, travel)=>{
    axios.put(`http://localhost:3001/api/v1/travels/${id}`  ,{travel})
      .then(res=>{
        let newListaDeViagens = travels.map(v=>{
          if (v.id === id){
            return res.data
          }
          return v
        })
        setTravels(newListaDeViagens)
        setPopupContent({message:'Editado com sucesso', color: 'success'})
        showAndHidePopup()
      })
      .catch(erro=>{
        console.log(erro)
      })
  }
  function CadastrarViagem(event){
    axios.post('http://localhost:3001/api/v1/travels', {travel})
    .then (res=>{
      console.log(res.data)
      setTravels([...travels,res.data])
      setTravel({
        nome: '',
        data: '',
        price: 0,
        desc:''
      })
      setPopupContent({message: 'Cadastrado com sucesso', color:'success'})
      showAndHidePopup()
    })
    .catch (error=>{
      console.log(error)
      setPopupContent({message: error.message,color:'success'})
      showAndHidePopup()
    })
  }
  function EnvioFormulario(event){
    event.preventDefault();
    if (editId !== -1){
      editTravel(editId, travel)
      setEditID (-1)
      setTravel({
        nome: '',
        data: '',
        price:'',
        desc:''
      })
      return
    }
    CadastrarViagem(travel);
  }
  return (
    <div className="App">
      <Form
        travel = {travel}
        setTravel = {setTravel}
        EnvioFormulario = {EnvioFormulario}
        id = {editId}
      />
      <div className = "cards">
        {
          travels.map(viagem=>
            <Card
              deleteTravel={deleteTravel}
              key = {viagem.id}
              id = {viagem.id}
              nome = {viagem.nome}
              data = {viagem.data}
              desc = {viagem.desc}
              price = {viagem.price}
              setEditID = {setEditID}
              setTravel = {setTravel}
            />
            )
        }
        {showPopup?
          <Popup
            message = {popuContent.message}
            color = {popuContent.color}
          />
          : null
        }
      </div>
    </div>
  );
}

export default App;
