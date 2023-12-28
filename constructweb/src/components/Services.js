import { Component } from "react";
import im1 from "./imgs/image-18.jpg"
import im2 from "./imgs/image-19.jpg"
import im3 from "./imgs/image-20.jpg"
import im4 from "./imgs/image-21.jpg"
import im5 from "./imgs/image-22.jpg"
import im6 from "./imgs/image-23.jpg"
export const Services=class Service extends Component{
    render(){
        const ser=[{im:im1,modl:"Kitchen Remodeling",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
        {im:im2,modl:"Bathroom Remodeling",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
        {im:im3,modl:"Flooring",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
        {im:im6,modl:"Roofing",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
        {im:im4,modl:"Windows & Doors",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
{im:im5,modl:"Painting",lrm:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."}]
        return(<div>
            <section id="sec-4">
                <div className="container">
                    <div className="rowss">
                        <div><p style={{color:" rgba(0, 0, 0, 0.37)",fontWeight:"500"}}>WHAT WE DO THE BEST</p>
                        <h1 style={{fontSize:"50px"}}> Services</h1>
                        </div>
                        <div className="txaln">
                        <ul className="liss">
                            <li className="ls1">ALL</li>
                            <li className="ls2">CONSTRUCTION</li>
                            <li className="ls3">DESIGN</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mser" style={{margin:"60px"}}>
                            <div className="row clss">
                                {
                                    ser.map((vl,i)=>{
                                        return <div key={i} className="col-6 col-md-12 col-sm-12 ">
                                    <div className="pad flxx">
                                <img src={vl.im} width={"34%"} className="disnone-col"/>
                                <div className="padd ">
                                <h2 className="csm-s" style={{marginTop:"15px"}}>{vl.modl}</h2>
                                <p className="padd" style={{marginTop:"20px"}}>{vl.lrm}</p>
                                </div>
                                </div>
                            </div>
                            })
                            }
                            </div>
                        </div>
                        <div className="marg">
                            <a href="#" className="angtg">GET A FREE ESTIMATE</a>
                        </div>
                </div>
            </section>
        </div>)
    }
}