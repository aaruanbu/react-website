import React, { Component } from "react";
import "./Styles.css"
import Carousel from "./Carousal"

export const Contact=class Contact extends Component{
    render(){
        return(
            <div>
                <Carousel />
                <section id="sec-7">
                    <div className="container">
                    <div><p style={{color:" rgba(0, 0, 0, 0.37)",fontWeight:"500"}}>LWE ANSWER WITHIN 24 HOURS </p>
                        <h1 style={{fontSize:"50px"}}> Contact Us</h1>
                        </div>
                        <div className="rosss">
                            {/* <div className="col-12"> */}
                            <div className="col-9 col-sm-12">
                            <form className="rosss" style={{marginTop:"30px"}}>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="firnme" className="flbl">First name</label>
                                        <input type="text" className="frstl" id="firnme"/>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="lstnme" className="flbl">Last name</label>
                                        <input type="text" className="frstl" id="lstnme" />
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="phone" className="flbl">Phone</label>
                                        <input type="text" className="frstl" id="phone" />
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="email" className="flbl">Email</label>
                                        <input type="text" className="frstl" id="email" />
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="service" className="flbl">Select the service</label>
                                        <select className="select" id="service">
                                            <option value="1">Kitchen Remodeling</option>
                                            <option value="2">Bathroom Remodeling</option>
                                            <option value="3">Roofing</option>
                                            <option value="4">Windows &Doors</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="frmgrp">
                                        <label for="code" className="flbl">Your zip code</label>
                                        <input type="text" className="frstl" id="code" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12">
                                    <div className="frmgrp msg">
                                        <label for="message" className="flbl">Message</label>
                                        <textarea id="message" className="frstl txtara" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-12  col-sm-12 flxxin">
                                    <div className="frmgrp frchk col-6 col-md-12 col-sm-12">
                                        <input type="checkbox" className="customcheckbox" id="exampleCheck2" checked="checked" />
                                        <label className="frchklbl" for="exampleCheck2">
                                            I've read and agree with the <a href="#" style={{color:'green'}}>Terms &Policy</a>
                                        </label>
                                    </div>
                                    <div className="frmgrp col-6 col-sm-12 col-md-12">
                                        <a className="angtg">Send message</a>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    {/* </div> */}
                    </div>
                </section>
            </div>
        )
    }
}