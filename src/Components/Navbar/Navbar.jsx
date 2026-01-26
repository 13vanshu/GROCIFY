import React, { useEffect, useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";
import { navMenu } from '../../Data/data';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`bg-white fixed top-0 max-w-7xl mx-auto left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)]' : ''}`}>
            <nav className="max-w-300 mx-auto px-4 sm:px-6 md:px-10 h-[10vh] sm:h-[11vh] md:h-[14vh] flex justify-between items-center">

                {/* Logo */}
                <a href="/" className="text-3xl sm:text-4xl font-semibold">
                    Gr<span className="text-orange-500 uppercase">o</span>cify
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-x-8 lg:gap-x-13">
                    {navMenu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`font-semibold tracking-wider transition-colors ${item.active ? 'text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Nav Actions */}
                <div className="flex items-center gap-x-4 sm:gap-x-5">

                    {/* Desktop Search */}
                    <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full items-center">
                        <input
                            type="text"
                            className="flex-1 h-[5vh] px-3 focus:outline-none"
                            placeholder="Search..."
                        />
                        <button className="bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </div>

                    {/* Icons */}
                    <a href="/" className='text-zinc-800 text-2xl sm:text-3xl'>
                        <IoMdHeart />
                    </a>
                    <a href="/" className="text-zinc-800 text-2xl sm:text-3xl">
                        <HiMiniShoppingBag />
                    </a>

                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="md:hidden text-zinc-800 text-3xl transition-transform"
                    >
                        {showMenu ? <RiMenu4Line /> : <TbMenu2 />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`md:hidden flex flex-col items-center gap-y-8
      bg-orange-500/15 backdrop-blur-xl rounded-xl p-8
      absolute top-full left-1/2 transform -translate-x-1/2
      transition-all duration-500
      ${showMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                    {navMenu.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`font-semibold tracking-wider ${item.active ? 'text-orange-500' : 'text-zinc-800 hover:text-orange-500'}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Mobile Search */}
                    <li className="flex p-1 border-2 border-orange-500 rounded-full items-center w-full">
                        <input
                            type="text"
                            className="flex-1 h-[5vh] px-3 focus:outline-none bg-transparent"
                            placeholder="Search..."
                        />
                        <button className="bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </li>
                </ul>

            </nav>
        </header>

    )
}

export default Navbar