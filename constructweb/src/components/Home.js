import React, { Component } from "react";
import './Styles.css'
import './style.scss'
import {General} from "./General"
import {IoLocationSharp,IoShieldCheckmarkOutline} from 'react-icons/io5'
import {FaPhone} from 'react-icons/fa6'
import {BiSolidCheckShield} from 'react-icons/bi'
export const Home=class Home extends Component{
    
    render(){   
        const contrac=[{icn:<IoLocationSharp className="loca"/>,lcn:"OUR LOCATION",loc:"NEW YORK STATE"},
    {icn:<FaPhone className="loca"/>,lcn:"CONTACT PHONE",loc:"123-456-7890"},{icn:<IoLocationSharp className="loca"/>,lcn:"LICENSE NUMBER",loc:"# 706109"}]
    return(<div>
        <section id="sec-2">
            <div className="container">
                <div className="sec2cont">
                <h1>Contractors in New York</h1>
                </div>
                <p className="ptags">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                <p className="ptags">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <div className="txtcentr">
                    <a href="#" className="ange">GET A FREE ESTIMATE</a>
                </div>
                <div className="toppad">
                    <div className="row ross">
                    {
                        contrac.map((val,i)=>{
        return <div key={i} className=" col-md-4 col-sm-12">
                    {val.icn}
                <p className="styp">{val.lcn}</p>
                <p className="sty2">{val.loc}</p>
                </div>
                        })
                    }
                </div>
                </div>
                </div>
        </section>
        {/* <General /> */}
        </div>
    )
}
}
