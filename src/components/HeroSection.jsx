import React from "react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
