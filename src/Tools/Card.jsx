import React from 'react'
import { IoMdHeart} from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Button from './Button';

const Card = ({image,title,category,price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>

      {/* Card Icon   */}
      <div className='flex justify-between'>
        <span className='text-3xl text-zinc-300'>
            <IoMdHeart />
        </span>
        <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg '><FaPlus /></button>
      </div>

      {/* Card Image */}
      <div className='w-full h-50'>
        <img src={image} className='w-full h-full mx-auto object-contain'/>
      </div>

      {/* Card Content */}
      <div className=' text-center'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='text-2xl font-mono mt-4 mb-3'>${price.toFixed(2)}</p>
        <Button content="Shop Know"/>
      </div>
    </div>
  )
}

export default Card
