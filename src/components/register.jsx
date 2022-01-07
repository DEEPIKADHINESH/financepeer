import React,{Component} from "react";
import {Link } from "react-router-dom";
class Register extends Component{
    state={
        account:{username:"",email:"",password:""}
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({e})
    }
    handleChange=(e)=>{
        const account={...this.state.account}
        account[e.currentTarget.name]=e.currentTarget.value;
        this.setState({account})
    }
    render(){
        return(
            <>
        <form onClick={this.handleSubmit}>
            <label htmlFor="name">Enter the user name</label><br/>
            <input type="text" id="name" 
            value={this.state.account.username}
            onChange={this.handleChange}
            name="username"></input><br/>
            <label htmlFor="email">Enter your email</label><br/>
            <input type="email" id="email" 
            onChange={this.handleChange}
            name="email"
            value={this.state.account.email}></input><br/>
            <label htmlFor="password">Enter the password</label><br/>
            <input type="password" id="password" 
            value={this.state.account.password}
            name="password"
            onChange={this.handleChange}></input><br/>
        </form><br/>
        <Link  className="btn btn-primary"to="/data">Register</Link><br/>
        If already registed <Link className="btn btn-primary" to="/login">Login</Link>
        </>
        )
    }
}
export default Register;