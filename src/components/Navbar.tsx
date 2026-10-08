import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="relative bg-[#F6EBDA]">
    {/* Nav container */}
    <div className="flex justify-between items-center max-w-[1440px] lg:w-[90%] mx-auto p-4">

        {/* Logo */}
        <Logo />
        {/* Center Menu */}
        <div
        className="hidden lg:flex font-bold items-center gap-4 text-base xl:text-lg mx-auto mt-5"
        id="navbar-cta"
        >
        <Link
            href="/"
            className="text-[#616161] rounded md:bg-transparent hover:text-[#c67c4e] mx-5"
        >
            آپ ما چطور کار می کند؟
        </Link>

        <Link
            href="/contact-us"
            className="text-[#616161] rounded md:bg-transparent hover:text-[#c67c4e] mx-5"
        >
            ارتباط با ما
        </Link>

        <Link
            href="/about-us"
            className="text-[#616161] rounded md:bg-transparent hover:text-[#c67c4e] mx-5"
        >
            درباره ما
        </Link>
        </div>

        {/* Register Cafe Button */}
        <div className="hidden lg:flex mt-3 w-40">
        {/* <Link href="/">
            <button
            id="btn-send"
            className="hidden lg:flex bg-[#A84D37] py-3 px-8 shadow-lg text-white rounded-full"
            type="button"
            >
            ثبت کافه
            </button>
        </Link> */}
        </div>

        {/* Hamburger Menu */}
        <div>
        <button
            id="menu-btn"
            className="block hamburger lg:hidden focus:outline-none mt-9"
            type="button"
        >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
        </div>

        {/* Mobile Menu */}
        <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-[#1D1D1D] left-6 right-6 top-24 z-100"
        >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">

            <Link
            href="/"
            className="w-full text-center hover:text-[#c67c4e]"
            >
            آپ ما چطور کار می کند؟
            </Link>

            <Link
            href="/contact-us"
            className="w-full text-center hover:text-[#c67c4e]"
            >
            ارتباط با ما
            </Link>

            <Link
            href="/about-us"
            className="w-full text-center hover:text-[#c67c4e]"
            >
            درباره ما
            </Link>

            <hr className="w-full h-px my-8 bg-gray-200 border-1" />

            {/* <Link
            href="form one.html"
            className="w-full py-3 text-center rounded-full bg-[#c67c4e]"
            >
            ثبت کافه
            </Link> */}

        </div>
        </div>

    </div>
    </nav>
  );
}

