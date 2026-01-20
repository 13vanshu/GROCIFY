import React, { useState } from 'react';
import Heading from '../../Tools/Heading';
import { tabs } from '../../Data/data';
import productslist from './../../Api/products.json';
import Card from '../../Tools/Card';
import Button from '../../Tools/Button';

const Products = () => {

    const [activeTab, setActiveTabs] = useState('All');

    const filteredItems =
        activeTab === "All"
            ? productslist
            : productslist.filter(item => item.category === activeTab);

    return (
        <section>
            <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">

                {/* Heading */}
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10">
                    {
                        tabs.map(item => (
                            <button
                                key={item}
                                onClick={() => setActiveTabs(item)}
                                className={`px-4 sm:px-5 py-2 text-sm sm:text-base md:text-lg rounded-lg cursor-pointer transition-all
                ${activeTab === item
                                        ? "bg-linear-to-b from-orange-400 to-orange-500 text-white"
                                        : "bg-zinc-100 hover:bg-zinc-200"
                                    }`}
                            >
                                {item}
                            </button>
                        ))
                    }
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-9 mt-12 sm:mt-16 md:mt-20">
                    {
                        filteredItems.slice(0, 8).map(item => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.name}
                                price={item.price}
                                category={item.category}
                            />
                        ))
                    }
                </div>

                {/* View All Button */}
                <div className="mt-10 sm:mt-12 md:mt-15 mx-auto w-fit">
                    <Button content="View All" />
                </div>

            </div>
        </section>
    );
};

export default Products;
