import React,{Component} from "react";
import {Link} from "react-router-dom";
class Login extends Component{
    render(){
        return(
            <div>
              
              <h1>LOGIN</h1>
                <form>
                    <label htmlFor="email" >Enter the email</label><br/>
                    <input type="email"></input><br/>
                    <label htmlFor="password">Enter your password</label><br/>
                    <input type="password"></input>
                </form>
                <Link to="/data">LOGIN</Link>
            </div>
            

        )
    }
}
export default Login;