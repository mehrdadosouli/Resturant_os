import React from 'react'

function InfoTemplate({ color, item, dir }) {

    return (
        <div className="flex flex-col space-y-5">
            <span className="text-black lg:text-2xl font-semibold lg:leading-8 md:text-xl md:leading-6">{item?.name}</span>
            <div className={`flex ${dir ? 'flex-col' : 'flex-row'} justify-between items-center  gap-3 text-base font-semibold leading-8`}>
                <div className={`md:w-auto w-full flex justify-center items-center gap-3 md:px-4 md:py-4 px-1 py-2 ${color && 'bg-primary_bg_btn'} rounded-3xl`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-6 size-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>
                    <span className='text-2xl font-medium'>30 Minutes</span>
                </div>
                <div className={`md:w-auto w-full flex justify-center items-center gap-3 md:px-4 md:py-4 px-1 py-2 ${color && 'bg-primary_bg_btn'} rounded-3xl`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="md:size-6 size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                    <span className='text-2xl font-medium '>Chicken</span>
                </div>
            </div>
        </div>
    )
}

export default InfoTemplate