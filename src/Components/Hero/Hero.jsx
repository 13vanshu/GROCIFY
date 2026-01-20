import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../../Tools/Button'

const Hero = () => {
  return (
    <section>
<div className="max-w-300 mx-auto px-4 sm:px-6 md:px-10 
flex flex-col md:flex-row items-center 
pt-28 sm:pt-32 md:pt-24">

        {/* Hero Content */}
        <div className="w-full md:flex-1 pt-6 sm:pt-8 md:pt-0">
          {/* Badge */}
          <span className="inline-block bg-orange-100 text-orange-500 
    text-xs sm:text-sm md:text-base 
    px-3 sm:px-4 md:px-5 
    py-1 sm:py-1.5 md:py-2 
    rounded-full">
            Export Best Quality...
          </span>

          {/* Heading */}
          <h1 className="mt-3 sm:mt-4 font-bold 
    text-3xl leading-tight 
    sm:text-4xl sm:leading-snug 
    md:text-6xl md:leading-tight 
    lg:text-7xl">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 mb-5 sm:mb-6 
    max-w-md sm:max-w-lg md:max-w-2xl 
    text-zinc-600 
    text-sm sm:text-base md:text-lg">
            Bred for a high content of beneficial substances. Our products are all
            fresh and healthy.
          </p>

          <Button content="Shop Now" />
        </div>

        {/* Hero Image */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end mt-6 sm:mt-8 md:mt-0">
          <img
            src={grocery}
            alt="Hero Image"
            className="w-full max-w-55 sm:max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
