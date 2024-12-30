import { useState, useEffect } from "react";  
import Slider from "react-slick";  
import img from '../assets/Official_Icon.png';  
import img2 from '../assets/Oval.png';  
import img3 from '../assets/More.png';  
import img4 from '../assets/Rectangle1.png';  
import Loading from "./Loading";  

export default function InstagramCard({ dataInstagram, setDataInstagram }) {  
    // Slider settings  
    const settings = {  
        dots: true,  
        infinite: true,  
        speed: 500,  
        slidesToShow: 1,  
        slidesToScroll: 1,
    };  

    const handleSlideChange = (nextIndex, item) => {  
        setDataInstagram(prevData=>{
            const updateData = prevData.map(dataItem=>{
                if(dataItem.id === item.id){
                    return {...dataItem , currentSlide : nextIndex + 1 }
                }
                return dataItem
            })
            return updateData
        }) 
    };  

    return (  
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"> 
            {  
                dataInstagram?.map(item => (  
                    <div key={item.id} className='lg:max-w-[290px] flex flex-col mx-auto gap-3'>  
                        <div className='header flex justify-between items-center px-6 bg-white transform translate-y-2.5'>  
                            <div className='flex justify-start items-center gap-3 py-2'>  
                                <img className='w-12 h-12' src={img2} alt="User avatar" />  
                                <div className='flex flex-col justify-start'>  
                                    <div className='flex'>  
                                        <span className='font-semibold text-xl'>Foodieland.</span>  
                                        <img className='w-5 h-5' src={img} alt="Verified badge" />  
                                    </div>  
                                    <span className='font-normal text-base'>Tokyo, Japan</span>  
                                </div>  
                            </div>  
                            <div>  
                                <img src={img3} alt="More options" />  
                            </div>  
                        </div>  
                        <div className='body relative'>  
                            <Slider {...settings} beforeChange={(current, next) => handleSlideChange(next, item)}>  
                                {  
                                    item.galery.map((img, index) => (  
                                        <div key={index}>  
                                            <img src={img} alt={`Gallery image ${index + 1}`} className="size-full object-cover" />  
                                        </div>  
                                    ))  
                                }  
                            </Slider>  
                            <div className="absolute top-5 right-5 p-1 text-primary_Dark_Text bg-primary_Dark_background rounded-3xl">{`${item.currentSlide} / ${item.galery.length}`} </div>  
                        </div>  
                        <div className='footer bg-white p-5'>   
                            <div className="flex justify-start items-center mt-10 mb-5">  
                                <img src={img2} alt="User avatar" />  
                                <p className="font-normal text-xl ml-5 my-2">Liked by {item.likeBy} and {item.numberLike} others</p>  
                            </div>  
                            <span className="font-semibold text-lg">{item.txtPost}</span>  
                            <h5 className="font-normal text-sm text-primary_lighten mt-3">{item.date}</h5>  
                        </div>  
                    </div>  
                ))  
            }  
        </div>  
    );  
}