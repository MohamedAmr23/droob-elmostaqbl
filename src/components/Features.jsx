import videoBox from "../assets/Video Box.png";
import whiteArrow from "../assets/whiteArrow.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";
import features4 from "../assets/features4.png";
const Features = () => {
  return (
    <div dir="rtl" className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div>
        <img src={videoBox} />
      </div>
      <div className="flex mt-20 w-full gap-10 items-center">
        <div className="flex justify-between items-center w-[50%]">
          <div className="">
            <h5 className="text-[#0055D2] text-xl font-bold mb-6">
              مدربين و مدرسين معتمدون
            </h5>
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              نقدم لك الدعم والمتابعة اللازمة للوصول معًا إلى أفضل النتائج.
            </h1>
            <p className="text-base text-[#616161] mb-4">
              نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
              المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
              منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
              بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
              لهذه الأحرف. خمسة{" "}
            </p>
            <button className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white">
              اعرف المزيد
              <img src={whiteArrow} />
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={features2} alt="" className="" />
          <div className="flex mt-4 gap-5 overflow-hidden">
            <img src={features4} alt="" className="w-[50%]" />
            <img src={features3} alt="" className="w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
