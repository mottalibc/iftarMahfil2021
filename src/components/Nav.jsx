import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="border-b-[1px] w-full flex flex-col items-center justify-center h-10 border-gray-300 py-6 px-8 sticky top-0 bg-gray-100 mb-20 z-50 backdrop-blur-sm">
      <div className="flex text-[14px]">
        <Link
          className="no-underline bg-black text-white focus:text-black focus:bg-transparent focus:border-[1px] border-black px-5 py-1 rounded-full"
          href={"#qr"}
        >
          পেমেন্ট ডিটেইলস
        </Link>
        <Link
          className="no-underline border-[1px] border-black text-black focus:bg-black focus:text-white px-5 py-1 rounded-full ml-2"
          href={"#contact"}
        >
          কন্টাক্ট ইনফরমেশন
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
