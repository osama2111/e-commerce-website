import React from 'react'
import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/gaming.png";
import image3 from "../../assets/category/macbook.png";
import image4 from "../../assets/category/smartwatch2-removebg-preview.png";
import image5 from "../../assets/category/speaker.png";
import image6 from "../../assets/category/watch.png";
import image7 from "../../assets/category/vr.png";



export const Category = () => {
    return (
        <div className='py-8'>
            <div className='px-4 lg:px-8 xl:px-12'>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {/* first column */}
                    <div className='bg-gradient-to-br from-black/90 to-black/70 p-4 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-full overflow-hidden group'>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='font-bold text-2xl text-gray-500'> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold dark:text-gray-500'>Earphone</h1>
                            <div className='pt-5'>
                                <button className='bg-primary rounded-xl px-6 py-2 text-lg text-white'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image1} alt="earphone" className='w-80 absolute top-0 right-0 group-hover:scale-110 duration-300 ease-in-out' />
</div>
                        
                    </div>
                    {/* second column */}
                    <div className='bg-brandYellow p-4 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-full overflow-hidden group'>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='font-bold text-2xl text-gray-500'> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold'>smartwatch</h1>
                            <div className='pt-5'>
                                <button className='bg-white rounded-xl px-6 py-2 text-lg text-brandYellow'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image6} alt="smartwatch" className='lg:w-80 absolute top-0 right-0 group-hover:scale-110 duration-300 ease-in-out translate-x-1/4' />
</div>
                        
                    </div>
                    {/* third column */}
            
                    <div className='bg-primary col-span-2 p-4 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-full overflow-hidden group'>
                        <div className='flex flex-col items-start justify-start'>
                            <p className='font-bold text-2xl text-gray-500'> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold'>laptop</h1>
                            <div className='pt-5'>
                                <button className='bg-white rounded-xl px-6 py-2 text-lg text-primary'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image3} alt="laptop" className='w-80 absolute top-0 right-0 group-hover:scale-110 duration-300 ease-in-out' />
</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
