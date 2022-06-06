import React, { Component } from "react";
import AuthCss from "./Auth.module.css";
import images from "../../assets/Signinsvg.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUser } from "../../Store/Actions/signinActions";
class Login extends Component {


  constructor(props){
    super(props)
    this.state = {
    username:'',
    password:''
    }
   
  }

 componentDidMount(){
   if(localStorage.token){
    if(this.props.isAuthenticated==false){
      window.location.pathname = '/'
     }else{
      window.location.pathname = '/dashboard/jobcard'
     }
   }
 }
  
  OnChangeHandler = (e)=> {
    e.persist()
   this.setState({[e.target.name]:e.target.value})
  }
  OnSubmitData = (e)=> {
    e.preventDefault();
    if(this.state.username!=='' || this.state.password !==''){
      let obj = {}
      obj.username = this.state.username
      obj.password = this.state.password
      this.props.signUser(obj,window.location)
    }
    
  }


  render() {

    return (
      <>
        <div className={AuthCss.Container}>
          <div className={AuthCss.Left}>
            <h2 className={AuthCss.logo}>airpmo</h2>
            <h1 style={{ fontSize: "3rem", marginTop: "20px" }}>
              Promote PMO/ <br />
              PMC Globally
            </h1>

            <img className={AuthCss.loginsvg} src={images} alt={images} />
          </div>
          <div className={AuthCss.Right}>
            <div className={AuthCss.LoginBx}>
              <h2>Login</h2>
              <form className={AuthCss.form}>
                <span style={{ color: "#4D627A", fontSize: "13px" }}>
                  Email Or Mobile
                </span>
                <input type="text" className={AuthCss.input}
                name='username'
                onChange={(e)=>this.OnChangeHandler(e)}
                placeholder="Enter your email or phone numer"
                />
                <span style={{ color: "#4D627A", fontSize: "13px" }}>
                  Password
                </span>
                <input type="password"
                name="password"
                onChange={(e)=>this.OnChangeHandler(e)}
                className={AuthCss.input}
                placeholder="Password"
                />
                <div className={AuthCss.btnbx}>
                  <Link to="/signup">
                    <button className={AuthCss.btn}  style={{backgroundColor:'#fff'}}>Sign Up</button>
                  </Link>
                  <button className={AuthCss.btn}
                  onClick={(e)=>this.OnSubmitData(e)}
                  style={{backgroundColor:'#0FCC7C'}} type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = ({ 
  signUser: signUser,
});


export default connect(mapStateToProps,mapDispatchToProps)(Login);
