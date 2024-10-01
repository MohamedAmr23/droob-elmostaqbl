import "../App.css";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  // state to control responsiive navbar
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  return (
    <nav className=" relative z-50 flex flex-row-reverse justify-between items-center text-[#0B236B] bg-white  px-6 py-4 md:px-16">
      <img
        onClick={() => nav(`/`)}
        src="src\assets\logo-black.png"
        alt=""
        className="w-80 cursor-pointer"
      />

      {/* navigation links for medium and above screens*/}

      <ul className="hidden lg:flex flex-row-reverse gap-5">
        <NavLink to="/" className="items-center">
          <h2>الرئيسية</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
        {/* <NavLink to="/" className="items-center">
          <h2>البرامج الدراسية</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink> */}
        <NavLink
          to="/study-programs"
          className="flex flex-row-reverse gap-1 items-center"
        >
          <h2>الدورات التدريبية</h2>
          <img src="src\assets\chevron-down.png" alt="" />
        </NavLink>
        <NavLink to="/who-we-are" className="items-center">
          <h2>من نحن</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
        <NavLink to="/support-and-communication" className="items-center">
          <h2>الدعم و التواصل</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
        <NavLink to="/blog" className="items-center">
          <h2>المدونة</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink>
      </ul>

      <div className="flex items-center">
        <img
          src="src\assets\menu.png"
          alt=""
          className="lg:hidden w-10 cursor-pointer"
          onClick={() => setShow(true)}
        />
      </div>

      <ul className="hidden lg:flex flex-row-reverse items-center text-[#0055D2] gap-5">
        <Link to="register">
          <button className="items-center">انضم كشريك</button>
        </Link>

        <Link to="login">
          {" "}
          <button className="items-center bg-[#0055D2] text-white font-semibold border rounded-lg py-2 px-5">
            تسجيل دخول
          </button>
        </Link>
      </ul>

      {/* navigation links for below medium screens*/}

      <div
        className={`fixed inset-0 z-50 py-8 transition-all bg-white ${
          show ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          <NavLink
            to="/"
            onClick={() => setShow(false)}
            className="items-center"
          >
            <h2>الرئيسية</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          {/* <NavLink to="/" className="items-center">
          <h2>البرامج الدراسية</h2>
          <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
        </NavLink> */}
          <NavLink
            to="/study-programs"
            className="flex flex-row-reverse gap-1 items-center"
          >
            <h2>الدورات التدريبية</h2>
            <img src="src\assets\chevron-down.png" alt="" />
          </NavLink>
          <NavLink
            to="/who-we-are"
            onClick={() => setShow(false)}
            className=" items-center"
          >
            <h2>من نحن</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <NavLink
            to="/support-and-communication"
            onClick={() => setShow(false)}
            className=" items-center"
          >
            <h2>الدعم و التواصل</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setShow(false)}
            className=" items-center"
          >
            <h2>المدونة</h2>
            <div className="h-0.5 bg-[#0055D2] mt-1 hidden"></div>
          </NavLink>
        </ul>

        <ul className="flex flex-col justify-center items-center py-10 my-5 gap-5 md:hidden">
          <Link to="register">
            <button className="items-center">انضم كشريك</button>
          </Link>

          <Link to="login">
            {" "}
            <button className="items-center text-white bg-[#0055D2] font-semibold border rounded-lg py-2 px-5">
              تسجيل دخول
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
