import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart", link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-blue-950 text-white px-8 py-4 items-center justify-between ">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://cdn-icons-png.flaticon.com/128/10433/10433849.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">BookHeaven</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <Link to={items.link}
                className='hover:text-blue-200 transition-all duration-300'
                key={i}>
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex gap-4'>
            <Link to="/LogIn" className='px-4 py-1 border border-blue-200 rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300'>LogIn</Link>
            <Link to="/SignUp" className='px-4 py-1 bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300'>SignUp</Link>

          </div>
          <button className='block md:hidden text-white text-2xl hover:text-zinc-400'
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")}>
            <MdOutlineSegment />
          </button>
        </div>
      </nav>
      <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full x-40 flex flex-col items-center justify-center`}>
        {links.map((items, i) => (
          <Link to={items.link}
            className={`${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-blue-200 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
              }>
            {items.title}{" "}
          </Link>
        ))}

        <Link to="/LogIn" className={`${MobileNav} px-8 py-2 mb-8 text-3xl pfont-semibold border text-white border-blue-200 rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300`}>LogIn</Link>
        <Link to="/SignUp" className={`${MobileNav} px-8 py-2 mb-8 text-3xl pfont-semibold bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300`}>SignUp</Link>

      </div>
    </>

  );
};

export default Navbar