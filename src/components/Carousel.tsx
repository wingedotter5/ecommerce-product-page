import { useState } from "react";

interface CarouselProps {
  images: string[];
  arrows?: boolean;
  showLightbox?: () => void;
}

const Carousel = ({ images, arrows, showLightbox }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });

  const previous = () =>
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });

  return (
    <div className="flex flex-col gap-10">
      <div className="relative max-w-[500px]">
        <img
          className="md:rounded-xl"
          src={images[activeIndex]}
          alt="product image"
          onClick={showLightbox}
        />
        {arrows && (
          <>
            <button
              className="absolute left-0 top-1/2 flex h-10 w-10 translate-x-[25%] translate-y-[-50%] items-center justify-center rounded-full bg-white md:translate-x-[-50%]"
              onClick={previous}
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-[-25%] translate-y-[-50%] items-center justify-center rounded-full bg-white md:translate-x-[50%]"
              onClick={next}
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="hidden cursor-pointer flex-wrap justify-between md:flex">
        {images.map((i, index) => (
          <button
            key={i}
            className={`w-24 overflow-hidden rounded-xl bg-white hover:opacity-50 ${
              activeIndex === index ? "border-2 border-orange" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className={`${activeIndex === index ? "opacity-25" : ""}`}
              src={i}
              alt={i}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
