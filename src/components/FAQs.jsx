import { useState } from "react";
import faq from "../assets/faq.png";
import faq2 from "../assets/faq2.png";
import faq3 from "../assets/faq3.png";
const FAQs = () => {
  const [toggle, setToggle] = useState(null);
  const questions = [
    {
      id: 1,
      question: "هل يمكنني تجربة المنصة اولا قبل الإشتراك؟",
      answer:
        "من المهم الاعتناء بالمريض، وأن يتبعه المريض، لكن ذلك سيحدث في وقت يكون فيه الكثير من العمل والألم.",
    },
    {
      id: 2,
      question: "ما الذي تقدمه منصة دروب المستقبل؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 3,
      question: "كيف ندفع الإشتراك؟ ",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 4,
      question: "كم عدد الدورات التي يمكنني الحصول عليها؟ ",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
    {
      id: 5,
      question: "هل يوجد محتوى مجاني على المنصة؟",
      answer: "من المهم الاعتناء بالمريض، وأن يتبعه المريض...",
    },
  ];
  const handleToggle = (id) => {
    setToggle(toggle === id ? null : id);
  };

  return (
    <div
      dir="rtl"
      className="bg-[#F9F9F9] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-center gap-10 "
    >
      <div className="flex flex-col gap-3 ">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6">
          {" "}
          الأسئلة المتكررة
        </h5>
        <h1 className="text-2xl font-bold mb-4"> الأسئلة الشائعة</h1>
        <p className="text-base text-[#616161] mb-4 min-w-[100%]">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم{" "}
        </p>
        <img src={faq} />
      </div>
      <div className="w-[60%] mt-10">
        <div className="flex flex-col gap-5">
          {questions.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              <div
                onClick={() => handleToggle(item.id)}
                className="flex justify-between items-center cursor-pointer bg-[#fff] px-4 py-4 "
              >
                <p
                  className={`${
                    toggle === item.id ? "text-[#0055D2]" : "text-black"
                  } font-bold`}
                >
                  {item.question}
                </p>
                <img
                  className={`${toggle === item.id ? "block" : "hidden"} `}
                  src={faq2}
                />
                <img
                  className={`${toggle === item.id ? "hidden" : "block"} `}
                  src={faq3}
                />
              </div>
              {toggle === item.id && (
                <p className="text-[#616161]">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
