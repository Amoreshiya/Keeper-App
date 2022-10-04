
import './App.css';
import Addkeeper from './Componant/AddKeeper/Addkeeper';
import Header from './Componant/Header/header';
import {useState,useEffect} from "react"
import Showkeeper from './Componant/Showkeeper/Showkeeper';
import axios from 'axios';

function App() {
  const [keeperList , setkeeperList]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/api/getAll ")
    .then(res=>setkeeperList(res.data))
  },[])
  return (
    <div className="App">
    {console.log("keeperlist",keeperList)}
      <Header/>
      <Addkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
      <Showkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
     
    </div>
  );
}

export default App;
