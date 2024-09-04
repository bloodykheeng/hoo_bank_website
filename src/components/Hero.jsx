import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import gasNoBg from "../assets/elevate-pesa/blue_gas-removebg-preview.png";
import gasJarsNoBg from "../assets/elevate-pesa/3d-rendering-gas-cylinder-removebg-preview.png";
import GetStarted from "./GetStarted";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:pax-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            {/* The Next <br className="sm:block hidden" /> */}
            <span className="text-gradient">Elevate Pesa</span>{" "}
          </h1>

          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h2 className="font-poppins font-semibold w-full text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
          Order Gas Water & More
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get the best gas and water brands delivered right to your doorstep.
          Download our app on Apple and Google Play for easy ordering and
          tracking.
        </p>

        <div className="flex flex-row mt-6 space-x-4">
          <a
            href="tel:+256751523232"
            className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg p-3"
          >
            <FaPhoneAlt className="mr-2" />
            Call Us
          </a>
          <a
            href="https://wa.me/256751523232"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white bg-green-600 hover:bg-green-700 rounded-lg p-3"
          >
            <FaWhatsapp className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={gasNoBg}
          alt="gas"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient"></div>
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
