import {useState,useEffect} from 'react';

let useFetch =(url)=>{
  let [info,setInfo] = useState(null);
let [isPending,setisPending] = useState(true);
let[error,setError] = useState(null);
useEffect(()=>{
      /* setTimeout just for testing your server connection*/
      let abortCont = new AbortController();
      setTimeout(function() {
fetch(url,{singal:abortCont.singal}).then(res=>{
  if(!res.ok){
   throw Error('could not fetch data for this recource :(');
  }
  return res.json()
}).then(data=>{
        setInfo(data);
        setisPending(false);
        setError(null);
      }).catch(err=>{
        if (err.name==="AbortError") {
          console.log('Fetch Aborted');
        } else {
        setisPending(false);
        setError(err.message);
        }
      });
      },1000);
      return ()=>{
        abortCont.abort();
        
      }
      },[url]);
  return {info,isPending,error};
};
export default useFetch;