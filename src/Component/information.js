
import {Link} from 'react-router-dom';
let Info =({info,title,handelDelet})=>{
  return(
  <div className="info">
  <h1 className="center red-text darken-4">{title}</h1>
   {info.map(inf=>{
         return(
   <div className="card blue-grey darken-3 z-depth-3" key={inf.id}>
   <div className="card-content white-text"> 
   <Link to={`info/${inf.id}`}>
   <h3 className="card-title center">{inf.hobbies}</h3>
   <blockquote>{inf.discrpt}</blockquote>  
   <b className='right red-text'>{inf.name}</b>
   </Link>
   {/*<a className="waves-effect red btn left" onClick={()=>handelDelet(inf.id)}>Delete Info</a>*/}
   </div> 
   </div>
         )
         
       })}
  </div>
  )
}
export default Info;