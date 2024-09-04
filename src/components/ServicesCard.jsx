import React from "react";
import { services } from "../constants";
import styles from "../style";

const ServicesCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 cursor-pointer rounded-[20px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className={`flex-1 flex flex-col ml-3`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export default ServicesCard;
