import React, { Component } from 'react'
import SignIn from "./Components/Auth/SignIn";
import SignUP from "./Components/Auth/SignUp";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import JobCard from "./Components/JobCard/JobCard";
import { connect } from "react-redux";
import { loadUser } from "./Store/Actions/signinActions";
import axios from "./Utility/AxiosConfig";
 class App extends Component {

  componentDidMount(){
    console.log(axios.defaults.headers)
   let token = localStorage.token
   if(token){
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
     this.props.loadUser(token)
   }else{
    delete axios.defaults.headers.common['Authorization'];
   }
  }

  render() {
    return (
      <>
      <BrowserRouter>
      
      <Routes>
        {
          this.props.auth.isAuthenticated === true  ? <>
          <Route path='/dashboard/:jobcard' element={<JobCard />} />
          </>: <Route path='/' element={<SignIn />} />
        }
       
       <Route path='/signup' element={<SignUP />} />

      </Routes>
       
      </BrowserRouter>
    
      </>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = ({ 
  loadUser: loadUser,
});


export default  connect(mapStateToProps,mapDispatchToProps)(App); 