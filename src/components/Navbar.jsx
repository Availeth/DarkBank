// import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
// import Numbers from "./Numbers";
// import { useRef } from "react";

const Navbar = () => {
  const handleScroll = () => {
    const targetComponent = document.getElementById("targetComponent");

    if (targetComponent) {
      window.scrollTo({
        top: targetComponent.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
    
      <div className="flex pt-11 fixed text-white navblur z-50">
        <div className="pl-[150px]">
          <NavLink to="/"> <p className="font-young text-[30px]" >DarkBank</p></NavLink>
          </div>
        <div className="flex">
          <div className="pl-[15em]">
            <a href="#numbers">
            <span className="pr-10">Why Us</span>
            </a>
            <a href="#services">
            <span className="pr-10">Services</span>
            </a>

            <a href="#process">
            <span className="pr-10">Our Process</span>
            </a>
            <a href="#payment">
            <span className="pr-10">Payment</span>
            </a>

            <a href="#faq">
            <span className="pr-10">FAQs</span>
            </a>
            <span className="rounded-full ml-[200px] px-5 py-2 border-2 border-[#2BB32A] w-2 h-2">
              <NavLink to="/login">
                Login
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar