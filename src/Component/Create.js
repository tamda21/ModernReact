import {useState} from 'react';

let Create =()=>{
  let [hobbies,setHobbies] = useState("");
  let [name,setName] = useState("");
  let [discrpt,setDiscrpt] = useState("");
  let handelSubmit =(e)=>{
    e.preventDefault();
    let blogs ={hobbies,name,discrpt};
    fetch('http://localhost:8000/info',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(blogs)
    }).then(()=>console.log('data added '));
  }
  return (
    <div className ='create container'>
     <form style ={{marginTop :"50px"}} onSubmit={handelSubmit}>
        <label>Hobbies :</label>
        <input value={hobbies} type="text" required onChange ={(e)=>{setHobbies(e.target.value)}}/>
        <label>Name :</label>
        <input value={name} type="text" required onChange={(e)=>{setName(e.target.value)}}/>
        
        <textarea value={discrpt} rows="8" cols="40" placeholder="Discrpt Your Self...." onChange={(e)=>{setDiscrpt(e.target. value)}}></textarea>
        <button>Send</button>
        <p>{hobbies}</p>
        <p>{name}</p>
        <p>{discrpt}</p>
      </form>
    </div>
    )
}
export default Create 