import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Footer container */}
      <div className="mx-auto w-full max-w-[1440px] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

        <div className="mb-6 md:mb-0">
            {/* Logo */}
            <Logo />
            <div className="hidden lg:flex font-bold text-base xl:text-lg mx-auto  mt-5" id="navbar-cta">
      <a href="#" className=" text-white rounded md:bg-transparent hover:underline mx-5">آپ ما چطور کار میکنه ؟</a>
      <a href="#" className=" text-white rounded md:bg-transparent hover:underline mx-5">درباره ما</a>
      <a href="#" className=" text-white rounded md:bg-transparent hover:underline mx-5">ثبت کافه</a>
     </div>
     </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">

            {/* Useful Links */}
            <div>
              <h2 className="mb-6 text-sm uppercase text-white">
                لینک های مفید
              </h2>

              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <Link href="/about-us" className="hover:underline">
                    درباره ما
                  </Link>
                </li>

                <li className="mb-4">
                  <Link href="#Introduction" className="hover:underline">
                    درباره آپ ما
                  </Link>
                </li>

                <li>
                  <Link href="/contact-us" className="hover:underline">
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="mb-6 text-sm uppercase text-white">
                شبکه های اجتماعی ما
              </h2>

              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/cozycornerapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    اینستاگرام
                  </a>
                </li>

                <li className="mb-4">
                  <a
                    href="https://twitter.com/cozycornerapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    توییتر
                  </a>
                </li>

                <li>
                  <a
                    href="https://t.me/CozyCornerApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    تلگرام
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 p-4 text-center text-white">
        <p className="text-white">
          تمامی حقوق این وب سایت برای تیم گوش دنج می باشد © 2023
        </p>
      </div>
    </footer>
  );
}

