let Info =({info,title})=>{
  return(
  <div>
  <h1 class="center red-text darken-4">{title}</h1>
   {info.map(inf=>{
         return(
   <div class="card blue-grey darken-3 z-depth-3">
   <div class="card-content white-text"> 
   <h3 class="card-title center">{inf.hobbies}</h3>
   <blockquote>{inf.discrpt}</blockquote>  
   <b class='right red-text'>{inf.name}</b>
   </div> 
   </div>
         )
         
       })}
  </div>
  )
}
export default Info;