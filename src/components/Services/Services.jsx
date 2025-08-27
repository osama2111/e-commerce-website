import React from 'react'
import { FaCarSide, FaCheckCircle, FaWallet, FaHeadset } from 'react-icons/fa'
export const Services = () => {
    return (
        <div>
            <div className='  '>
                <div className='grid grid-cols-2 gap-4  px-4 lg:px-8 xl:px-12 md:grid-cols-4   '>



                    {/* first serv */}
                    <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 sm:gap-3 md:gap-4 p-4  '>
                        <div className='text-center flex-shrink-0'>
                            <FaCarSide className='text-4xl md:text-5xl text-primary' />
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-lg'>Free Shipping</h1>
                            <p className='text-gray-500 text-sm md:text-base'>Free shipping on all orders </p>
                        </div>
                    </div>
                    {/* second serv */}
                    <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 sm:gap-3 md:gap-4 p-4 '>
                        <div className='text-center flex-shrink-0'>
                            <FaCheckCircle className='text-4xl md:text-5xl text-primary' />
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-lg'>Quality Guarantee</h1>
                            <p className='text-gray-500 text-sm md:text-base'>100% quality products </p>
                        </div>
                    </div>
                    {/* third serv */}
                    <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 sm:gap-3 md:gap-4 p-4 '>
                        <div className='text-center flex-shrink-0'>
                            <FaWallet className='text-4xl md:text-5xl text-primary' />
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-lg'>Secure Payment</h1>
                            <p className='text-gray-500 text-sm md:text-base'>100% secure payment </p>
                        </div>
                    </div>
                    {/* fourth serv */}
                    <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 sm:gap-3 md:gap-4 p-4 '>
                        <div className='text-center flex-shrink-0'>
                            <FaHeadset className='text-4xl md:text-5xl text-primary' />
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-lg'>24/7 Support</h1>
                            <p className='text-gray-500 text-sm md:text-base'>Free shipping on all orders </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
