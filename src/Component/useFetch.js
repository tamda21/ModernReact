import {useState,useEffect} from 'react';

let useFetch =(url)=>{
  let [info,setInfo] = useState(null);
let [isPending,setisPending] = useState(true);
let[error,setError] = useState(null);
useEffect(()=>{
      /* setTimeout just for testing your server connection*/
      setTimeout(function() {
fetch(url).then(res=>{
  if(!res.ok){
   throw Error('could not fetch data for this recource :(');
  }
  return res.json()
}).then(data=>{
        setInfo(data);
        setisPending(false);
        setError(null);
      }).catch(err=>{
        setisPending(false);
        setError(err.message);
      });
      }, 2000);
      },[url]);
  return {info,isPending,error};
};
export default useFetch;