import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../../Tools/Button'

const Hero = () => {
  return (
    <section>
      <div className="max-w-300 min-h-screen mx-auto  px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center pt-28 sm:pt-32 md:pt-25">

        {/* Hero Content */}
        <div className="flex-1 md:pt-0 pt-13">
          <span className="bg-orange-100 text-orange-500 text-sm sm:text-base md:text-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="text-4xl/10 sm:text-5xl/12 md:text-7xl/18 font-bold mt-4">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{' '}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>

          <p className="max-w-full sm:max-w-130 text-zinc-600 text-sm sm:text-base md:text-lg mt-5 mb-8 sm:mb-10">
            Bred for a high content of beneficial substances. Our products are all
            fresh and healthy.
          </p>

          <Button content="Shop Now" />
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={grocery}
            alt="Hero Image"
            className="w-full max-w-70 sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
