import React from "react";
import './Styles.css'
import { FaBars } from "react-icons/fa";
import { Home } from "./Home";
export const Nav=()=>{
    const ulss=["ABOUT","SERVICES","WHY CHOOSE US","OUR WORK","TESTIMINALS","CONTACT"]
    return(
        <div>
            <div>
            <section className="sec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-sm-6">
                            <div className="prof">
                <h1 className="cursr">PROFI</h1>
                </div>
                </div>
                <div className="col-8 col-sm-none sss">
                    <ul className="ulnon ulsss">
                        {
                            ulss.map((val,i)=>{
                                return <li key={i}>{val}</li>
                            })
                        }
                    </ul>
                </div>
                        <div className="blk col-sm-6 col-md-6">
                            <span className="navico">
                        <FaBars />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            {/* <Home /> */}
        </div>
    )
}