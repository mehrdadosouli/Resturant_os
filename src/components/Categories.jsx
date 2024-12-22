import { useEffect } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import AOS from "aos";
export default function Categories({ Category }) {
useEffect(() => {
    AOS.init({
        once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  document.addEventListener('aos:up', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });
    const varCategory = [
        { name: 'Breakfast', color1: 'rgba(112, 130, 70, 0)', color2: 'rgba(112, 130, 70, 10%)', img: img1 },
        { name: 'Vegan', color1: 'rgba(108, 198, 63, 0)', color2: 'rgba(108, 198, 63, 10%)', img: img2 },
        { name: 'Meat', color1: 'rgba(204, 38, 27, 0)', color2: 'rgba(204, 38, 27, 10%)', img: img5 },
        { name: 'Dessert', color1: 'rgba(240, 158, 0, 0)', color2: 'rgba(240, 158, 0, 10%)', img: img4 },
        { name: 'Lunch', color1: 'rgba(0, 0, 0, 0)', color2: 'rgba(0, 0, 0, 10%)', img: img3 },
        { name: 'Chocolate', color1: 'rgba(0, 0, 0, 0)', color2: 'rgba(0, 0, 0, 5%)', img: img6 },
    ]
    return (
        <div className='px-16'>
            <div className='flex flex-wrap justify-between items-center mt-[9.3rem]' data-aos="fade-up" data-aos-anchor-placement="center-center">
                <h4 className='text-5xl leading-[3.6rem] text-black font-bold tracking-tight'>{Category}</h4>
                <span className='px-6 py-5 rounded-3xl bg-primary_blue_light text-2xl leading-5 font-semibold tracking-tight'>View All {Category}</span>
            </div>
            <div className='w-full flex flex-wrap gap-20 justify-between items-center mt-[8.1rem]' data-aos="fade-up">
                {
                    varCategory.map((item, index) => (
                        <div key={index} className={`w-[13.5rem] h-[9.5rem] relative flex flex-col items-center justify-end gap-10 rounded-[2rem]`} style={{ background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})` }}>
                            <img className='w-32 h-32 object-cover absolute top-[-2rem]' src={item.img} alt={item.name} />
                            <h5>{item.name}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
