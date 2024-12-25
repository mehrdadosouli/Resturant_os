import InfoTemplate from "./InfoTemplate";
import heart from '../assets/Heart.png'
import heart2 from '../assets/Heart2.png'
import Loading from "./Loading";
import { useEffect, useState } from "react";
export default function Card({ data, clickHandler, bg, coll }) {
    console.log(data);
    
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(false)
    },[])

    return (
        <div className={`grid ${coll?.length ? 'lg:grid-cols-3 sm:grid-cols-2' : 'lg:grid-cols-4 sm:grid-cols-3'} grid-cols-1 gap-5`}>
            {
                data?.map(item => (
                    <div key={item.id} className={`h-[45rem] p-5 flex flex-col items-start gap-8 rounded-2xl ${bg && 'bg-gradient-to-b from-primary_blue_light_0 to-primary_blue_light_100'}`}>
                        {
                            loading ?
                                <Loading /> :
                                <div className={`size-full bg-cover bg-center rounded-2xl relative`} data-aos="flip-right"
                                    style={{ backgroundImage: `url(${item.img})` }}>
                                    <button className="absolute flex justify-center items-center w-14 h-14 top-5 right-7 bg-white rounded-full" onClick={() => clickHandler(item.id)}>
                                        {
                                            item.like ? <img src={heart} alt="" /> :
                                                <img src={heart2} alt="" />
                                        }
                                    </button>
                                </div>
                        }
                        {
                            !item.width && <InfoTemplate item={item} />
                        }
                    </div>
                ))
            }
        </div>
    )
}
