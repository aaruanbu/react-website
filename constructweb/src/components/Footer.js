import React, { Component } from "react";
import "./Styles.css"
import {BiSolidUpArrowAlt} from "react-icons/bi"
import img1 from "./imgs/f.png"
import img2 from "./imgs/t.png"
import img3 from "./imgs/pi.png"

export const Footer=class Footer extends Component{
    render(){
        const imgs=[img1,img2,img3]
        return(
            <div>
                <section id="Footer">
                    <div className="container">
                        <div className="row">
                            {/* <div > */}
                                <div style={{display:"flex", alignItems:"center",justifyContent:"space-around"}} className="col-6 col-md-12 col-sm-12" >
                                    <h1 className="cursr">PROFI</h1>
                                    {
                                        imgs.map((v,i)=>{
                                            return  <img src={v}  width={"35px"} className="cursr"/>
                                        })
                                    }
                                    </div>
                                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}} className="col-6 col-md-12 col-sm-12">
                                    <p className="cursr"style={{color:"rgba(138, 133, 133, 0.644)",fontSize:"40px",textAlign:"center"}}><BiSolidUpArrowAlt /></p>
                                    <p className="cursr"style={{color:"rgba(138, 133, 133, 0.644)"}}>PRIVACY POLICY</p>
                                    <p className="cursr"style={{color:"rgba(138, 133, 133, 0.644)"}}>TERMS & CONDITIONS</p>
                                    </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 