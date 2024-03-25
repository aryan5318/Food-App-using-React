import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar=()=> {
  const [buttondecide,setButtonDecide]=useState(true);
    return (
      <>
      <div className="navbarparent">
        <div className="navbar"   >
          <div className="logocontainer">
          <img className="logo" src="https://img.freepik.com/free-vector/location_53876-25530.jpg?w=740&t=st=1710083349~exp=1710083949~hmac=b80ef92dccd5ea9f17c4be576b1ab49bf9c61550297986971c6c4e3c1ff2f78f"></img>
          </div>
          <div className="search">
            <li>Home</li>
            <li> <Link to="/About">  About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li> Cart</li>
          </div>
          {((buttondecide==true)?(<button className="navb" onClick={()=>setButtonDecide(false)}>Login</button>):
          (<button className= "navb"onClick={()=>setButtonDecide(true)}>Logout</button>))}
         
          
        </div>
        </div>
      </>
    )
  }

  export default Navbar;