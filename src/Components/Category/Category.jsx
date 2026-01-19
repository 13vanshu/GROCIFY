import React from 'react'
import Heading from '../../Tools/Heading'
import category from '../../Api/category.json'
import Button from '../../Tools/Button'

const Category = () => {

    return (
        <section>
            <div className='max-w-310 mx-auto px-10 md:py-20 py-10'>
                <Heading highlight="Shop" heading="By Category" />

                {/* Category Cards */}
                <div className='flex flex-wrap md:gap-10 gap-0 md:mt-15 -mt-20'>
                    {
                        category.map(cards => {
                            return (
                                // Card                            
                                <div className='flex-1 basis-75' >
                                    {/* Card Image */}
                                    <div className='w-full min-h-[30vh] relative -mb-13'>
                                        <img src={cards.img} alt="images" className='absolute bottom-0' />
                                    </div>

                                    {/* Card Content */}
                                    <div className='bg-linear-to-b from-white to-zinc-200 p-8 pt-17 rounded-xl'>
                                        <h1 className='text-zinc-800 text-3xl font-bold'>{cards.title}</h1>
                                        <p className='text-zinc-600 mt-3 mb-9'>{cards.description}</p>
                                        <Button content='See all'/> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Category