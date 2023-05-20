import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './components/Form'
import Card from './components/Card'
function App() {
  const [travels,setTravels] = useState([]);
  const [travel, setTravel] = useState({nome:'', data:'', price:0, desc:''})
  const [editId, setEditID] =useState(-1);
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
    })
    .catch(erro=>console.log("Erro ao deletar"))
}
  const editTravel=(id, travel)=>{
    axios.put('http://localhost:3001/api/v1/travels/${id}',{travel})
      .then(res=>{
        let newListaDeViagens = travels.map(v=>{
          if (v.id === id){
            return res.data
          }
          return v
        })
        setTravels(newListaDeViagens)
      })
      .catch(erro=>{
        console.log(erro)
      })
  }
  function EnvioFormulario(event){
    event.preventDefault();
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
      })
      .catch (error=>console.log(error))
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
      </div>
    </div>
  );
}

export default App;
