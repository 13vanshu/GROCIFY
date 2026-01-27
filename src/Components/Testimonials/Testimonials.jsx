import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../../Tools/Heading'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { testimonials } from '../../Data/testimonials'
import { FaStar } from 'react-icons/fa6'

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-300 mx-auto px-10 py-20'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='py-5 mt-10 flex justify-end gap-3'>
          <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'><IoIosArrowBack /></button>
          <button className='custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'><IoIosArrowForward /></button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">
          {
            testimonials.map(item => {
              return (

                <SwiperSlide className='bg-zinc-100 rounded-xl p-8 '>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'>
                      <img src={item.image} className='w-full h-full'/>
                    </div>
                    <div>
                      <h5 className='text-xl font-bold'>{item.name}</h5>
                      <p className='text-zinc-600'>{item.profession}</p>
                      <span className='flex text-amber-300 mt-3 text-xl gap-1 '>
                        {Array.from({ length: item.rating }, (_, index) => {
                          return <FaStar key={index} />;
                        })}
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 min-h-[22vh]'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
