import React from 'react'
import image1 from "../../assets/product/p-1.jpg";
import image2 from "../../assets/product/p-2.jpg";
import image3 from "../../assets/product/p-3.jpg";
import image4 from "../../assets/product/p-4.jpg";
import image5 from "../../assets/product/p-5.jpg";
import image6 from "../../assets/product/p-7.jpg";
import image7 from "../../assets/product/p-9.jpg";
import image8 from "../../assets/product/p-1.jpg";

const Productdata = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99.99",
        image: "image1",
        link: "/product/wireless-headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$199.99",
        image: "image2",
        link: "/product/smart-watch"
    },
    {
        id: 3,
        name: "Gaming Console",
        price: "$299.99",
        image: "image3",
        link: "/product/gaming-console"
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: "$49.99",
        image: "image4",
        link: "/product/bluetooth-speaker"
    },
    {
        id: 5,
        name: "4K Action Camera",
        price: "$149.99",
        image: "image5",
        link: "/product/4k-action-camera"
    },
    {
        id: 6,
        name: "VR Headset",
        price: "$399.99",
        image: "image6",
        link: "/product/vr-headset"
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: "$79.99",
        image: "image7",
        link: "/product/wireless-earbuds"
    }
    ,{
        id: 8,
        name: "Portable Charger",
        price: "$29.99",
        image: "image8",
        link: "/product/portable-charger"
    }
    
];
export const Product = () => {
  return (
    <div>
        
<div className="">

{/* heading */}
<div className="flex flex-col items-center justify-center text-center mb-6">
    <h2 className="text-3xl font-bold ">Featured Products</h2>
    <h4 className='text-gray-500'>explore now</h4>
</div>

    <div className="grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-8 xl:px-12">
            {Productdata.map((product,index) => (
                <div data-aos="fade-up" data-aos-duration={(index + 1) * 250} data-aos-delay="100" data-aos-once="false" key={product.id} className="relative rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center group">
                    <img src={eval(product.image)} alt={product.name} className="w-70 h-70 object-cover mb-4 group-hover:blur duration-300 ease-in-out" />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-500 mb-4">{product.price}</p>
                    {/* product.hover */}
                    <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition duration-300 ease-in-out '>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>

    </div>
</div>


    </div>
  )
}
