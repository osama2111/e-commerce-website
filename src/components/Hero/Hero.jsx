import React from 'react'
import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png";
import image2 from "../../assets/hero/laptop.png";
import image3 from "../../assets/hero/watch.png";
export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    fade: true,
  }
  const HeroData = [
    { id: 1, image: image1, subtitle: "beats solo", title: "wirless", title2: "headphone", cta: "Shop Now" },
    { id: 2, image: image2, subtitle: "beats solo", title: "touchscreen", title2: "laptop", cta: "Grab Yours" },
    { id: 3, image: image3, subtitle: "beats solo", title: "smart", title2: "watch", cta: "Explore Now" }
  ];

  return (
    <div className="w-full px-4 lg:px-8 xl:px-12">
      {/* hero section */}
      <div className="hero-bg-color rounded-lg shadow-lg overflow-hidden mx-auto" >

        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id} className="relative pt-10 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full px-4 sm:px-8 lg:px-12">
                {/* text */}
                <div className="flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 lg:pt-16 items-start space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 z-10 order-2 sm:order-1 lg:order-1 sm:items-center">
                  {/* Subtitle */}
                  <div className="w-full text-center sm:text-center lg:text-left">
                    <h2 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 opacity-80 dark:text-gray-300 ">
                      {data.subtitle}
                    </h2>
                  </div>
 
                  {/* Main Title */}
                  <div className="w-full text-center sm:text-center lg:text-left">
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-gray-800 leading-tight dark:text-white">
                      {data.title}
                    </h1>
                  </div>
 
                  {/* Secondary Title*/}
                  <div className="w-full text-center sm:text-center lg:text-left">
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white uppercase leading-none tracking-tight drop-shadow-2xl dark:text-gray-700">
                      {data.title2}
                    </h1>
                  </div>
 
                  {/* CTA Button */}
                  <div className="w-full pt-4 text-center sm:text-center lg:text-left">
                    <button data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="bg-primary hover:scale-110 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      {data.cta}
                    </button>
                  </div>
                </div>

                {/* image */}
                <div className="flex items-center justify-center h-full relative z-20 order-1 sm:order-2 lg:order-2">
                  <img data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                    src={data.image}
                    alt={data.subtitle}
                    className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl "
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}


