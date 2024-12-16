import img1 from '../assets/contact1.png'
import img2 from '../assets/contact2.png'
export default function ContactSetion() {
    return (
        <div className='relative py-40 flex flex-col justify-center items-center bg-primary_blue_light_100'>
            <div className='max-w-[620px] flex flex-col justify-center items-center gap-10 '>
                <h4 className='font-bold md:text-5xl'>Deliciousness to your inbox</h4>
                <p className='text-center mb-20'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='relative md:w-[480px] w-[300px] h-[80px] bg-white rounded-3xl overflow-hidden'>
                    <input className='size-full pl-5' type="text" placeholder="Your email address..." />
                    <button className='absolute right-0 transform translate-y-1/2 text-white mr-5 bg-black px-6 py-4 rounded-3xl'>Subscribe</button>
                </div>
            </div>
            <img className='absolute bottom-0 right-0 w-1/4' src={img1} alt="" />
            <img className='absolute bottom-0 left-0 w-1/4' src={img2} alt="" />
        </div>
    )
}
