import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../../Tools/Button'

const Hero = () => {
  return (
    <section>
        <div className='max-w-300 min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-0 pt-20' >
            {/* Hero Content */}
            <div className='flex-1 '>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
                    Export Best Quality...
                </span>
                <h1 className='md:text-7xl/18 text-5xl/12 font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In  Your City
                </h1>
                <p className='max-w-130 text-zinc-600 md:text-lg text-md mt-5 mb-10 '>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <Button content="Shop Know"/>
            </div>

            {/* Hero Image */}
            <div className='flex-1'>
                <img src={grocery} alt="Hero Image" />
            </div>
        </div>
    </section>
  )
}

export default Hero