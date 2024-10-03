import cta from "../assets/CTA.png";
import whiteArrow from "../assets/whiteArrow.png";

const CTA = () => {
  return (
    <div
      dir="rtl"
      style={{
        backgroundImage: `url(${cta})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "420px",
        position: "relative",
      }}
      className="min-w-full flex items-center justify-start"
    >
      {/* White Box for Text */}
      <div className="w-[45%]  bg-white p-10 rounded-lg shadow-lg mr-24 mt-10">
        <div>
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            20 ٪ من المكالمات اليوم
          </h5>
          <h1 className="text-2xl font-bold mb-4">
            احصل على خصم خاص عند اشتراكك لأول مرة في العضوية السنوية
          </h1>
          <p className="text-base text-[#616161] mb-4">
            نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم
          </p>
          <button className="flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white">
            اتصل بنا
            <img src={whiteArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
