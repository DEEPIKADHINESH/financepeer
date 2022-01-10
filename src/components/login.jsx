import React,{Component} from "react";
import {Link} from "react-router-dom";
class Login extends Component{
    state={
        account:{email:"",password:""}
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({e});
    }
    handleChange=(e)=>{
        const account={...this.state.account}
        account[e.currentTarget.name]=e.currentTarget.value;
        this.setState({account})
    }

    render(){
        return(
            <div className="col-sm-6 offset-sm-3">
              <h1>LOGIN</h1>
                <form onClick={this.handleSubmit}>
                    <label htmlFor="email" >Enter the email</label><br/>
                    <input type="email" name="email" 
                    value={this.state.account.email}
                    onChange={this.handleChange}></input><br/>
                    <label htmlFor="password">Enter your password</label><br/>
                    <input type="password" name="password"
                    value={this.state.account.password}
                    onChange={this.handleChange}></input>
                </form>
                
                <Link className="btn btn-primary"to="/data">LOGIN</Link>
            </div>
            

        )
    }
}
export default Login;