import {useState} from  'react';
import Info from './information'
let Home = ()=>{
  let [info,setInfo] = useState([
    {id:1,hobbies:'programming', name:'Abde',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:2,hobbies:'cooking', name:'Meryem',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'},
    {id:3,hobbies:'Gaming', name:'Loujaine',discrpt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse soluta ea repudiandae consequatur commodi, autem totam unde. Eos, repellat, nobis!'}
    ]);
  return (
    <div className='container'>
       <Info info={info} title="All Info"/>
    </div>
    )
}
export default Home