import React from "react";
import "./CardUI.css";

const Card = (props) => {
    return (
        <div className= "card text-center" style ={{width: "300px"}} >
            <div  className = "overflow">
                <img src = "https://static.wixstatic.com/media/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.jpg/v1/fill/w_365,h_205,fp_0.50_0.50,q_90/f5b934_eafc2af0a60843368d025c6cc41ba074~mv2.webp" alt= "img1" className="card-img-top"/>
            </div>
            <div className = "card-body text-dark">
            <div style ={{color:"#808080" ,fontSize: "10px", display: "flex"}}>
            <ul >
                <li style ={{display:"inline" , listStyleType:"circle",paddingLeft : "5px"}}>2 hours ago</li>
                
                <li style ={{display:"inline",listStyleType:"circle",paddingLeft : "5px"}}>3mins</li>
                </ul>
            </div>
            <h4 className="card-title" style={{fontSize:"18px"}}>Role of Product Management in Design Thinking</h4> 
                <a className ="card-text text-secondary" href="https://www.dezyit.com/post/role-of-product-management-in-design-thinking" style={{textDecoration:"none", fontSize:"14px"}}>
                Design thinking is an integral part of product development and management. Design thinking.......
                </a>
            </div>

        </div>
    );
}

export default Card;