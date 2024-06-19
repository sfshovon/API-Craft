import { footerList } from "@/utils/FooterData";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDribbble, BsFacebook, BsPinterest } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('../../public/Footer-bg.png')]">
      <footer className="footer py-10 px-4 md:px-36 bg-blue-700 opacity-90 text-white">
      {
        footerList?.map(({ title, itemList }) => (
          <div key={title}>
            <span className="footer-title">{title}</span>
            {
              itemList?.map((item) => (
                <a key={item} className="link link-hover">
                  {item}
                </a>
              ))
            }
            {
              title === "Help" && (
                <div>
                  <div className="p-2 border-2 border-white rounded-full flex gap-2">
                    <Image src="/SS.png" width={22} height={22} alt="ss" alt="" />
                    <p>Download the SnipShop App</p>
                  </div>
                  <div className="flex gap-3 mt-4 text-lg justify-start">
                    <FaInstagram />
                    <BsFacebook />
                    <AiFillTwitterCircle />
                    <BsDribbble />
                    <BsPinterest />
                  </div>
                </div>
              )
            }
          </div>
        ))
      }
      </footer>
      <footer className="footer px-4 md:px-32 py-4 bg-blue-950 text-white">
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