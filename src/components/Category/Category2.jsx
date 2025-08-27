import React from 'react'
import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/gaming.png";
import image3 from "../../assets/category/macbook.png";
import image4 from "../../assets/category/smartwatch2-removebg-preview.png";
import image5 from "../../assets/category/speaker.png";
import image7 from "../../assets/category/vr.png";

export const Category2 = () => {
    return (
        <div className='py-8'>
            <div className='px-4 lg:px-8 xl:px-12'>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {/* first column */}
                    <div className='bg-gradient-to-br from-white/90 to-black/20 p-4 col-span-2 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-fil overflow-hidden group '>
                        <div className='flex flex-col items-start justify-items-start'>
                            <p className='font-bold text-2xl text-gray-500  '> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold'>playstation</h1>
                            <div className='pt-5'>
                                <button className='bg-primary rounded-xl px-6 py-2 text-lg text-white'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image2} alt="playstation" className='w-80 absolute top-0.5 right-0.5 group-hover:scale-110 duration-300 ease-in-out' />
                        </div>

                    </div>
                    {/* second column */}
                    <div className='bg-brandBlue p-4 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-fil overflow-hidden group '>
                        <div className='flex flex-col items-start justify-items-start'>
                            <p className='font-bold text-2xl text-gray-500  '> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold'>speaker</h1>
                            <div className='pt-5'>
                                <button className='bg-white rounded-xl px-6 py-2 text-lg text-brandBlue'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image5} alt="speaker" className='lg:w-60 absolute top-0 right-0 group-hover:scale-110 duration-300 ease-in-out' />
                        </div>

                    </div>
                    {/* third column */}

                    <div className='bg-brandGreen  p-4 rounded-4xl flex flex-row items-end hover:shadow-lg cursor-pointer h-[320px] relative w-fil overflow-hidden group '>
                        <div className='flex flex-col items-start justify-items-start'>
                            <p className='font-bold text-2xl text-gray-500  '> Enjoy </p>
                            <p className='text-4xl text-gray-300 font-bold'>With</p>
                            <h1 className='text-6xl text-black opacity-20 font-extrabold'>vr</h1>
                            <div className='pt-5'>
                                <button className='bg-white rounded-xl px-6 py-2 text-lg text-brandGreen'>Browse</button>
                            </div>

                        </div>
                        <div><img src={image7} alt="vr" className='w-80 absolute bottom-0 right-0 group-hover:scale-110 duration-300 ease-in-out' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
