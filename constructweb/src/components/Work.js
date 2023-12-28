import React from "react";
import './Styles.css';
import img1 from "./imgs/image-47.jpg"
import img2 from "./imgs/image-48.jpg"
import img3 from "./imgs/image-0.jpg"
import img4 from "./imgs/image-1.jpg"
import img5 from "./imgs/image-2.jpg"
import img6 from "./imgs/image-3.jpg"
import img7 from "./imgs/image-4.jpg"
import img8 from "./imgs/image-5.jpg"


export const Work =()=>{
    const workss=[{imgs:img1,id:""},{imgs:img2,id:""},{imgs:img3,id:""},{imgs:img4,id:""},{imgs:img5,id:""},{imgs:img6,id:""},{imgs:img7,id:""},
    {imgs:img8,id:""}]
    return(
        
            <section id="sec-6">
                <div className="container">
                <div className="rowss" style={{padding:"10px"}}>
                        <div ><p style={{color:" rgba(0, 0, 0, 0.37)",fontWeight:"500"}}>LATEST PROJECTS GALLERY </p>
                        <h1 style={{fontSize:"50px"}}> Our Work</h1>
                        </div>
                        <div className="txaln lisnonmdsm">
                        <ul className="liss">
                            <li className="ls1">ALL</li>
                            <li className="ls2">CONSTRUCTION</li>
                            <li className="ls3">DESIGN</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"20px",padding:"30px",marginBottom:"50px"}}>
                        {
                            workss.map((val,i)=>{
                        return <div className="col-3 col-md-6 col-sm-12" key={i}>
                        <div className="hov" > <img src={val.imgs} width={"90%"}/>
                        </div>
                        </div>
                            })
                        }
                    </div>
                    {/* </div> */}
                </div>
            </section>
        
    )
}