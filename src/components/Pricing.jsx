import PricingCard from "./PricingCard.jsx";

const Pricing = () => {
  return (
    <div
      dir="rtl"
      className=" bg-gradient-to-b from-custom-blue-start to-custom-blue-end h-[500px] "
    >
      <div className="text-center text-white pt-10">
        <h5 className=" text-sm mb-6 text-[#E4E4E4]">
          قيمة مضاعفة لسعر الإشتراك
        </h5>
        <h1 className="text-2xl font-bold mb-20 leading-9">
          {" "}
          استثمر في مستقبلك بأسعار تنافسية <br />
          وبدون أي مفاجآت أو تكاليف إضافية.
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-10 items-center">
        <PricingCard
          title={"برنامج التعلم الفردي"}
          semiTitle={"تعلم موضوعا أو مهارة واحدة واكسب بيانات اعتماد"}
          pricing={"99"}
          desc={"إعادة ضمان المال"}
        />
        <PricingCard
          most={" الأكثر شيوعا"}
          title={"دروب بلس شهريا"}
          semiTitle={"أكمل دورات متعددة واكسب أوراق اعتماد على المدى القصير"}
          pricing={"150"}
          desc={"احصل على شهادة عند الانتهاء بعد انتهاء الفترة التجريبية"}
        />
        <PricingCard
          title={"دروب بلس السنوي"}
          semiTitle={
            "الجمع بين المرونة والادخار مع أهداف التعلم على المدى الطويل"
          }
          pricing={"200"}
          desc={"ادخر عندما تدفع مقدما للسنة"}
        />
      </div>
    </div>
  );
};

export default Pricing;
