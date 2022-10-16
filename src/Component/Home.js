import {useState,useEffect} from  'react';
import useFetch from './useFetch'
import Info from './information';
let Home = ()=>{
 {/* let [info,setInfo] = useState([
    {id:1,hobbies:'programming', name:'Abde',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:2,hobbies:'cooking', name:'Meryem',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:3,hobbies:'Gaming', name:'Loujaine',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'}
    ]);*/}
    
   {/* let handelDelet =(id)=>{
      let newInfo =info.filter(inf=>id!==inf.id);
      setInfo(newInfo)
    }*/}
    let {info,isPending,error} = useFetch('http://localhost:8000/info');
  return (
    <div className ='container'>
    {error && <div className ="red-text">{error}</div>}
    {isPending && <div className ="progress">Loading... <div className ="indeterminate blue-grey darken-3"></div> </div>}
     { info && <Info info={info} title="All Info!"/>}
       {/*<Info info={info.filter(inf=>{
         return inf.name==='Abde'||inf.name==='Meryem'
       })} title="Info Perants !"/>*/}
    
    </div>
    )
}
export default Home
/* we use to watch your json file the command line #npx json-server --watch data/dp.json --port 8000#*/