"use client";

import Image from "next/image";
import HeroImage from "@/assets/images/img-hero.png"

export default function Hero() {
  return (
    <section id="hero" className="bg-[#F6EBDA]">
      {/* Hero container */}
      <div className="mx-auto flex max-w-[1440px] flex-col justify-content bg-[#F6EBDA] p-6 lg:flex-row">
        
        {/* Content Container */}
        <div className="mx-auto place-self-center">
          <h1 className="mb-6 max-w-2xl text-4xl tracking-tight xl:text-6xl">
            <span className="text-[#C67C4E]">گوشه دنج&nbsp;</span>
            تو،همین
          </h1>

          <h1 className="mb-6 max-w-2xl text-4xl tracking-tight xl:text-6xl">
            نزدیکی هاست!
          </h1>

          <p className="mb-6 max-w-2xl text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
            با گوشه ی دنج هر جایی که هستی میتونی به راحتی بهترین کافه رو برای
            کار کردن پیدا کنی
          </p>

          <form className="mt-12 items-center lg:mt-24">
            <p className="mb-4 mr-4 font-bold lg:text-right">
              اولین نفر از آماده شدن گوشه دنج مطلع شو!
            </p>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                className="h-12 w-48 rounded-br-3xl rounded-tr-3xl border border-gray-300 pr-6 shadow-lg placeholder:pr-6 focus:border-[#c67c4e] focus:ring-1 focus:ring-[#c67c4e] focus:outline-none lg:w-72"
                placeholder="09xxxxx6789"
              />

              <button
                id="btn-send"
                className="absolute rounded-bl-3xl rounded-tl-3xl bg-[#A84D37] px-8 py-3 text-white shadow-lg"
                type="button"
              >
                خبرم کن!
              </button>
            </div>
          </form>
        </div>

        {/* Image */}
        <div className="mx-auto mt-10 w-80 md:w-[574px] lg:mt-0">
          <Image
            src={HeroImage}
            alt="گوشه دنج"
            width={574}
            height={500}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}