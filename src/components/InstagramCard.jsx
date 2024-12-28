import { useState } from "react";
import Slider from "react-slick";
import img from '../assets/Official_Icon.png'
import img2 from '../assets/Oval.png'
import img3 from '../assets/More.png'
import img4 from '../assets/Rectangle1.png'
import Loading from "./Loading";

export default function InstagramCard({ dataInstagram, setDataInstagram }) {
    const [loading, setLoading] = useState(true);
    
    // Slider settings  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {  
                const updatedDataInstagram = [...dataInstagram];  
                updatedDataInstagram[current].currentSlide = current + 1; 
                setDataInstagram(updatedDataInstagram); 
        }
    };

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between items-center gap-5">
            {
                dataInstagram?.map(item => <div key={item.id} className='lg:max-w-[290px] flex flex-col gap-3'>
                    <div className='header flex justify-between items-center px-6 bg-white transform translate-y-2.5'>
                        <div className='flex justify-start items-center gap-3 py-2'>
                            <img className='w-12 h-12' src={img2} alt="" />
                            <div className='flex flex-col justify-start'>
                                <div className='flex'>
                                    <span className='font-semibold text-xl'>Foodieland.</span>
                                    <img className='w-5 h-5' src={img} alt="" />
                                </div>
                                <span className='font-normal text-base'>Tokyo, Japan</span>
                            </div>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className='body relative'>
                        <Slider {...settings} >
                            {
                                item.galery.map((img, index) =>
                                    <div key={item.id}>
                                        <img src={img} alt="" className="size-full object-cover" onLoad={() => setLoading(false)} />
                                    </div>)
                            }
                        </Slider>
                        <div className="absolute top-5 right-5 p-1 text-primary_Dark_Text bg-primary_Dark_background rounded-3xl">{`${item.currentSlide} / 3`} </div>
                    </div>
                    <div className='footer bg-white p-5'>
                        <div className="flex justify-between items-center">
                            <div className='flex justify-start items-center gap-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 transform -rotate-90">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 transform -rotate-45 -translate-y-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </div>
                            <div>
                                <button className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start items-center my-2">
                            <img src={img2} alt="" />
                            <p className="font-normal text-xl ml-5 my-2">Liked by craig_love and 44,686 others</p>
                        </div>
                        <span className="font-semibold text-lg">Foodieland. The vegetables dishes need to have certain vitamin for those spaneople</span>
                        <h5 className="font-normal text-sm text-primary_lighten mt-3">September 19</h5>
                    </div>
                </div>)
            }
        </div>
    )
}
