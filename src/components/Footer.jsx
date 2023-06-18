import { footerList } from "@/utils/FooterData";
import React from "react";
import SS from "../../public/SS.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsDribbble, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-700 text-white">
        {footerList?.map(({ title, itemList }) => (
          <div>
            <span className="footer-title">{title}</span>
            {itemList?.map((item) => (
              <a className="link link-hover">{item}</a>
            ))}
            {title === "Help" && (
              <div>
                <div className="p-2 border-2 border-white rounded-full flex gap-2">
                  <Image src={SS} alt="ss" />
                  <p>Download the SnipShop App</p>
                </div>
                <div className="flex gap-3 mt-4 text-lg justify-start">
                  <FaInstagram></FaInstagram>
                  <BsFacebook></BsFacebook>
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                  <BsDribbble></BsDribbble>
                  <BsPinterest></BsPinterest>
                </div>
              </div>
            )}
          </div>
        ))}
      </footer>
      <footer className="footer px-10 py-4 bg-blue-950 text-white">
        <div className="items-center grid-flow-col">
          <p>© 2021-2023 SnipShop.com</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>Terms of use</a>
            <a>Privacy</a>
            <a>Interest-based ads</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
