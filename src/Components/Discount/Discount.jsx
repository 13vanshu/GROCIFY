// src/Components/Discount/Discount.jsx
import React, { useState, useRef } from "react";
import { discountData } from "../../Data/discountData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DiscountCard from "../../Tools/DiscountCard";

const Discount = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = discountData.length;

  // 🔹 Touch handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  // 👆 Touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (swipeDistance > 50) {
      nextSlide(); 
    } else if (swipeDistance < -50) {
      prevSlide(); 
    }
  };

  return (
    <section className="sm:py-10 md:py-15">
      <div className="max-w-300 mx-auto px-4 sm:px-8">

        {/* VIEWPORT */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* SLIDER TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {discountData.map((item) => (
              <DiscountCard key={item.id} item={item} />
            ))}
          </div>

          {/* ⬅️ LEFT ARROW (DESKTOP ONLY) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-white shadow-md
                       items-center justify-center
                       hover:bg-orange-500 hover:text-white
                       transition z-20"
          >
            <FaChevronLeft />
          </button>

          {/* ➡️ RIGHT ARROW (DESKTOP ONLY) */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-white shadow-md
                       items-center justify-center
                       hover:bg-orange-500 hover:text-white
                       transition z-20"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-5">
          {discountData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${activeIndex === index
                  ? "bg-orange-500 scale-125"
                  : "bg-zinc-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Discount;
