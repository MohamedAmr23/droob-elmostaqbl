import React from "react";
import Card from "../components/Card";
import business_course from "../assets/business_course.png";
import Rating from "../assets/Rating.png";
import accounting from "../assets/accounting_course.png";
import mobile from "../assets/mobile-course.png";
import english from "../assets/english_course.png";

const StudyPrograms = () => {
  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <div className=" relative ">
        {/* Image */}
        <img
          src="src/assets/studying.png"
          alt="Studying"
          className="w-full h-auto"
        />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            برامج الدبلوم{" "}
            <p className="text-white text-sm font-thin mt-6">
              الرئيسية / برامج العلوم / الدورات التدريبية
            </p>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 mx-10 gap-3">
        <h1 className="text-[#2C2C2C] text-4xl font-bold">
          أحدث الدورات التدريبية
        </h1>
        <p className="text-center text-[#616161] ">
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
          المطابع ودور النشر. كان لوريم إيبسوم{" "}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-16">
        {/* Card 1 */}
        <Card
          icon={business_course}
          name="دورة إدارة الأعمال"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="60 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 2 */}
        <Card
          icon={english}
          name="دورة اللغة الإنجليزية من الصفر"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="20 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 3 */}
        <Card
          icon={mobile}
          name="دورة تطوير تطبيقات الهاتف"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="80 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 4 */}
        <Card
          icon={accounting} // Course image
          name="دورة المحاسبة المالية"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          // Button icon
          price="60 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 5 */}
        <Card
          icon={business_course}
          name="دورة إدارة الأعمال"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="60 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 6 */}
        <Card
          icon={english}
          name="دورة اللغة الإنجليزية من الصفر"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="20 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 7 */}
        <Card
          icon={mobile}
          name="دورة تطوير تطبيقات الهاتف"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          price="80 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />

        {/* Card 8 */}
        <Card
          icon={accounting} // Course image
          name="دورة المحاسبة المالية"
          desc=" نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ."
          button="عرض البرنامج"
          // Button icon
          price="60 رس"
          img={Rating}
          date="يبدأ اليوم في 09.30 -12.00"
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-between md:mx-16 my-8 ">
        <button className="px-4 py-2 border bg-[#F8FBFB] text-[#0055D2] rounded mx-2">
          &lt;&lt; التالي
        </button>

        <div className="bg-white border rounded-lg w-[100px]]">
          <button className="hidden md:inline px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            4
          </button>

          <button className="px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            3
          </button>

          <button className="px-4 py-2 text-[#0055D2] font-semibold rounded mx-2">
            2
          </button>

          <button className="px-4 py-2 text-white bg-[#0055D2] font-semibold rounded mx-2">
            1
          </button>
        </div>

        <button className="px-4 py-2 border bg-[#F8FBFB] text-[#0055D2] rounded mx-2">
          السابق&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default StudyPrograms;
