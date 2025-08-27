import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { DarkMode } from './DarkMode';


const MenuLinks = [
  { id: 1, name: "home", link: "/#" },
  { id: 2, name: "shop", link: "/#shop" },
  { id: 3, name: "about", link: "/#about" },
  { id: 4, name: "blogs", link: "/#blogs" }
]
const DropLinks = [
  { id: 1, name: "bestseller", link: "/#link1" },
  { id: 2, name: "trending", link: "/#link  2" },
  { id: 3, name: "recently added", link: "/#link  3" }]

export const Navbar = () => {
  return (
    <div className="light:bg-white dark:bg-gray-900 dark:text-white">
      <div className="w-full px-4 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between py-4 w-full">
          {/* left side */}
          <div className="flex items-center gap-4 flex-1">
            {/* Logo */}
            <div>
              <h1 className="text-primary font-semibold uppercase tracking-widest text-2xl sm:text-3xl">
                eshop
              </h1>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <ul className="flex items-center justify-items-start gap-4">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  <li className='relative group cursor-pointer'>
                    <a href="#quicklinks" className='px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white flex items-center whitespace-nowrap'>
                      quick links
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </a>
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white dark:bg-gray-900 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-10">
                      <ul>
                        {DropLinks.map((data, index) => (
                          <li key={index} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <a
                              href={data.link}
                              className="block w-full text-gray-500 hover:text-primary dark:hover:text-primary"
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spacer for more distance */}
          <div className="flex-1"></div>

          {/* right side */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Search */}
            <div className="group relative hidden lg:block">
              {/* الايقونة ثابتة */}
              <CiSearch className="text-2xl text-gray-500 group-hover:text-black dark:group-hover:text-white cursor-pointer" />

              {/* input يظهر عند الهوفر */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar w-[250px] pl-4 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            {/* Cart Icon */}
            <button>
              <FaShoppingCart className="text-2xl text-gray-500 hover:text-black dark:hover:text-white cursor-pointer" />
            </button>

            {/* dark mode button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

