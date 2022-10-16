import {useParams} from 'react-router-dom';
import useFetch from './useFetch'
let InfoDetails =()=>{
  let {id} =useParams();
  let {info,isPending,error} = useFetch('http://localhost:8000/info/'+id);
  return (
    <div className="container">
      <h2 className="center"> Info-Details-{id} </h2>
      {isPending && <div className="progress"> <div className="indeterminate"></div> </div>}
      {error && <div className="card blue-grey darken-1">
      <div className="card-content white-text"> 
      <span className="card-title">Error Message</span>
      <p>Data For This Recource is Not Finished</p> 
      </div>
      </div>
      }
      {info && 
      <div className="card blue-grey darken-1"> <div className="card-content white-text"> 
      <span className="card-title">{info.hobbies}</span> <p>{info.discrpt}</p> 
      </div> 
      </div>
      }
    </div>
    )
    
}
export default InfoDetails