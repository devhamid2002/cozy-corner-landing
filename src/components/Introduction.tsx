import Image from "next/image";
import IntroductionImage from "@/assets/images/mobile 2.png"

export default function Introduction() {
  return (
    <section id="Introduction" className="bg-white">
      {/* Introduction Container */}
      <div className="container mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-10 pb-24 lg:pt-16 md:flex-row md:space-x-16">

        {/* Image */}
        <div className="flex bg-[#F6EBDA] md:w-1/2">
          <Image
            src={IntroductionImage}
            alt="گوشه دنج اپلیکیشن"
            width={500}
            height={600}
            className="mx-auto pt-10"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5 md:px-16">

            <h1 className="mt-10 max-w-md text-2xl font-bold md:text-4xl">
              اپ ما چطوری کار میکنه؟
            </h1>

            <p className="text-justify text-base md:text-lg">
              به طور کلی اپلیکیشن گوشه‌ی دنج به کاربران در هر جای ایران، امکان
              می‌دهد به راحتی کافه‌ها را در نزدیکی خود پیدا کنند. از دیگر
              ویژگی‌های گوشه دنج می‌توان به نمایش اطلاعات کامل کافه ها از قبیل
              ساعت های کاری، ساعت های خلوت تر، لوکیشن و همچنین منو کافه اشاره
              کرد.
              <br />

              با استفاده از{" "}
              <span className="text-[#C67C4E]">گوشه دنج</span> کاربران
              می‌توانند از نظرات و تجربیات دیگران استفاده کنند و حتی با ثبت
              نظر خود باعث بهبود عملکرد و پیشرفت کافه ها شوند.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}