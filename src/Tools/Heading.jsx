import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto'>
            <h1 className='md:text-5xl text-[2rem] font-bold'>
                <span className='text-orange-500'>{props.highlight}</span> {props.heading}
            </h1>
            <div className='w-34 h-1 mt-3 ml-auto bg-orange-500'>
            </div>
        </div>
    )
}

export default Heading