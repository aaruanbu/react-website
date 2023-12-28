import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import   "./Styles.css"
import  image1 from "./imgs/ylp.png"
import  image2 from "./imgs/hoz.png"
import  image3 from "./imgs/f.png"
import  image4 from "./imgs/gpng.png"

export default class Responsive extends Component {
  render() {
    
    var settings = {
      dots: true,
      infinite:false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
// const img1="./yelp.svg"

    var arrrimgs=[{
      imgss:image1,
      name:"Pamala",
      work:"Bathroom remodeling",
      contnt:"“Rhoncus netus tincidunt ispumn pharetra rutrum natoque, libero justo enim magnis sapien finibus quisque dis, habitant quam ipsum luctus nisi posuere.”"
    },{
      imgss:image2,
      name:"Tammara",
      work:"Kitchen remodeling",
      contnt:"“Feugiat condimentum lorem congue id dictum aenean nascetur varius tortor, euismod nec parturient ullamcorper inceptos bibendum pellentesque quisque.”"
    },{
      imgss:image3,
      name:"David J.",
      work:"Roofing",
      contnt:"“Vel volutpat dignissim diam viverra quis id, placerat et maecenas nulla nec nullam iaculis adipiscing felis, ac vivamus eleifend ridiculus massa auctor convallis.”"
    },{
      imgss:image4,
      name:"James B.",
      work:"Painting",
      contnt:"“Parturient hendrerit idiculus eleifend dictumst facilisi, varius etiam consequat tempor vivamus lorem suspendisse laoreet, ullamcorper sem volutpat orci.”"
    }]

    return (
      <div className="col-12">
        <div className="startt">
        <h5>SOME REVIEWS FROM OUR CLIENTS</h5>
        <h1> Testimonials </h1>
        </div>
        <Slider {...settings}>
                  
            {arrrimgs.map((value,i)=>{
              return <div className="col-12 psrl">
              <div className="borderss col-" key={i}>
                <div className="txtalgns">
                  <div style={{display:"flex",alignItems:"center"}}>
                  <img src={value.imgss} width={"15%"}/>
                  <div style={{marginLeft:"10px"}}>
                  <h3 className="" style={{marginRight:"40px"}}>{value.name}</h3>
                  <p>{value.work}</p>
                  </div>
                  </div>
                  <div>
                  </div>
                </div>
                <div className="pdt">
                <p>{value.contnt}</p>
                <p className="ptopss">⭐⭐⭐⭐⭐</p>
              </div>
              </div>
              </div>
            })}
        </Slider>
      </div>   );
  }
}