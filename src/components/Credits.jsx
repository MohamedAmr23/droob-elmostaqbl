import credit1 from "../assets/credit1.png";
import credit2 from "../assets/credit2.png";
import credit3 from "../assets/credit3.png";
import credit4 from "../assets/credit4.png";
import credit5 from "../assets/credit5.png";
import credit6 from "../assets/credit6.png";
import credit7 from "../assets/credit7.png";
export const Credits = () => {
  const images = [
    { img: credit1 },
    { img: credit2 },
    { img: credit3 },
    { img: credit4 },
    { img: credit5 },
    { img: credit6 },
    { img: credit7 },
  ];
  return (
    <div className=" py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] m-auto bg-[#F0F0F0]">
      <div className="text-center">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6"> الاعتمادات</h5>
        <h3 className="text-2xl font-bold mb-10">
          نـفتخر بأننا على مستوى ثقة عملائنا وتطلعاتهم
        </h3>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-4 cursor-pointer">
        {images.map((item, index) => (
          <img key={index} src={item.img} className="w-[13%]" />
        ))}
      </div>
    </div>
  );
};
