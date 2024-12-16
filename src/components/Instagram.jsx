import InstagramCard from "./InstagramCard";
import img from '../assets/Official_Icon.png'
import img2 from '../assets/Oval.png'
import img3 from '../assets/More.png'
import img4 from '../assets/Rectangle1.png'
import img5 from '../assets/Rectangle2.png'
import img6 from '../assets/Rectangle3.png'
import img7 from '../assets/Rectangle4.png'
import { useState } from "react";
export default function Instagram() {
  const [dataInstagram,setDataInstagram]=useState([
    {id:1,galery:[img4,img4,img4],likeBy:'craig_love',numberLike:'44,686',txtPost:'Foodieland. The vegetables dishes need to have certain vitamin for those spaneople',date:'September 19',currentSlide:'1'},
    {id:2,galery:[img5,img5,img5],likeBy:'craig_love',numberLike:'44,686',txtPost:'Foodieland. The vegetables dishes need to have certain vitamin for those spaneople',date:'September 19',currentSlide:'1'},
    {id:3,galery:[img6,img6,img6],likeBy:'craig_love',numberLike:'44,686',txtPost:'Foodieland. The vegetables dishes need to have certain vitamin for those spaneople',date:'September 19',currentSlide:'1'},
    {id:4,galery:[img7,img7,img7],likeBy:'craig_love',numberLike:'44,686',txtPost:'Foodieland. The vegetables dishes need to have certain vitamin for those spaneople',date:'September 19',currentSlide:'1'},
  ])
  return (
    <div className="px-16 py-52 bg-gradient-to-b from-primary_blue_light_0 to-primary_blue_light_100 relative">
        <div className="max-w-[840px] mx-auto flex flex-col justify-center items-center gap-10 mb-48">
            <h1 className="font-semibold text-5xl text-center">Check out @foodieland on Instagram</h1>
            <p className="font-normal text-lg text-center">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <InstagramCard dataInstagram={dataInstagram} setDataInstagram={setDataInstagram} />
        <button className='font-semibold text-xl text-white bg-black rounded-3xl px-7 py-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-10'>Visit Our Instagram</button>
    </div>
  )
}
