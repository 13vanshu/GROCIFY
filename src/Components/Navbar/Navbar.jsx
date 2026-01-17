import React, { useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { navMenu } from '../../Data/data';


const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='bg-white fixed:right-0 top-0 left-0 '>
            <nav className=' max-w-300 mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>

                {/* Logo */}
                <a href='/' className='text-4xl font-semibold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>cify
                </a>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-x-13 hidden">
                    {navMenu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`font-semibold tracking-wider ${item.active
                                        ? "text-orange-500"
                                        : "text-zinc-800 hover:text-orange-500"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* NavAction */}
                <div className='flex items-center gap-x-5'>
                    {/* Input Feild */}
                    <div className='md:flex p-1 border-2 border-orange-500 rounded-4xl hidden'>
                        <input type="text"
                            className='flex-1 h-[6vh] px-3 focus:outline-none'
                            name="text"
                            id="text"
                            placeholder='Search...'
                            autoComplete='off' />
                        <button className='bg-linear-to-b from-red-600 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-1xl'>
                            <IoSearch />
                        </button>
                    </div>
                    <a href='/' className='text-zinc-800 text-3xl'>
                        <IoMdHeart />
                    </a>
                    <a href='/' className='text-zinc-800 text-3xl'>
                        <HiMiniShoppingBag />
                    </a>

                    {/* Hamburger */}
                    <button
  type="button"
  onClick={toggleMenu}
  className="text-zinc-800 text-3xl md:hidden"
>
  <TbMenu2 />
</button>

                </div>

                {/* Mobile Menu */}
                <ul className={`md:hidden items-center gap-y-12 flex flex-col bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 absolute top-30 -left-full transform -translate-x-1/2  transition-all duration-500 ${showMenu ? 'left-1/2' :" "}`}>
                    {navMenu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`font-semibold tracking-wider ${item.active
                                        ? "text-orange-500"
                                        : "text-zinc-800 hover:text-orange-500"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className='md:hidden p-1 border-2 border-orange-500 rounded-4xl flex'>
                        <input type="text"
                            className='flex-1 h-[6vh] px-3 focus:outline-none'
                            name="text"
                            id="mobile-search"
                            placeholder='Search...'
                            autoComplete='off' />
                        <button className='md:mt-0 mt-2.5 bg-linear-to-b from-red-600 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-1xl'>
                            <IoSearch />
                        </button>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Navbar