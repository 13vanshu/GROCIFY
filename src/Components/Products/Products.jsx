import React, { useState } from 'react';
import Heading from '../../Tools/Heading';
import { tabs } from '../../Data/data';
import products from './../../Api/products.json';

const Products = () => {

    const [activeTab, setActiveTabs] = useState('All');

    return (
        <section>
            <div className='max-w-300 mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='flex  justify-center gap-3 mt-10'>
                    {
                        tabs.map(item => {
                            return (
                                <button key={item} className={` px-5 py-2 text-lg rounded-lg cursor-pointer
                                ${activeTab === item ? "bg-linear-to-b from-orange-400 to-orange-500 text-white" : "bg-zinc-100"}`}
                                onClick={() => {setActiveTabs(item)}}>
                                    {item}
                                </button>
                            )
                        })
                    }
                </div>


            </div>
        </section>
    )
}

export default Products
