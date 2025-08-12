import { Kalam } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"], // Regular
});

export default function Footer() {
  return (
    <footer
      id="contact"
      className={`bg-[#2E3E50] text-white py-20 px-8 flex flex-col-reverse md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 border-t border-white ${kalam.className}`}
    >
      {/* Left side - copyright */}
      <p
        className={`md:text-2xl font-normal text-gray-200 text-center text-base ${kalam.className}`}
      >
        © 2025 RENDEZ-VOUS Hotel. All rights reserved.
      </p>

      {/* Right side - contact info */}
      <div className={`py-2 font-light text-center md:ml-80 text-gray-200`}>
        <p className={`py-2 text-4xl ${kalam.className}`}>Contact Us</p>
        <p className={`py-2 text-4xl ${kalam.className}`}>0903232323</p>
        <p className={`py-2 text-4xl ${kalam.className}`}>0911252610</p>
      </div>
    </footer>
  );
}
