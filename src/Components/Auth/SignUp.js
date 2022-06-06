import React, { Component } from "react";
import AuthCss from "./Auth.module.css";
import axios from '../../Utility/AxiosConfig';
import { connect } from "react-redux";

import { SignUp } from "../../Store/Actions/SignUpUpAction";
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            roles: [
                'user'
            ],
            username: ''

        }
    }




    OnChangeHandler = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value })
    }

    OnSubmithandler = (e) => {
        e.preventDefault();
        let { state} = this
        if(state.username&&state.firstName&&state.lastName&&state.password){
            this.props.SignUp(this.state,window.location)
        }
    }

    render() {
        return (
            <>
                <div className={AuthCss.signup}>
                    <h2 style={{ position: 'absolute', top: '50px', left: '100px', fontSize: '30px' }} >airpmo</h2>
                    <div className={AuthCss.signupcontent}>
                        <div className={AuthCss.topContent}>
                            <div className={AuthCss.signupIcon}>
                                <svg width="25" height="30" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.5816 33.948L35.458 33.8295C35.4859 33.8004 35.5075 33.7843 35.5183 33.777C35.5191 33.777 35.5201 33.7769 35.5211 33.7768C35.5337 33.7761 35.5825 33.7742 35.6585 33.7922C35.6585 33.7922 35.6585 33.7922 35.6585 33.7922C35.6644 33.7935 35.6704 33.7951 35.6766 33.7967C35.7074 33.8048 35.7431 33.8319 35.7627 33.8718C35.7829 33.9127 35.7889 33.9754 35.7647 34.0296C35.7541 34.0534 35.7414 34.0727 35.7281 34.0883L35.6255 33.99L35.5821 33.9484L35.5821 33.9484L35.5816 33.948M35.5816 33.948L35.5815 33.9479M35.5816 33.948L35.5816 33.948M35.5816 33.948L35.5821 33.9482M35.5815 33.9479L35.4579 33.8296C35.4436 33.8446 35.4323 33.8608 35.4236 33.8775M35.5815 33.9479L35.5815 33.9479M35.5815 33.9479L35.4236 33.8775M35.4236 33.8775C35.3995 33.9236 35.3952 33.9726 35.4013 34.0056C35.4095 34.0498 35.4422 34.1018 35.4945 34.1274C35.5269 34.1433 35.557 34.15 35.5829 34.1516C35.6128 34.1534 35.6371 34.1483 35.6531 34.1425C35.6728 34.1354 35.7016 34.1191 35.728 34.0883L35.6255 33.9901L35.5821 33.9485L35.582 33.9484L35.5815 33.9479M35.4236 33.8775L35.5815 33.9479M35.5815 33.9479L35.5816 33.948M35.5816 33.948L35.5821 33.9482M35.5821 33.9482L35.5822 33.9482L35.5821 33.9482ZM12.6661 8.57969C12.4685 9.3477 12.4013 9.88373 12.4013 10.7492C12.4013 12.1751 12.6703 13.3382 13.2916 14.6075C14.6422 17.3665 17.3201 19.2018 20.4452 19.4828C20.6064 19.4973 21.0391 19.5066 21.3704 19.4958C23.6714 19.4209 25.7461 18.5255 27.3332 16.9383C28.2025 16.069 28.9603 14.8846 29.3696 13.7656C29.7136 12.825 29.887 11.8335 29.887 10.7492C29.887 9.32327 29.618 8.1602 28.9966 6.89092C28.1431 5.14726 26.7461 3.7503 25.0023 2.89671C24.3582 2.58138 23.9877 2.44456 23.3137 2.27115L12.6661 8.57969ZM12.6661 8.57969C12.8395 7.90556 12.9763 7.53504 13.2916 6.89092M12.6661 8.57969L23.3136 2.27114C22.5456 2.07357 22.0095 2.00635 21.1441 2.00635C19.7182 2.00635 18.5551 2.27537 17.2858 2.89671C15.5421 3.75028 14.1452 5.14721 13.2916 6.89092M13.2916 6.89092L11.9444 6.23142L13.2916 6.89092ZM1.60574 43.0063C1.68044 42.4063 1.78887 41.7172 1.9118 41.1243C3.18494 34.9847 7.42876 29.752 13.2182 27.1997C15.1463 26.3496 17.183 25.8238 19.3948 25.6119C20.2341 25.5315 22.0541 25.5315 22.8934 25.6119C25.6631 25.8772 28.1591 26.6309 30.5169 27.913C30.2245 28.1004 29.9445 28.3007 29.6858 28.5084L29.6857 28.5085C27.2748 30.444 25.9209 33.5845 26.2024 36.6437C26.4378 39.2027 27.613 41.4361 29.4233 43.0063H21.1441H1.60574Z" stroke="#0FCC7C" stroke-width="3" />
                                </svg>

                            </div>
                            <h2 className={AuthCss.topText}>Create new <br /> account</h2>
                        </div>
                        <div className={AuthCss.inputBox}>
                            <div className={AuthCss.inputdiv}>
                                <div className={AuthCss.input1}>
                                    <input type="text" placeholder="First Name" name="firstName" onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="text" placeholder="Phone Number" name='phoneNumber' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="text" placeholder="Username" name='username' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="password" placeholder="Password" name='password' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                </div>
                                <div className={AuthCss.input2}>
                                    <input type="text" placeholder="Last Name" name='lastName' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="text" placeholder="Email" name='email' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="text" placeholder="Company Name" name='companyname' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                    <input type="text" placeholder="Comment" name='comment' onChange={(e) => this.OnChangeHandler(e)} className={AuthCss.signupinput} />
                                </div>
                            </div>
                            {/* <div>
                                <input type="text" placeholder="Comment" className={AuthCss.input3} />
                            </div> */}
                        </div>
                        <div className={AuthCss.signupbutton}>
                            <button className={AuthCss.cancelbuttons} onClick={() => window.location.pathname = '/'} >Cancel</button>
                            <button className={AuthCss.createbuttons} onClick={this.OnSubmithandler} >Create Account</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth
//     signupReducer: state.createdUser
//   });
  
  const mapDispatchToProps = ({ 
    SignUp:SignUp
  });
  
  
  export default connect(null,mapDispatchToProps)(Signup);
