import { useState } from "react";
import {data} from "./Birthday";
function App()
{
const [people,setPeople]=useState(data)
const removePerson=(id)=>{
  let newPerson=people.filter((person) => person.id!==id)
  setPeople(newPerson)
}
return(
  <>
  <h2 style={{ backgroundColor:"#ffcbd0", color:"white",fontFamily:"monospace",textAlign:"center",fontSize:"40px"}}>YOU HAVE {people.length} BIRTHDAY'S TODAY</h2>
  {people.map((person)=> {
    const {id,name,image,age,city}=person
    return(
      <div className="container">
        <img src={image} alt={name}/>
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{city}</li>
        </ul>
        <button className="btn" onClick={() => removePerson(id)}>DISMISS</button>
      </div>
    )
  })}
  </>
)
}
export default App