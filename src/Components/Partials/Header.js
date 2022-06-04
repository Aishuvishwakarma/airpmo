import React from "react";
import StyleCss from "./Partials.module.css";



 function Header() {
  
 let title = window.location.pathname.substring(11)
    return (
      <>
        <div className={StyleCss.header}>
          <h1 style={{marginLeft:'20px'}} >{title}</h1>
          <div className={StyleCss.Searchbarbx}>
          <input
            className={StyleCss.search}
            type="search"
            placeholder="search"
          />

          <i style={{ fontSize:'30px'}} class="fa-solid fa-bell"></i>
          <i style={{  fontSize:'30px'}} class="fa-solid fa-user"></i>
         
          </div>
          
        </div>
       
       
        
      </>
    );
  }

  export default Header