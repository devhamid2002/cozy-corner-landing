"use client";

import { useState } from "react";

const slides = [
  {
    quote:
      "کافه‌ها فضاهایی هستند که می‌توانید در آن‌ها به خودتان بپیچید و به تنهایی در عمق فکر کنید. آن‌ها برای خلاقیت، تمرکز و ایده‌پردازی بی‌نهایت مناسبند.",
    author: "جی‌کی رولینگ",
    description: "نویسنده سری کتاب‌های هری پاتر",
  },
  {
    quote:
      "دنیای اطرافتان شما را تغییر می دهد، هر تغییر به محیط وابسته است.",
    author: "جیمز کلییر",
    description: "از کتاب خرده عادت ها",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[currentSlide];

  return (
    <section>
      <div className="relative mx-auto max-w-[1440px] items-center">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Current Slide */}
          <div className="absolute inset-0 duration-700 ease-in-out">
            {/* Quote Icon */}
            <svg
              className="absolute right-1/2 -mr-5 mt-6 w-6 md:mt-24"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="26"
              viewBox="0 0 32 26"
              fill="none"
            >
              <g clipPath="url(#clip0_465_5397)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.8597 4.06074C27.0878 6.31671 24.7019 8.96745 24.7019 12.013C26.7358 12.2386 28.4177 13.0376 29.7475 14.41C31.0774 15.7824 31.7423 17.3709 31.7423 19.1757C31.7423 21.0933 31.097 22.71 29.8062 24.026C28.5155 25.342 26.8923 26 24.9366 26C22.7462 26 20.8492 25.1446 19.2456 23.4338C17.6419 21.7231 16.8401 19.6457 16.8401 17.2017C16.8401 9.86981 21.1034 4.13596 29.6302 0L31.8597 4.06074ZM15.0196 4.06074C10.2086 6.31671 7.80313 8.96745 7.80313 12.013C9.87615 12.2386 11.5776 13.0376 12.9074 14.41C14.2373 15.7824 14.9022 17.3709 14.9022 19.1757C14.9022 21.0933 14.2471 22.71 12.9368 24.026C11.6265 25.342 9.99349 26 8.03781 26C5.84745 26 3.96024 25.1446 2.37614 23.4338C0.792039 21.7231 0 19.6457 0 17.2017C0 9.86981 4.24376 4.13596 12.7314 0L15.0196 4.06074Z"
                  fill="#8C4C17"
                />
              </g>

              <defs>
                <clipPath id="clip0_465_5397">
                  <rect width="32" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* Quote */}
            <span className="absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 text-center text-sm sm:text-lg">
              {slide.quote}
            </span>

            {/* Author */}
            <p className="absolute top-48 left-1/2 ml-16 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-bold sm:text-lg md:top-80 md:ml-24">
              {slide.author}
            </p>

            {/* Description */}
            <p className="absolute top-48 right-1/2 -mr-32 -translate-x-1/2 -translate-y-1/2 text-center text-sm sm:text-lg md:top-80">
              {slide.description}
            </p>
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          aria-label="Previous slide"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="h-4 w-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>

            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          aria-label="Next slide"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg
              className="h-4 w-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>

            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}