import React, { Component } from 'react';
import './why_us.css';

class Why_us extends React.Component {
    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    width: "235px",
                    height: " 3px",
                    borderRadius:"5px",
                    transition: "width 3s",
                   
                }}
            />
        );
        return (
            <section className="sec4" >
              <a id ="movetowhy_us"></a>
                <div className="div_1">
                    
                    <div className="why_us" >
                        <h4>Why Dezy IT ?</h4>
                    </div>
        

                    <div className="div_2">

                        <div className="div_3" style={{
                            boxSizing: "content-box",
                            height: "332px", width: "308px"
                        }}>
                            <div style={{
                                marginBottom: "12px", boxSizing: "content-box",
                                height: "33px", width: "308px"
                            }}>
                                <h2 className="font_2" >Collaboration</h2>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div style={{ padding: "20px 0 0 0" }}>
                                <p className="p_text">The product development journey can become a linear process where there is very minimal interaction between the product team and all the other stakeholders, including the marketers, the sales team and customer service. Dezy It, brings in a collaborative space for your team to leverage design thinking and work together and participate in the ideation process, sharing valuable insights which would shape the product and its features. It's a process which truly gets your whole team invested! </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://static.wixstatic.com/media/ec9816_d3949d97e43843b8a292ffe04eacce85~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" />
                        </div>
                    </div>

                    <div className="div_2">
                        <div style ={{marginLeft: "-18%" }}>
                            <img src="https://static.wixstatic.com/media/ec9816_02665f5bd8044684b66a011b3c3bd8ca~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp "/>
                        </div>
                        <div className="div_3" style={{
                            boxSizing: "content-box",
                            height: "332px", width: "308px"
                        }}>
                            <div style={{
                                marginBottom: "10px", boxSizing: "content-box",
                                height: "33px", width: "308px"
                            }}>
                                <h2 className="font_2" >Creativity</h2>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div style={{ padding: "10px 0 0 0" }}>
                                <p className="p_text">Design Sprints are a great way to quickly innovate. A structured agile process to streamline your innovation and come up with multiple creative ideas using the Crazy-8 framework. It boosts your morale and provokes you to think out of the box. Now, with a ton of ideas, the Impact vs Feasibility analysis is a simple yet effective criteria, to shortlist the winning ides and most importantly validate them with real users. </p>
                            </div>
                        </div>
                        </div>

                    
                    <div className="div_2">

                        <div className="div_3" style={{
                            boxSizing: "content-box",
                            height: "332px", width: "308px"
                        }}>
                            <div style={{
                                marginBottom: "12px", boxSizing: "content-box",
                                height: "33px", width: "308px"
                            }}>
                                <h2 className="font_2" >Empathy</h2>
                            </div>
                            
                            <div style ={{height: "5px", width : "235px"}}>
                            <hr />
                            </div>
                            <div style={{ padding: "20px 0 0 0" }}>
                                <p className="p_text">The first rule of design thinking is to keep your users in the centre and under a spotlight.
                                    All great ideas arrive from devastating problems. The design sprint focuses on getting each and every team member to be able to empathise and understand the user, map their journeys and identify their pain points. You have to truly step into the shoes of your users to understand their psychology and experience of what they feel and think; while using your product or service. </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://static.wixstatic.com/media/ec9816_2f2c8bead30544a89198bb3d605d232a~mv2.png/v1/fill/w_600,h_450,al_c,q_95/Design%20Sprint%20-%20Design%20Thinking%20-%20Graphi.webp" />
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
export default Why_us;
