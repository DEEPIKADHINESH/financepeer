import {Link} from "react-router-dom";
import React from "react";
function Navbar(){
    return(
        <div>
<Link to ="/login" >Login</Link>
<Link to="/register">Register</Link>
</div>
    )
}
export default Navbar