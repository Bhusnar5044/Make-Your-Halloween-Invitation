import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Style from './Navbar.module.scss'
import Logo from '../../Assets/Images/creeplogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component{
    constructor(props){
        super(props);
        this.container = React.createRef();
        this.state = {
            toggle: false
        };
        this.toggleClick = this.toggleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    toggleClick(){
        this.setState({
            toggle: !this.state.toggle
        });
        console.log(this.state.toggle);
    }
    
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            toggle: false
          });
        }
      };

    render(){
        let liClass = this.state.toggle ? Style.responsive:'';
        return(
        <div className={Style.mainContainer} ref={this.container}>
            <div className={Style.submain+' '+liClass}>
            
                <NavLink 
                to="/"
                exact
                style={{ textDecoration: "none", color: "black" }}
                activeClassName={Style.logo+' '+Style.activelink}
                >
                <img src='https://media.giphy.com/media/28aGE5xerXkbK/giphy.gif' alt="Scary"/>
                </NavLink>
                {/* <a className={Style.nav+' '+Style.icon} onClick={this.toggleClick}>
                <FontAwesomeIcon icon="bars" />
                </a>
                
                <ul>
                    <li><NavLink
                            to="/"
                            exact
                            style={{ textDecoration: "none", color: "black" }}
                            activeClassName={Style.nav+' '+Style.activelink}
                        ><img src='https://media.giphy.com/media/1V17m8MgM0fEk/giphy.gif'/></NavLink>
                    </li>
                    <li><NavLink 
                        to='/cartPage' 
                        exact
                        style={{ textDecoration: "none", color: "black" }}
                        activeClassName={Style.nav+' '+Style.activelink}
                        ><FontAwesomeIcon icon="shopping-cart" />&nbsp;Cart
                        </NavLink>
                    </li>
                    <li><NavLink to='/SignInPage' exact
                        style={{ textDecoration: "none", color: "black" }}
                        activeClassName={Style.nav+' '+Style.activelink}>
                            <FontAwesomeIcon icon="user-lock" />&nbsp;SignIn
                        </NavLink>
                    </li>
                </ul> */}
            
           </div>
        </div>
        );
    }
}

export default Navbar