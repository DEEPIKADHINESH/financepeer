import {NavLink} from "react-router-dom";
import React from "react";
function Navbar(){
    return(
<nav className="navbar navbar-light bg-light">
<NavLink className="navbar-brand" to ="/login" >Login</NavLink>
<NavLink className="navbar-brand"to="/register">Register</NavLink>
</nav>

    )
}
export default Navbar