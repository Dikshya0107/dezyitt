import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';
 class Navbar extends React.Component{

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

     render(){
         
         return (
                <nav  className= "NavbarItems">
                    <img src ="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif" className="Navimg" />
                
                <div className ="menu-icon" onClick={this.handleClick}>
                    <i className= {this.state.clicked ?'fas fa-times':"fas fa-bars"}></i>
                </div>
                <ul className ={this.state.clicked? 'nav-menu active': "nav-menu"}>
                    {
                        MenuItems.map((item,index)=>{
                            return(
                                <li key ={index}>
                                    <a className = {item.cName} href ={item.url} target = {item.target}>{item.title}</a>
                                </li>
                            )
                        })
                }
                </ul>
                </nav>
         )
     }
 }
  export default Navbar;