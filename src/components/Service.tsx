import Image from "next/image";
import Cafe from "@/assets/images/cafe.png"
import Bus from "@/assets/images/bus.png"
import CoffeCup from "@/assets/images/coffee-cup.png"
export default function Service() {
  return (
    <section id="Service">
      {/* Service Container */}
      <div className="container mx-auto mt-40 max-w-[1440px] px-6 pb-14">
        <h1 className="mt-3 flex flex-col text-center text-2xl font-bold text-black md:text-right">
          گوشه‌ی دنج چه ویژگی هایی داره؟
        </h1>

        <hr className="my-2 mb-14 mr-32 h-1 w-48 rounded border-0 bg-[#C67C4E]" />

        {/* First Row */}
        <div className="mx-auto flex flex-col text-center md:flex-row md:space-y-0">

          {/* Item 1 */}
          <div className="mt-20 flex flex-col items-center md:mt-0 md:w-1/2">
            <div className="mb-5 flex h-36 w-36 items-center justify-center">
              <Image
                src={Cafe}
                alt="Cafe"
                width={144}
                height={144}
              />
            </div>

            <h3 className="text-xl font-bold">
              کافه‌ی مورد علاقه‌ات رو پیدا کن
            </h3>

            <p className="mt-2 max-w-md text-gray-400">
              کلی کافه هست که می‌تونی از بینشون انتخاب کنی
            </p>
          </div>

          {/* Item 2 */}
          <div className="mt-20 flex flex-col items-center md:mt-0 md:w-1/2">
            <div className="mb-5 flex h-36 w-36 items-center justify-center">
              <Image
                src={Bus}
                alt="Bus"
                width={144}
                height={144}
              />
            </div>

            <h3 className="text-xl font-bold">
              به‌ کارات برس
            </h3>

            <p className="mt-2 max-w-md text-gray-400">
              می‌تونی بهترین کافه رو نزدیک خودت پیدا کنی
            </p>
          </div>

          {/* Item 3 */}
          <div className="mt-20 flex flex-col items-center md:mt-0 md:w-1/2">
            <div className="mb-5 flex h-36 w-36 items-center justify-center">
              <Image
                src={CoffeCup}
                alt="Coffee cup"
                width={144}
                height={144}
              />
            </div>

            <h3 className="text-xl font-bold">
              از قهوه‌ات لذت ببر
            </h3>

            <p className="mt-2 max-w-md text-gray-400">
              تو آرامش از گوشه‌ی دنج‌ات لذت ببر و به کارهات برس!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}