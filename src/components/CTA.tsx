
import Image from "next/image";
import CTAImage from "@/assets/images/half-mobile.png"
export default function CTA() {
  return (
    <section id="Real" className="bg-[#F6EBDA]">
      {/* Productive Container */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center lg:flex-row-reverse">
        
        {/* Image */}
        <div className="mt-0 flex flex-col md:w-1/2">
          <Image
            src={CTAImage}
            alt="گوشه دنج"
            width={600}
            height={600}
            className="h-auto w-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col p-6">
            <h1 className="mt-10 max-w-md px-2 text-xl font-bold md:text-5xl">
              راهنمای شما به دنیایی از کافه‌های آرام
            </h1>

            <p className="mt-2 px-4 text-md md:text-lg">
              گوشه‌ی دنج کمک‌ات می‌کنه در زمان و هزینه‌ات صرفه جویی کن و
              سریع‌تر از همیشه کافه‌های معتبر و دنج رو با بهترین ساعت‌های کاری
              هر کجای ایران هستید پیدا کنی
            </p>

            <form>
              <p className="mt-24 mr-4 mb-1 font-bold xl:mr-72">
                اولین نفر از آماده شدن گوشه دنج مطلع شو!
              </p>

              <div className="relative w-full">
                <input
                  type="tel"
                  id="phone"
                  className="mb-10 h-12 w-48 rounded-br-3xl rounded-tr-3xl border border-gray-300 pr-6 shadow-lg placeholder:pr-6 focus:border-[#c67c4e] focus:ring-1 focus:ring-[#c67c4e] focus:outline-none lg:w-64 xl:mr-72"
                  placeholder="09xxxxx6789"
                />

                <button
                  type="submit"
                  className="absolute rounded-bl-3xl rounded-tl-3xl bg-[#A84D37] px-8 py-3 text-white shadow-lg"
                >
                  خبرم کن!
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

