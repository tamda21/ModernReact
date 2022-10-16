import {Link} from 'react-router-dom';
let Navbar = ()=>{
  return(
 <nav className="blue-grey darken-3">
    <div className="nav-wrapper white-text">
    <a href="#" className="brand-logo">Familly Info</a>
    <ul id="nav-mobile" className="right">
    <li><Link to="/">Homepage</Link></li>
    <li><Link to="/create">New Blogs</Link></li>
    
    </ul> </div>
  </nav> 
    )
}
export default Navbar 