import React from "react";
import StyleCss from "./Partials.module.css";



function Header(props) {

  let title = props.title || window.location.pathname.substring(11)
  return (
    <>
      <div className={StyleCss.header}>
        <h1 style={{ fontSize: '40px', textTransform: 'capitalize' }} >{title}</h1>
        <div className={StyleCss.Searchbarbx}>
          <div className={StyleCss.Searchbarbx2}>
            <div className={StyleCss.icon}>
              <svg width="13" height="14" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4.3" stroke="#1B2559" stroke-width="1.4" />
                <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#1B2559" stroke-width="1.4" stroke-linecap="round" />
              </svg>


            </div>
            <input
              className={StyleCss.search}
              type="search"
              placeholder="search"
            />
          </div>


          <i style={{ fontSize: '27px', marginRight: '-40px' }} class="fa-solid fa-bell"></i>
          <i style={{ fontSize: '27px' }} class="fa-solid fa-user"></i>

        </div>

      </div>



    </>
  );
}

export default Header