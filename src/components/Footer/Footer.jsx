import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram ,FaLocationArrow } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

export const Footer = () => {
    return (
        <div>
            <div className='bg-gray-800 text-gray-500 py-6 mt-8 px-4 lg:px-8 xl:px-12'>
                <div className='px-4 lg:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4'>
                    {/* first column */}
                    <div className='flex flex-col items-start justify-start gap-2'>
                        <h1 className='text-2xl font-bold text-white'>support</h1>
                        <a href="#" className='hover:text-white duration-200'>Help Center</a>
                        <a href="#" className='hover:text-white duration-200'>Contact Us</a>
                        <a href="#" className='hover:text-white duration-200'>Shipping Info</a>


                    </div>
                    {/* second coulmn */}

                    <div className='flex flex-col items-start justify-start gap-2'>
                        <h1 className='text-2xl font-bold text-white'>About</h1>
                        <a href="#" className='hover:text-white duration-200'>Our Story</a>
                        <a href="#" className='hover:text-white duration-200'>Careers</a>
                        <a href="#" className='hover:text-white duration-200'>Sustainability</a>


                    </div>
                    {/* third column */}
                    <div className='flex flex-col items-start justify-start gap-2'>
                        <h1 className='text-2xl font-bold text-white'>Contact</h1>
                        <p className='hover:text-white duration-200 cursor-pointer flex flex-row items-center gap-1'><FaLocationArrow/>123 E-Shop St, Tech City, TX 75001</p>
                        <p className='hover:text-white duration-200 cursor-pointer flex flex-row items-center gap-1'><MdOutlineMail />
Email:</p>
                    </div> 
                    </div>
                    <div className=' pt-4  items-center justify-center '>
                   
                    <div>
                        <div className='mt-2 flex justify-center items-center text-center'>
                            <p>Follow us:</p>
                            <a href="#" className='mx-2 hover:text-white duration-200 text-3xl'><FaFacebook /></a>
                            <a href="#" className='mx-2 hover:text-white duration-200 text-3xl'><FaTwitter /></a>
                            <a href="#" className='mx-2 hover:text-white duration-200 text-3xl'><FaInstagram /></a>
                        </div>
                         <div className='px-4 lg:px-8 xl:px-12 text-center
                '>
                       
                       
                         <p className='pt-3'>&copy; 2024 E-Shop. All rights reserved.</p>
                    </div>
                    </div>
                    </div>
                
            </div>
        </div>
    )
}
