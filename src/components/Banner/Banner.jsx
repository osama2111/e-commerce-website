import React from 'react'
import image1 from "../../assets/hero/headphone.png";
const Bannerdata = [
    {
        id: 1,
        title: "Black Friday Deal!",
        date: 'Nov 24 - Nov 27',
        offer: "Up to 70% OFF",
        desc: "Hurry up! Get up to 70% OFF on selected products this Black Friday. Don’t miss the chance!",
        image: image1,
        link: "/shop/black-friday"}
];
export const Banner = () => {
  return (
    <div className='py-8 flex justify-center items-center min-h-[500px] px-4 lg:px-8 xl:px-12 '>
<div className='bg-primary rounded-3xl px-4 lg:px-8 xl:px-12 space-y-6 '>
    {Bannerdata.map((banner) => (
        <div key={banner.id} className=' grid grid-cols-1  md:grid-cols-3 gap-6 lg:gap-12 items-center justify-center '>
            <div className='flex flex-col items-start justify-center gap-1 text-white pt-10 lg:pt-0'>
                <p data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" className='font-black'>{banner.offer}</p>
                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" className='text-4xl font-bold'>{banner.title}</h1>
                <p data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" className=''>{banner.date}</p>
            
            </div>
            
            <div className='flex justify-center p-10 lg:p-2'> 
                <img data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" src={banner.image} alt={banner.title} className='w-70 scale-150 ' />
            </div>
            <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="false" className='flex flex-col items-start justify-center gap-4 text-white pb-10 lg:pb-0'>
                <h1 className='text-4xl font-bold '>{banner.title}</h1>
                <p className=''>{banner.desc}</p>
                <button className='bg-white text-primary px-6 py-2 rounded-lg hover:bg-primaryDark transition'>Shop Now</button>
            </div>
        </div>
    ))}

</div>



    </div>
  )
}
