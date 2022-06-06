import React,{useEffect,useState} from 'react'
import JobCardCss from './JobCard.module.css'
import StyleCss from "../Partials/Partials.module.css";
import Header from "../Partials/Header";
import Sidebar from "../Partials/Sidebar";
import { connect } from "react-redux";
import {  useNavigate} from "react-router-dom";

import { loadUser,signinLoadingTrue } from "../../Store/Actions/signinActions";
function JobCard(props) {

  let history = useNavigate()

 const [state, setstate] = useState({
   username :'',
   isAuthentication:false
 })

  useEffect(() => {
    Authentication() 
  
    return () => {
      
    }
  }, [null])
  
  

  const Authentication = ()=> {
    let token = localStorage.token
    if(token){
      props.loadUser(localStorage.token)
    }else{
      history('/')
    }
   
  }

  
  return (
    <>
      <div className={StyleCss.Container} >
        <Sidebar />
        <Header title='Activities' />
        <div className={JobCardCss.row}>
          <div className={JobCardCss.JobCard}>
            <div className={JobCardCss.JobCardsrch}>
              <input
                type="search"
                className={JobCardCss.search}
                placeholder="Choose Client"
              />
              <input
                type="search"
                className={JobCardCss.search}
                placeholder="Choose Project"
              />
            </div>
            <div className={JobCardCss.JCard}>
              <div className={JobCardCss.JobAssign}>
                <div className={JobCardCss.crcl}>
                  <svg width="20" height="25" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.10205 4.83143V3.24285C5.10205 2.36422 5.84824 1.65194 6.76872 1.65194H11.7755C12.2165 0.591338 13.3254 0.0610352 15.1021 0.0610352C16.8787 0.0610352 17.9908 0.591338 18.4383 1.65194H23.4354C24.3559 1.65194 25.1021 2.36422 25.1021 3.24285V4.83143H28.4354C29.3559 4.83143 30.1021 5.54371 30.1021 6.42234V33.4701C30.1021 34.3488 29.3559 35.061 28.4354 35.061H1.76872C0.848243 35.061 0.102051 34.3488 0.102051 33.4701V6.42234C0.102051 5.54371 0.848243 4.83143 1.76872 4.83143H5.10205ZM5.10205 8.01558H3.43538V31.8792H26.7687V8.01558H25.1021C25.1021 8.89422 24.3559 9.60649 23.4354 9.60649H6.76872C5.84824 9.60649 5.10205 8.89422 5.10205 8.01558ZM11.7687 23.2657L12.9472 24.3906C13.5981 25.0119 13.5981 26.0192 12.9472 26.6405C12.2964 27.2618 11.2411 27.2618 10.5902 26.6405L7.25687 23.4587C6.606 22.8374 6.606 21.8301 7.25687 21.2088C7.90775 20.5875 8.96302 20.5875 9.61389 21.2088L11.7687 23.2657L20.5902 14.8452C21.2411 14.2239 22.2964 14.2239 22.9472 14.8452C23.5981 15.4665 23.5981 16.4738 22.9472 17.0951L12.9472 26.6405C12.2964 27.2618 11.2411 27.2618 10.5902 26.6405C9.93933 26.0192 9.93933 25.0119 10.5902 24.3906L11.7687 23.2657ZM6.76872 3.24285V8.01558H23.4354V3.24285H16.7984C16.7984 2.18587 16.233 1.65738 15.1021 1.65738C13.9711 1.65738 13.4129 2.18587 13.4273 3.24285H6.76872Z" fill="#0FCC7C" />
                  </svg>

                </div>
                <div className={JobCardCss.Content} >
                  <h4 style={{ marginBottom: '10px', color: '#A3AED0' }}>Job Card assigned</h4>
                  <h2>800</h2>
                </div>
              </div>
              <div className={JobCardCss.myJob}>
                <div className={JobCardCss.crcl}>
                  <svg width="26" height="18" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1358 27.1737C14.7733 28.5284 16.6843 28.5725 17.3837 27.2487L28.4738 6.25673L32.776 14.5302C33.3551 15.644 34.8628 15.8479 35.717 14.928L41.6172 8.57396C42.2994 7.83923 42.2569 6.69055 41.5221 6.0083C40.7874 5.32606 39.6387 5.3686 38.9565 6.10333L34.809 10.5698L30.0972 1.50864C29.4217 0.209583 27.5653 0.203538 26.8813 1.49817L15.8724 22.3366L10.1594 10.1965C9.67694 9.17128 8.38357 8.83365 7.46156 9.49223L1.10754 14.0308C0.291665 14.6136 0.102693 15.7474 0.685463 16.5633C1.26823 17.3792 2.40206 17.5681 3.21794 16.9854L7.80087 13.7119L14.1358 27.1737Z" fill="#0FCC7C" />
                  </svg>

                </div>
                <div className={JobCardCss.Content} >
                  <h4 style={{ marginBottom: '10px', color: '#A3AED0' }}>My Job Card</h4>
                  <h2>400</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}



const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = ({ 
  loadUser: loadUser,
  signinLoadingTrue:signinLoadingTrue
});


export default connect(mapStateToProps,mapDispatchToProps)(JobCard);