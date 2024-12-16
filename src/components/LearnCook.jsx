import img1 from '../assets/cook.png'
export default function LearnCook() {
    return (
        <div className='flex md:flex-row flex-col-reverse gap-20 md:gap-0 md:items-center md:justify-between md:my-52 mt-20 px-16 '>
            <div className='flex flex-col items-start gap-10'>
                <p className="font-semibold md:text-5xl ">Everyone can be a
                    chef in their own kitchen</p>
                <p className="text-xl font-normal leading-10">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim  </p>
                <button className='font-semibold text-xl text-white bg-black rounded-3xl px-7 py-4'>Learn More</button>
            </div>
            <div>
                <img src={img1} alt="cook" />
            </div>
        </div>
    )
}
