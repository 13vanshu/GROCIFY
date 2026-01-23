// src/Tools/DiscountCard.jsx
import Button from "./Button";

const DiscountCard = ({ item }) => {
  return (
    <div className="w-full min-w-full shrink-0">
      <div
        className="
          relative
          min-h-150 sm:min-h-120 md:min-h-80
          bg-linear-to-br from-white via-orange-200 to-orange-400
          rounded-3xl
          overflow-hidden
          flex flex-col md:flex-row
          items-center
          md:py-0
          py-20
          gap-8
          px-6 sm:px-10
        "
      >
        {/*MOBILE BACKGROUND IMAGE*/}
        <div
          className="absolute inset-0 md:hidden bg-no-repeat bg-contain bg-bottom"
          style={{ backgroundImage: `url(${item.imageMobile})` }}
        />

        {/*DESKTOP IMAGE */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 hidden md:block bg-no-repeat bg-contain bg-right opacity-90"
          style={{ backgroundImage: `url(${item.imageDesktop})` }}
        />

        {/* DISCOUNT */}
        <span className="text-6xl sm:text-7xl md:text-9xl text-orange-500 font-bold md:-rotate-90 z-10">
          {item.percent}
        </span>

        {/* CONTENT */}
        <div className="z-10 max-w-full md:max-w-175 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-800">
            {item.title}
          </h1>

          <p className="text-zinc-600 my-4 sm:my-6 text-sm sm:text-base md:text-lg">
            {item.description}
          </p>

          <Button content="Get a Discount" />
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
