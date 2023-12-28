import React from "react";
import "./Styles.css"
import {AiFillStar} from'react-icons/ai'
import {BsStarHalf} from'react-icons/bs'
import img1 from "./imgs/ylp.png"
import g from "./imgs/gpng.png"
import ho from "./imgs/hoz.png"
import f from "./imgs/f.png"
export const General=()=>{
    const genrl=[{pic:img1,ylp:"4.5 STARTS ON YELP",strs:<AiFillStar />,str1:<AiFillStar />,str2:<AiFillStar />,str3:<AiFillStar />,str4:<BsStarHalf />},
    {pic:g,ylp:"5 STARTS ON YELP",strs:<AiFillStar />,str1:<AiFillStar />,str2:<AiFillStar />,str3:<AiFillStar />,str4:<AiFillStar />},
    {pic:ho,ylp:"5 STARTS ON YELP",strs:<AiFillStar />,str1:<AiFillStar />,str2:<AiFillStar />,str3:<AiFillStar />,str4:<AiFillStar />},
    {pic:f,ylp:"4.7 STARTS ON YELP",strs:<AiFillStar />,str1:<AiFillStar />,str2:<AiFillStar />,str3:<AiFillStar />,str4:<BsStarHalf />}]
    return(
        <div>
            <section id="sec-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wdth ">
                            <div className="hd">
                                <h6 className="hdng">GENERAL CONTRACTORS IN NEW YORK</h6>
                                <h1 className="hd1">PROFI Contractors</h1>
                            </div>
                            <div className="contt">
                                <p className="par">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show.</p>
                            </div>
                            <div className="col-12" style={{marginTop:"55px"}}>
                                    
                                <div className="row">
                                        {genrl.map((vl,i)=>{
                                        return <div className="col-3 col-md-6 col-sm-12 cl-mr"key={i} style={{ marginTop:"10px"}}>
                                        <div>
                                            <img src={vl.pic} width={"25%"}/>
                                        </div>
                                        <div style={{textAlign:"center", marginTop:"20px"}}>
                                        <p className="ylp">{vl.ylp}</p>
                                        <p className="strss">{vl.strs}{vl.str1}{vl.str2}{vl.str3}{vl.str4}</p>
                                        </div>
                                        </div>
                                        
                                        })
                                        }
                                    </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </section>
        </div>
    )
}