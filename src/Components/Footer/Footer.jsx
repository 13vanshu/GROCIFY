import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'


const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20 mb-3 max-w-7xl mx-auto '>
            <div className='flex flex-wrap max-w-300 px-10 mx-auto gap-y-10  '>
                <div className='flex-1 basis-80'>
                    <a href="/" className="text-3xl sm:text-4xl font-semibold">
                        Gr<span className="text-orange-500 uppercase">o</span>cify
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-87.5'>
                        Bred for a high content beneficial substances.Our products are all fresh and healthy.
                    </p>
                    <p className='text-zinc-800 mt-6'>2026 &copy; all rights reserved</p>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href='/' className='hover:text-orange-500 text-zinc-800'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href='/' className='hover:text-orange-500 text-zinc-800'>FAQ</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href='/' className='hover:text-orange-500 text-zinc-800'>Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a href='/' className='hover:text-orange-500 text-zinc-800'>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href='/' className='hover:text-orange-500 text-zinc-800'>Contact us </a>
                    </li>
                </ul>

                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                    <p className='text-zinc-600 mt-6'>
                        Questions or Feedbacks?<br />
                        we'd love to hear from you.
                    </p>
                    <div className=' flex bg-white p-1 rounded-lg mt-6 items-center'>
                        <input type='email' name='email' id='email' autoComplete='off' placeholder='Email Address' className='h-[6vh] pl-4 flex-1 focus:outline-none  '  />
                        <button className='bg-linear-to-b from bg-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
