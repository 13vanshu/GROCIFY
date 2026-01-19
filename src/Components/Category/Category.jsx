import React from 'react'
import Heading from '../../Tools/Heading'
import category from '../../Api/category.json'
import Button from '../../Tools/Button'

const Category = () => {

    return (
        <section>
  <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-20">
    <Heading highlight="Shop" heading="By Category" />

    {/* Category Cards */}
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-8 md:mt-15">
      {category.map((cards) => (
        
        /* Card */
        <div
          key={cards.id}
          className="w-full sm:w-[48%] lg:w-[30%]"
        >
          {/* Card Image */}
          <div className="w-full min-h-[20vh] sm:min-h-[25vh] md:min-h-[30vh] relative -mb-10 sm:-mb-12 md:-mb-13">
            <img
              src={cards.img}
              alt="images"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 max-h-full object-contain"
            />
          </div>

          {/* Card Content */}
          <div className="bg-linear-to-b from-white to-zinc-200 p-6 sm:p-7 md:p-8 pt-14 sm:pt-16 md:pt-17 rounded-xl">
            <h1 className="text-zinc-800 text-xl sm:text-2xl md:text-3xl font-bold">
              {cards.title}
            </h1>

            <p className="text-zinc-600 text-sm sm:text-base mt-3 mb-6 sm:mb-8 md:mb-9">
              {cards.description}
            </p>

            <Button content="See all" />
          </div>
        </div>

      ))}
    </div>
  </div>
</section>

    )
}

export default Category