import Image from "next/image";
import ContactImage from "@/assets/images/Contact us.png"
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "@/components/forms/Contact.form";

export default function Contact() {
  return (
    <section id="Contact-us" className="mx-auto max-w-[1440px]">
      {/* Header */}
      <div className="mt-16">
        <h1 className="mb-4 text-center text-5xl font-bold">
          ارتباط با ما
        </h1>

        <p className="text-center text-base text-[#717171]">
          برای ارتباط با ما از یکی از راه‌های زیر استفاده کنید
        </p>
      </div>

      {/* Contact us Container */}
      <div className="container mx-auto mt-16 mb-48 flex flex-col items-center rounded-xl bg-white p-6 md:flex-row md:space-x-14">
        {/* Contact us Image */}
        <div
          id="Image-Contact"
          className="relative flex flex-col md:w-1/2"
        >
          <Image
            src={ContactImage}
            alt="اطلاعات تماس"
            width={491}
            height={647}
            className="mb-10 h-auto w-[491px] max-w-full"
          />

          {/* Contact information overlay */}
          <div className="absolute">
            <h2 className="mt-8 mr-7 text-3xl">
              اطلاعات تماس
            </h2>

            <p className="mt-3 mr-7 text-base text-[#979797]">
              برای تماس با ما از یکی از راه‌های زیر استفاده کنید
            </p>

            {/* Phone */}
            <div className="mt-20 mr-7">
              <svg
                className="mr-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                  fill="black"
                />
                <path
                  d="M12.9998 7.99999C15.1028 7.99999 15.9998 8.89699 15.9998 11H17.9998C17.9998 7.77499 16.2248 5.99999 12.9998 5.99999V7.99999ZM16.4218 13.443C16.2296 13.2683 15.9771 13.1752 15.7176 13.1832C15.4581 13.1912 15.2118 13.2998 15.0308 13.486L12.6378 15.947C12.0618 15.837 10.9038 15.476 9.71179 14.287C8.51979 13.094 8.15879 11.933 8.05179 11.361L10.5108 8.96699C10.6972 8.78612 10.8059 8.53982 10.814 8.2802C10.822 8.02059 10.7287 7.76804 10.5538 7.57599L6.85879 3.51299C6.68384 3.32035 6.44067 3.2035 6.18095 3.18725C5.92122 3.17101 5.66539 3.25665 5.46779 3.42599L3.29779 5.28699C3.1249 5.46051 3.02171 5.69145 3.00779 5.93599C2.99279 6.18599 2.70679 12.108 7.29879 16.702C11.3048 20.707 16.3228 21 17.7048 21C17.9068 21 18.0308 20.994 18.0638 20.992C18.3083 20.9783 18.5391 20.8747 18.7118 20.701L20.5718 18.53C20.7413 18.3325 20.8271 18.0768 20.811 17.817C20.795 17.5573 20.6783 17.3141 20.4858 17.139L16.4218 13.443Z"
                  fill="black"
                />
              </svg>

              <span>+98386163431</span>
            </div>

            {/* Email */}
            <div className="mt-4 mr-7">
              <svg
                className="mr-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="black"
                />
              </svg>

              <span>info@cozycorner.ir</span>
            </div>

            {/* Social Media */}
            <div className="mt-72 mr-4 flex lg:mt-80">
              {/* Telegram */}
              <div className="m-3 rounded-full bg-[#C67C4E] p-2 hover:bg-white">
                <a href="#" aria-label="Telegram">
                    <FaTelegramPlane className="h-6 w-6" color="#fff"/>
                </a>
              </div>

              {/* Instagram */}
              <div className="m-3 rounded-full bg-[#C67C4E] p-2 hover:bg-white">
                <a href="#" aria-label="Instagram">
                    <FaInstagram className="h-6 w-6" color="#fff"/>
                </a>
              </div>

              {/* Twitter */}
              <div className="m-3 rounded-full bg-[#C67C4E] p-2 hover:bg-white">
                <a href="#" aria-label="Twitter">
                    <FaXTwitter className="h-6 w-6" color="#fff"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact us Form */}
        <div className="mx-auto flex flex-col md:w-1/2 md:px-6">
         <ContactForm />
        </div>
      </div>
    </section>
  );
}