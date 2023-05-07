import React, { useContext } from "react";
import { BiMenu, BiCaretDown } from "react-icons/bi";
import { BsShare, BsSearch } from "react-icons/bs";
import "../../css/Style.css";
import { dataContext } from "../../context/Contextapi";
import { Link } from "react-router-dom";

const NavbarSm = () => {
  const { movies } = useContext(dataContext);
  return (
    <>
      <div className="flex items-center justify-between p-2 mx-2 w-full ">
        <div className="text-white">
          <h1 className="text-xl font-bold py-0.5">{movies.original_title}</h1>
        </div>
        <div className="flex text-white items-center gap-3">
          <div className=" cursor-pointer text-xl  py-1 ">
            <BsShare />
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarMd = () => {
  return (
    <>
      <div className="flex gap-1 pl-6 w-full">
        <div className="pl-5">
          <Link to="/">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="Book_my_show_logo"
              className="bg-transparent mt-2"
              style={{ height: "35px", width: "35px" }}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center w-96 gap-3 h-10 p-1 pl-2 m-2 bg-white rounded-md">
          <label>
            <BsSearch className="text-slate-700" />
          </label>
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search For movies,Events, Plays And activites..."
          ></input>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="hover:text-white text-gray-400">Ahemdabad</h3>
          <BiCaretDown className="text-white" />
        </div>
        <div className="mt-3">
          {" "}
          <Link to="/play" className="text-lg text-gray-400  hover:text-white">
            Plays
          </Link>
        </div>
        <div className="flex items-center">
          <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
            Sign in
          </button>
        </div>
        <div className="flex items-center">
          <BiMenu className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

const NavbarLg = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1">
          <div className="pl-32">
            <Link to="/">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="Book_my_show_logo"
                className="bg-transparent"
                style={{ height: "35px", width: "35px" }}
              />
            </Link>
          </div>
          <div
            className="flex items-center justify-center gap-3 h-10  pl-2 m-2 bg-white rounded-md"
            style={{ width: "550px" }}
          >
            <label>
              <BsSearch className="text-slate-700" />
            </label>
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search For movies,Events, Plays And activites"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <h3 className="hover:text-white text-gray-400">Ahemdabad</h3>
            <BiCaretDown className="text-white" />
          </div>
          <div>
            {" "}
            <Link to="/play" className="text-lg text-gray-400 hover:text-white">
              Plays
            </Link>
          </div>
          <div className="flex items-center">
            <button className="rounded-md text-white text-sm bg-red-500 p-1 px-3.5 cursor-pointer">
              Sign in
            </button>
          </div>
          <div className="flex items-center pr-32">
            <BiMenu className="text-white text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className=" w-full py-1" style={{ background: "rgb(51, 53, 69)" }}>
        <div className="sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden smNavbar">
          <NavbarSm />
        </div>
        <div className="lg:hidden md:flex sm:hidden xl:hidden 2xl:hidden MdNavbar">
          <NavbarMd />
        </div>
        <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex lgNavbar">
          <NavbarLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
