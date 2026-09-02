import Image from "next/image";
import AboutImage from "@/assets/images/About us.png"
export default function About() {
  return (
    <section id="About-us" className="mx-auto max-w-[1440px]">
      {/* Page Header */}
      <div className="mt-16">
        <h1 className="mb-4 text-center text-5xl font-bold">
          درباره ما
        </h1>

        <p className="text-center text-base text-[#717171]">
          درباره‌ی تیم گوشه‌ی دنج و کاری که ما می‌کنیم
        </p>
      </div>

      {/* About Us Container */}
      <div className="container mx-auto mt-16 mb-48 flex flex-col items-center rounded-xl bg-white p-6 md:flex-row-reverse md:space-x-16">

        {/* Image */}
        <div className="mx-auto flex flex-col md:w-1/2">
          <Image
            src={AboutImage}
            alt="تیم گوشه‌ی دنج"
            width={491}
            height={647}
            className="mx-auto mb-10 h-auto w-[491px] max-w-full"
          />
        </div>

        {/* About Us Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">

            <h2 className="max-w-md text-xl font-bold md:text-4xl">
              تیم گوشه‌ی دنج
            </h2>

            <p className="text-justify text-md md:text-lg">
              تیم گوشه‌ی دنج با هدف ارائه اطلاعات دقیق و جامع کافه ها، به شما
              این امکان را می‌دهد که با توجه به نیاز خود ساعت های مناسب کافه‌ی
              موردنظر خود را پیدا کنید.
              <br />
              در این اپلیکیشن شما می توانید اطلاعاتی درباره آدرس، ساعات کاری،
              ساعات خلوت‌تر، منو و تصاویر کافه ها را بیابید. همچنین، نظرات و
              انتقادات دیگران را مطالعه کنید تا تصمیم بهتری بگیرید.
              <br />
              به علاوه، ما به شما این امکان را می دهیم تا نظرات و تجربیات خود
              را درباره کافه ها با دیگران به اشتراک بگذارید.
              <br />
              <br />
              اگر به دنبال محیطی آرام برای کار کردن هستید، همین حالا اپلیکیشن
              گوشه‌ی دنج را نصب کنید و بهترین کافه را برای خود پیدا کنید.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
