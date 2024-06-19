"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineHeart, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from '../../../public/Logo.png';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar bg-blue-500 grid grid-cols-12 gap-2 px-4 md:px-12">
      <Link href="/" className="navbar-start col-span-2">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
      <div className="navbar-center col-span-7 lg:col-span-6 flex">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full"
          />
        </div>
      </div>
      <div className="flex-none col-span-3 lg:col-span-4 justify-end">
        <div className=" text-white justify-center items-center me-4 hidden lg:flex">
          <AiOutlineUser></AiOutlineUser>
          <span className="ml-2 text-sm">Account</span>
        </div>
        <div className="text-white justify-center items-center me-4  hidden lg:flex">
          <AiOutlineHeart/>
          <span className="ml-2 text-sm">My Items</span>
        </div>
        <Link href="/crud" className="text-white justify-center items-center me-4  hidden lg:flex">
          <AiOutlineEdit/>
          <button className="ml-2 text-sm font-bold">CRUD</button>
        </Link>
        <div className="flex text-white justify-center items-center">
          <HiOutlineShoppingBag/>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <button
              className=" text-white"
              onClick={() => setShowMenu(!showMenu)}
            >
              <AiOutlineMenu />
            </button>
          </label>
          {showMenu && (
            <ul
              tabIndex={0}
              className="z-50 mt-3 p-2 menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <div className="flex justify-start items-center">
                  <AiOutlineUser/>
                  <span className="ml-2 text-sm">Account</span>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center">
                  <AiOutlineHeart/>
                  <span className="ml-2 text-sm">My Items</span>
                </div>
              </li>
              <li>
                <Link href="/crud">
                  <div className="flex justify-start items-center">
                    <AiOutlineEdit/>
                    <span className="ml-2 text-sm">CRUD</span>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
