import React, { useState } from "react";
import Logo from "../../assets/img/logo-navbar.png";

export const Sidebar = ({ setActiveMenu }) => {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu)
  };

  return (
    <div>
      <div className="h-screen w-[300px] bg-[#6148FF]">
        <div className="h-[150px] flex justify-center items-center">
          <img src={Logo}  className="w-[70%] mr-[2rem]" alt="" />
        </div>
        <div className="flex justify-center text-white">
          <div className="flex w-full flex-col items-start">
            <button
              className={`w-full px-[2rem] h-[50px] text-left ${
                activeButton === "dashboard" ? "bg-[#489CFF]" : ""
              }`}
              onClick={() => handleMenuClick("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`w-full px-[2rem] h-[50px] text-left ${
                activeButton === "kelola-kelas" ? "bg-[#489CFF]" : ""
              }`}
              onClick={() => handleMenuClick("kelola-kelas")}
            >
              Kelola Kelas
            </button>
            <button className=" w-full h-[50px]  px-[2rem] text-left ">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};