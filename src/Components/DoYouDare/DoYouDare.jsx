import React from 'react'
import Style from './DoYouDare.module.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DoYouDare = () =>{
    return(
        <div>
        <section className={Style.dare}>
            <NavLink 
                    to="/"
                    exact
                    style={{ textDecoration: "none", color: "black" }}
                    activeClassName={Style.logo+' '+Style.activelink}
                    >
                    <img src='https://media.giphy.com/media/28aGE5xerXkbK/giphy.gif' alt="Scary"/>
            </NavLink>
            <h1> DO YOU DARE </h1>
            <NavLink to='/SignInPage' exact
                        style={{ textDecoration: "none", color:"white",padding:"2em 10px",fontSize:"15px",fontFamily:"Eater, cursive"}}
                        activeClassName={Style.SignIn+' '+Style.activelink}>
                            <FontAwesomeIcon icon="user-lock" />&nbsp;SignIn
            </NavLink>
            <NavLink 
                    to="/"
                    exact
                    style={{ textDecoration: "none", color: "black" }}
                    activeClassName={Style.logo+' '+Style.activelink}
                    >
                    <img src='https://media.giphy.com/media/28aGE5xerXkbK/giphy.gif' alt="Scary"/>
            </NavLink>
        </section>
    
        <section className={Style.dare2}>
            <div className={Style.drop}></div>
            <div className={Style.wave}></div>
        </section>
      </div>
    )
}

export default DoYouDare