import React from 'react'
import Heading from '../../Tools/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import values from '../../Api/values.json';
import basket from './../../assets/basket-full-vegetables.png';

const Values = () => {

  const iconMap = {
    FaHeart: FaHeart,
    FaLeaf: FaLeaf,
    FaShieldAlt: FaShieldAlt,
    FaSeedling: FaSeedling,
  };


  return (
    <section>
      <div className='max-w-300 mx-auto px-10 md:py-20 py-10 '>
        <Heading highlight="Our" heading="Values" />
        <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15  '>
          {/* Left Values */}
          <div className='flex-1 md:min-h-100 flex flex-col gap-15 justify-between'>
            {
              values.slice(0, 2).map((item) => {
                const Icon = iconMap[item.icons]; // string → component
                return (
                  <div key={item.id} className='flex md:flex-row-reverse gap-7'>
                    <div className='flex items-center'>
                      <span className='flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full '><Icon /></span>
                    </div>
                    <div className='md:text-right '> 
                      <h4 className='text-zinc-800 text-3xl font-bold'>{item.title}</h4>
                      <p className='text-zinc-600 mt-2'>{item.description}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>

          {/* Image */}
          <div className='md:flex flex-1 w-1/2 hidden'>
            <img src={basket} alt="" />
          </div>

          {/* Right Values */}
          <div className='flex-1 md:min-h-100 flex flex-col gap-15 justify-between'>
            {
              values.slice(2,4).map((item) => {
                const Icon = iconMap[item.icons]; // string → component
                return (
                  <div key={item.id} className='flex gap-7'>
                    <div className='flex items-center'>
                      <span className='flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full '><Icon /></span>
                    </div>
                    <div className='text-left '> 
                      <h4 className='text-zinc-800 text-3xl font-bold'>{item.title}</h4>
                      <p className='text-zinc-600 mt-2'>{item.description}</p>
                    </div>
                  </div>
                );
              })

            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values
