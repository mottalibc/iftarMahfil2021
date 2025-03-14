import CopyPhoneNumber from "@/components/ClipB";
import Form from "@/components/Form";
import Nav from "@/components/Nav";
import WhatsAppButton from "@/components/Whatsapp";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center  ">
      <Nav />
      <section className="w-[90%] relative">
        <svg
          className="mx-auto relative opacity-25"
          width="310"
          height="310"
          viewBox="0 0 610 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="305" cy="305" r="206.5" stroke="#509CFF" />
          <circle
            cx="305"
            cy="305"
            r="134.75"
            stroke="#509CFF"
            strokeWidth="0.5"
          />
          <circle cx="305" cy="305" r="304" stroke="#509CFF" strokeWidth="2" />
          <circle
            cx="447.5"
            cy="571.5"
            r="38.35"
            fill="white"
            stroke="black"
            strokeWidth="0.3"
          />
          <circle
            cx="550.5"
            cy="136.5"
            r="38.35"
            fill="white"
            stroke="black"
            strokeWidth="0.3"
          />
          <circle
            cx="59.5"
            cy="473.5"
            r="38.35"
            fill="white"
            stroke="black"
            strokeWidth="0.3"
          />
          <path
            d="M33.876 493C33.5684 493 33.312 492.744 33.1069 492.231C32.9019 491.718 32.7993 491.175 32.7993 490.601C32.7993 490.088 32.8711 489.77 33.0146 489.647L47.1035 471.959C48.252 470.462 49.0825 469.283 49.5952 468.421C50.1284 467.54 50.4668 466.801 50.6104 466.207C50.7539 465.612 50.8257 464.884 50.8257 464.022C50.8257 462.259 50.2104 460.864 48.98 459.839C47.77 458.813 46.1089 458.301 43.9966 458.301C42.479 458.301 41.187 458.506 40.1206 458.916C39.0542 459.326 38.0288 459.849 37.0444 460.485C36.4292 460.895 36.019 461.1 35.814 461.1C35.6294 461.1 35.3936 460.936 35.1064 460.608C34.8193 460.259 34.563 459.87 34.3374 459.439C34.1323 458.988 34.0298 458.629 34.0298 458.362C34.0298 457.645 34.5938 456.988 35.7217 456.394C36.8496 455.778 38.2031 455.286 39.7822 454.917C41.3613 454.548 42.7354 454.363 43.9043 454.363C46.2627 454.363 48.3135 454.743 50.0566 455.501C51.8203 456.26 53.1738 457.337 54.1172 458.731C55.0811 460.126 55.563 461.777 55.563 463.684C55.563 465.489 55.2861 467.078 54.7324 468.452C54.1787 469.806 53.1328 471.498 51.5947 473.528C50.0771 475.538 47.2163 479.106 43.0122 484.233L39.0132 489.124H54.7632C55.1528 489.124 55.4297 489.247 55.5938 489.493C55.7783 489.739 55.8706 490.16 55.8706 490.754V491.37C55.8706 491.923 55.7783 492.333 55.5938 492.6C55.4297 492.867 55.1528 493 54.7632 493H33.876ZM73.8354 493.308C71.5386 493.308 69.457 492.61 67.5908 491.216C65.7246 489.821 64.2275 487.668 63.0996 484.756C61.9922 481.844 61.4385 478.204 61.4385 473.835C61.4385 469.488 61.9922 465.858 63.0996 462.946C64.2275 460.034 65.7246 457.88 67.5908 456.486C69.457 455.071 71.5386 454.363 73.8354 454.363C76.1323 454.363 78.2241 455.071 80.1108 456.486C82.0181 457.88 83.5356 460.034 84.6636 462.946C85.7915 465.858 86.3555 469.488 86.3555 473.835C86.3555 478.204 85.7915 481.844 84.6636 484.756C83.5356 487.668 82.0181 489.821 80.1108 491.216C78.2241 492.61 76.1323 493.308 73.8354 493.308ZM73.8354 489.37C75.2505 489.37 76.5425 488.847 77.7114 487.801C78.9009 486.755 79.8647 485.074 80.603 482.756C81.3413 480.439 81.7104 477.465 81.7104 473.835C81.7104 470.226 81.3413 467.263 80.603 464.945C79.8647 462.628 78.9009 460.946 77.7114 459.9C76.5425 458.834 75.2505 458.301 73.8354 458.301C72.4409 458.301 71.1489 458.824 69.9595 459.87C68.7905 460.916 67.8472 462.607 67.1294 464.945C66.4116 467.263 66.0527 470.226 66.0527 473.835C66.0527 477.465 66.4116 480.439 67.1294 482.756C67.8472 485.074 68.7905 486.755 69.9595 487.801C71.1489 488.847 72.4409 489.37 73.8354 489.37Z"
            fill="#CFCFCF"
          />
          <path
            d="M436.876 591C436.568 591 436.312 590.744 436.107 590.231C435.902 589.718 435.799 589.175 435.799 588.601C435.799 588.088 435.871 587.77 436.015 587.647L450.104 569.959C451.252 568.462 452.083 567.283 452.595 566.421C453.128 565.54 453.467 564.801 453.61 564.207C453.754 563.612 453.826 562.884 453.826 562.022C453.826 560.259 453.21 558.864 451.98 557.839C450.77 556.813 449.109 556.301 446.997 556.301C445.479 556.301 444.187 556.506 443.121 556.916C442.054 557.326 441.029 557.849 440.044 558.485C439.429 558.895 439.019 559.1 438.814 559.1C438.629 559.1 438.394 558.936 438.106 558.608C437.819 558.259 437.563 557.87 437.337 557.439C437.132 556.988 437.03 556.629 437.03 556.362C437.03 555.645 437.594 554.988 438.722 554.394C439.85 553.778 441.203 553.286 442.782 552.917C444.361 552.548 445.735 552.363 446.904 552.363C449.263 552.363 451.313 552.743 453.057 553.501C454.82 554.26 456.174 555.337 457.117 556.731C458.081 558.126 458.563 559.777 458.563 561.684C458.563 563.489 458.286 565.078 457.732 566.452C457.179 567.806 456.133 569.498 454.595 571.528C453.077 573.538 450.216 577.106 446.012 582.233L442.013 587.124H457.763C458.153 587.124 458.43 587.247 458.594 587.493C458.778 587.739 458.871 588.16 458.871 588.754V589.37C458.871 589.923 458.778 590.333 458.594 590.6C458.43 590.867 458.153 591 457.763 591H436.876Z"
            fill="#CFCFCF"
          />
          <path
            d="M539.445 156C539.056 156 538.779 155.867 538.615 155.6C538.451 155.333 538.369 154.923 538.369 154.37V153.693C538.369 153.119 538.451 152.708 538.615 152.462C538.779 152.196 539.056 152.062 539.445 152.062H548.951V122.562L539.292 124.223C538.943 124.223 538.666 123.916 538.461 123.3C538.276 122.665 538.184 122.039 538.184 121.424C538.184 121.137 538.266 120.921 538.43 120.778C538.594 120.614 538.851 120.491 539.199 120.409L551.842 117.579C552.273 117.579 552.663 117.702 553.011 117.948C553.38 118.173 553.565 118.44 553.565 118.748V152.062H561.655C562.394 152.062 562.763 152.606 562.763 153.693V154.37C562.763 155.457 562.394 156 561.655 156H539.445Z"
            fill="#CFCFCF"
          />
        </svg>

        <div className="font-normal absolute top-25 text-center">
          <h2 className="font-bold">আসসালামু আলাইকুম!</h2>
          <h4 className="leading-4">
            <span className="font-medium">রমদান মোবারক,</span> সৌহার্দ্য ও
            বন্ধুত্বের বাঁধন আরও দৃঢ় করতে, আসছে ইফতার মাহফিলে আমরা একসঙ্গে মিলিত
            হচ্ছি। তোমার উপস্থিতিই আমাদের আনন্দের পরিপূর্ণতা। তাই নির্ধারিত সময়ে
            যেন তোমাকে অবশ্যই পাই! <br />
            <span className="font-medium leading-7">অপেক্ষায় রইলাম!</span>
          </h4>
        </div>
        <div className="flex flex-col items-center mt-3">
          <Image
            className="mx-auto mb-3 border-[1px] border-gray-300 drop-shadow-sm rounded-md"
            height={300}
            width={300}
            alt="InvitationCard"
            src="/image/invitation_card.jpg"
          />
          <a
            className="px-4 py-1 rounded-full border-[1px] border-blue-300 text-[10px]"
            href="/image/invitation_card.png"
            download="invitation_card.jpg"
          >
            ইনভাইটেশন কার্ড ডাউনলোড করো
          </a>
        </div>

        <div className="text-center mt-4">
          <h2 className="text-4xl font-medium text-blue-400">নির্দেশনাবলি</h2>
          <p className="leading-4 mt-4">
            ১. মোবাইল ব্যাংকিং এর মাধ্যমে ডেলিগেট ফিঃ পরিশোদের পরে নিম্নে
            প্রদর্শিত
            <span className="font-medium"> ফরমটি</span> পূরণ করে জমা দিতে হবে।
          </p>
          <p className="leading-4 mt-4">
            ২. ফরম পূরণে ভুল হলে পেমেন্ট রিসিট বা ট্রানজেকশন আইডি নিয়ে{" "}
            <span className="font-medium"> হুয়াটসঅ্যাপে</span> জানিয়ে দিতে হবে।
          </p>
        </div>
      </section>
      <section id="qr" className="w-[80%] mx-auto mt-12">
        <h2 className="text-4xl font-medium text-blue-400 text-center">
          পেমেন্ট ডিটেইলস
        </h2>
        <CopyPhoneNumber />
        <div className="text-center mt-4">
          <Image
            className="mx-auto mb-3 border-[1px] border-gray-300 drop-shadow-sm rounded-xl"
            width={300}
            height={300}
            alt="BkashQr"
            src={"/image/bkashQr.jpg"}
          />
          <a
            className="px-4 py-1 rounded-full border-[1px] border-blue-300 text-[10px]"
            href="/image/bkashQr.jpg"
            download="bkashQr.jpg"
          >
            QR কোড ডাউনলোড করো
          </a>
        </div>
      </section>
      <section>
        <Form />
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
