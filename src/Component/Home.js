import {useState,useEffect} from  'react';
import Info from './information';
let Home = ()=>{
 {/* let [info,setInfo] = useState([
    {id:1,hobbies:'programming', name:'Abde',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:2,hobbies:'cooking', name:'Meryem',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:3,hobbies:'Gaming', name:'Loujaine',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'}
    ]);*/}
    let [info,setInfo] = useState(null);
    let [isPending,setisPending] = useState(true);
    let[error,setError] = useState(null)
   {/* let handelDelet =(id)=>{
      let newInfo =info.filter(inf=>id!==inf.id);
      setInfo(newInfo)
    }*/}
    useEffect(()=>{
      /* setTimeout just for testing your server connection*/
      setTimeout(function() {
fetch('http://localhost:8000/info').then(res=>{
  if(!res.ok){
   throw Error('Data Feiled ');
  }
  return res.json()
}).then(data=>{
        setInfo(data)
        setisPending(false)
        setError(null)
      }).catch(err=>{
        setisPending(false)
        setError(err.message)
      })
    
      }, 2000)
      },[])
  return (
    <div className='container'>
    {error && <div class="red-text">{error}</div>}
    {isPending && <div class="progress">Loading... <div class="indeterminate"></div> </div>}
     { info && <Info info={info} title="All Info!"/>}
       {/*<Info info={info.filter(inf=>{
         return inf.name==='Abde'||inf.name==='Meryem'
       })} title="Info Perants !"/>*/}
    
    </div>
    )
}
export default Home
/* we use to watch your json file the command line #npx json-server --watch data/dp.json --port 8000#*/