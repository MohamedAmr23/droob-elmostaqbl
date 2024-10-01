<<<<<<< HEAD
import React from "react";
import "../index.css";
import officeImg from "../assets/office.png";
import button from "../assets/button.png";
import lamp from "../assets/lamp.png";
import rocket from "../assets/rocket.png";
import { NavLink } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="about">
      {/* About Hero */}
      <div className="bg-[url('assets/about-img.png')] w-[100%] h-[500px] bg-no-repeat">
        <div className="text-white h-full flex flex-col gap-6 justify-center pr-48">
          <h1 className="font-bold text-5xl">من نحن</h1>
          <p className="font-normal">
            <NavLink to="/">
              <span className="text-gray-400 cursor-pointer">الرئيسية</span>
            </NavLink>{" "}
            / من نحن
          </p>
        </div>
      </div>

      {/* Second Part */}
      <div className="flex flex-col md:flex-row gap-16 my-20 justify-evenly">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 p-5">
          <p className="font-semibold text-[#0055D2]">
            عن مركز دروب المستقبل للتدريب والإستشارات
          </p>
          <h1 className="font-bold text-5xl leading-normal">
            مركز دروب المستقبل للتدريب والإستشارات التعليمية يهدف إلى تقديم أفضل
            الخدمات
          </h1>
          <p className="text-gray-400">
             نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ
            القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل
            عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
            الأحرف. خمسة
          </p>
          <div>
            <NavLink to="">
              <button className="flex flex-row-reverse gap-3 items-center font-semibold py-2 px-5">
                <img src={button} />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="">
          <img src={officeImg} />
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col md:flex-row gap-6 justify-evenly p-10 my-20 bg-gray-50">
        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={rocket} />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">مهتنا</h1>
            <p className="text-gray-500">
              تتمثل مهمتنا في توفير حزم السفر الفريدة والخاصة والتي تلبي
              الاحتياجات والرغبات الفردية.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={lamp} />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">رؤيتنا</h1>
            <p className="text-gray-500">
              تتمثل مهمتنا في توفير حزم السفر الفريدة والخاصة والتي تلبي
              الاحتياجات والرغبات الفردية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
=======
import React from 'react'

const WhoWeAre = () => {
  return (
    <div>WhoWeAre</div>
  )
}

export default WhoWeAre
>>>>>>> 448f919685dc21677a28c67cc28c54d5aa2039c7
