import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const HeroSection = () => {
  // state to control responsiive navbar
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <nav className=" relative z-50 flex flex-row-reverse justify-between items-center text-[#CCCCDD] bg-[#0B236B]  px-6 py-4 md:px-16">
        <img
          onClick={() => nav(`/`)}
          src="src\assets\logo-white.png"
          alt=""
          className="w-80 cursor-pointer"
        />

        {/* navigation links for medium and above screens*/}

        <ul className="hidden lg:flex flex-row-reverse gap-5">
          <NavLink to="/" className="items-center">
            <h2>الرئيسية</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          {/* <NavLink to="/" className="items-center">
          <h2>البرامج الدراسية</h2>
          <div className="h-0.5 bg-white mt-1 hidden"></div>
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
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          <NavLink to="/support-and-communication" className="items-center">
            <h2>الدعم و التواصل</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          <NavLink to="/blog" className="items-center">
            <h2>المدونة</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
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

        <ul className="hidden lg:flex flex-row-reverse items-center text-white gap-5">
          <Link to="register">
            <button className="items-center">انضم كشريك</button>
          </Link>

          <Link to="login">
            {" "}
            <button className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5">
              تسجيل دخول
            </button>
          </Link>
        </ul>

        {/* navigation links for below medium screens*/}

        <div
          className={`fixed inset-0 z-50 py-8 transition-all bg-[#0B236B] ${
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
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            {/* <NavLink to="/" className="items-center">
          <h2>البرامج الدراسية</h2>
          <div className="h-0.5 bg-white mt-1 hidden"></div>
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
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/support-and-communication"
              onClick={() => setShow(false)}
              className=" items-center"
            >
              <h2>الدعم و التواصل</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setShow(false)}
              className=" items-center"
            >
              <h2>المدونة</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
          </ul>

          <ul className="flex flex-col justify-center items-center py-10 my-5 gap-5 md:hidden">
            <Link to="register">
              <button className="items-center">انضم كشريك</button>
            </Link>

            <Link to="login">
              {" "}
              <button className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5">
                تسجيل دخول
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row-reverse justify-between bg-[#0B236B] text-white px-8 md:px-20">
        <div className="flex flex-col items-end pt-32 mb-8 lg:mb-0 ">
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            وصول غير محدود إلى 500+ دورة تدريبية وبرامج
          </h1>
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            شهادات معتمدة - وكلها مدرجة في اشتراكك
          </h1>
          <p className="text-right text-[8px] lg:text-[12px]">
            ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
          </p>
          <p className="text-right text-[8px] lg:text-[12px] mb-4 ">
            مجهولة برص مجموعة من الأحرف بشكل
          </p>

          <div className="flex flex-row-reverse gap-8 pt-4">
            <button className="text-[#0B236B] bg-white font-semibold border rounded-lg py-2 px-8">
              ابدأ الآن
            </button>
            <button className=" text-white font-semibold rounded">
              احجز استشارة
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="relative">
          {/* Blue Semi-Circle */}
          {/* <div className="absolute w-[450px] h-[450px] bg-[#1a2b6b] rounded-full top-[-50px] left-[-150px] lg:top-[-100px] lg:left-[-200px] z-0"></div> */}

          {/* Images */}
          <img
            src="src/assets/man.png"
            alt="Person"
            className="w-[550px] relative z-10"
          />

          <img
            src="src/assets/01.png"
            alt="Person"
            className="w-[170px] absolute top-[365px] left-[-15px] z-20"
          />

          <img
            src="src/assets/03.png"
            alt="Person"
            className="w-[190px] absolute top-[150px] left-[-30px] z-20"
          />

          <img
            src="src/assets/02.png"
            alt="Person"
            className="w-[130px] absolute top-[130px] left-[280px] z-5"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
