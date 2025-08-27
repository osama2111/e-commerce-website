import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Category } from './components/Category/Category.jsx';
import { Category2 } from './components/Category/Category2.jsx';
import { Services } from './components/Services/Services.jsx';
import { Banner } from './components/Banner/Banner.jsx';
import { Product } from  './components/Product/Product.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Popup } from './components/Popup/Popup.jsx';
 import aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  React.useEffect(() => {
    aos.init({ duration: 2000,
       easing: 'ease-in-out', delay: 100 , offset: 50
     });
     aos.refresh();
  }, []);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner />
      <Product/>
      <Footer />
      <Popup orderpopup={true}setorderpopup={true} />
    </div>
  )
}
export default App