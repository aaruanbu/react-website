import React from "react";
import "./Styles.css"
import {FaLocationDot} from 'react-icons/fa6'
import {BsTelephoneFill} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
import {HiOutlineAtSymbol} from 'react-icons/hi'

export const Location=()=>{
    const locatn=[{icn:<FaLocationDot />,cnt:"BY APPOINTMENT ONLY",adr:"Müllerstrasse 57, 8004",ln:"Zürich, Switzerland"},
{icn:<FaLocationDot />,ctn:"MOBILE PHONE",adr:"+41 79 123 45 67"},{icn:<BiTime />,ctn:"WORKING HOURS",adr:"11:00 AM - 9:00 PM"},
{icn:<HiOutlineAtSymbol />,ctn:"EMAIL",adr:"profi@mail.com"}]
    return(
        <div>
            <section id="sec-7">
                <div className="container">
                    <div className="row">
                        {
                            locatn.map((vl,i)=>{
                                return <div className="col-3 col-sm-12 col-md-12 paddng">
                                <p className="clricn">{vl.icn}</p>
                                <p className="fntss"> {vl.ctn}</p>
                                <h4 >{vl.adr}</h4>
                                <h4>{vl.ln}</h4>
                            </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}