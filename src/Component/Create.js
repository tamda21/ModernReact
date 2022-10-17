import {useState} from 'react';

let Create =()=>{
  let [hobbies,setHobbies] = useState("");
  let [name,setName] = useState("");
  let [discrpt,setDiscrpt] = useState("");
  let [isPending,setIsPending ]=useState(false);
  let handelSubmit =(e)=>{
    e.preventDefault();
    let blogs ={hobbies,name,discrpt};
    setIsPending(true)
    fetch('http://localhost:8000/info',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(blogs)
    }).then(()=>{
      console.log('data added '));
      setIsPending(false)
    }
  }
  return (
    <div className ='create container'>
     <form style ={{marginTop :"50px"}} onSubmit={handelSubmit}>
        <label>Hobbies :</label>
        <input value={hobbies} type="text" required onChange ={(e)=>{setHobbies(e.target.value)}}/>
        <label>Name :</label>
        <input value={name} type="text" required onChange={(e)=>{setName(e.target.value)}}/>
        
        <textarea value={discrpt} rows="8" cols="40" placeholder="Discrpt Your Self...." onChange={(e)=>{setDiscrpt(e.target. value)}}></textarea>
        {!isPending && <button>Send</button>}
        {isPending && <button disabled>Send</button>}
     
      </form>
    </div>
    )
}
export default Create 