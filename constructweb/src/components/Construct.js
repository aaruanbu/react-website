import React from "react";
import {RiVerifiedBadgeFill} from 'react-icons/ri'
import { Work } from "./Work";

export const Construct=()=>{
    const ars=[{icn:<RiVerifiedBadgeFill className="clrs" />,cnt:"10 years of finishing projects on time and on budget"},
    {icn:<RiVerifiedBadgeFill className="clrs" />,cnt:"Easy to understand contracts"},
    {icn:<RiVerifiedBadgeFill className="clrs" />,cnt:"Knowledgeable project managers who help along the way"},
    {icn:<RiVerifiedBadgeFill className="clrs" />,cnt:"Modern design trends using high-quality materials"},
    {icn:<RiVerifiedBadgeFill className="clrs" />,cnt:"Long list of satisfied New York State clients"}]
    return(
        <div>
            <section id="sec-5" >
                {/* <div className="container"> */}
                <div className="posrel" style={{marginTop:"50px",marginBottom:"40px"}}>
                            <p className="dul">GENERAL CONTRACTORS IN NEW YORK</p>
                            <h1>Why Choose Us</h1>
                        </div>
                    <div className="row rss">
                        <div className="bcimgss col-9 colmdnon ">
                            </div>
                        <div className="col-5 col-md-12 col-sm-12 zindd">
                            <ul className="unor">
                                {
                                    ars.map((vl,i)=>{
                                        return <li key={i}>{vl.icn}{vl.cnt}</li>
                                    })
                                }
                            </ul>
                            <div className="contxcen"style={{textAlign:"center",marginTop:"25px"}}>
                            <a href="#" className="angtg">GET A FREE ESTIMATE </a>
                            </div>
                        </div>
                        
                        {/* </div> */}
                    </div>
            </section>
            <Work />
        </div>
    )
}