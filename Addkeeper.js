import React, { useState} from "react";
import "./Addkeeper.css"
import axios from "axios"


const Addkeeper = ({setkeeperList}) => {

    const [keeperObj ,setKeeperObj]=useState({
        title:"abhi",
        description:""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setKeeperObj({
            ...keeperObj,
            [name]: value
        })
    }
    const add = () =>{
         if ( keeperObj.title){
            axios.post("http://localhost:3001/api/addNew",keeperObj)
            .then(res =>setkeeperList(res.data))
            
            }
        
    }



    return (     

        <div className="AddKeeper">
            
           <input
            className="inputBox" 
            placeholder="Add Title"
            type={"text"}
            // autoComplete="off"
            onChange={handleChange}
            defaulvalue= {keeperObj.title}      
            />


           <textarea 
           className="inputBox description"
           name="description"
           placeholder="Add Description Here"
           onChange={handleChange}
     defaultvalue={keeperObj.description}
           
           />


           <button className="addButton" onClick={add}>sav keeper</button>
        </div>
    )   
}

export default Addkeeper;