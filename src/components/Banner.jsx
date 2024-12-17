import Slider from "react-slick";
import img1 from '../assets/img1.jpg';
import imgbanner from '../assets/imgbanner.png';
import styles from '../styles/banner.module.css'
import InfoTemplate from "./InfoTemplate";
import { useState } from "react";
import Loading from "./Loading";
function Banner() {
  const [loading,setLoading]=useState(true)
  const data = [
    { id: 1, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, facere molestias ipsam modi, nostrum impedit nobis omnis nam quos, culpa neque enim? Vero officiis laborum aperiam! Ipsum assumenda maiores debitis?' },
    { id: 2, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, facere molestias ipsam modi, nostrum impedit nobis omnis nam quos, culpa neque enim? Vero officiis laborum aperiam! Ipsum assumenda maiores debitis?' },
    { id: 3, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, facere molestias ipsam modi, nostrum impedit nobis omnis nam quos, culpa neque enim? Vero officiis laborum aperiam! Ipsum assumenda maiores debitis?' },
    { id: 4, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, facere molestias ipsam modi, nostrum impedit nobis omnis nam quos, culpa neque enim? Vero officiis laborum aperiam! Ipsum assumenda maiores debitis?' },
  ]
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    responsive: [  
      {  
        breakpoint: 768, 
        settings: {  
          centerMode: false,     
        }  
      }  
    ] 
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="overflow-hidden">
        {
          data.map(item =>
            <div key={item.id} className={`${styles.banner} px-5`}>
              <div className="w-1/2 bg-primary_blue_light_100 flex flex-col justify-between items-start gap-2 rounded-l-3xl md:p-10 p-5">
                <div className="md:w-60 md:h-20 w-40 h-14 mb-3 bg-white rounded-[30px] flex justify-center items-center gap-5 bg-primary_bg_btn">
                    <img className="md:w-8 w-6 h-auto" src={imgbanner} alt="" onLoad={() => setLoading(false)}  />
                  <span className="md:text-xl text-base">Hot Recipes</span>
                </div>
                <div className="lg:text-6xl md:text-4xl font-morabbaBold lg:leading-[77px] md:leading-[44px]">Spicy delicious chicken wings</div>
                <div className="text-xl leading-7 font-normal"></div>
                <InfoTemplate color={true} item={item} dir="col"/>
                <div className="md:w-auto w-full flex justify-center items-center lg:text-2xl lg:gap-5 lg:px-6 lg:py-5 md:text-xl md:px-4 md:py-3 md:gap-3 gap-2 mt-2 rounded-3xl text-white bg-black">
                  <span className="md:text-3xl text-lg py-4">View Recipes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                </div>
              </div>
              <div className="w-1/2">
              {
                    loading ? 
                    <Loading /> :
                <img className="size-full rounded-r-3xl object-cover" src={img1} alt="" />
              }
              </div>
            </div>
          )
        }
      </Slider>
    </div>
  )
}

export default Banner