import React from "react";
import blogPost1 from "../assets/blog-post-1.png";
import blogPost2 from "../assets/blog-post-2.png";
import blogPost3 from "../assets/blog-post-3.png";
import blogPost4 from "../assets/blog-post-4.png";
import blogPost5 from "../assets/blog-post-5.png";
import blogPost6 from "../assets/blog-post-6.png";
import blogPost7 from "../assets/blog-post-7.png";
import blogPost8 from "../assets/blog-post-8.png";
import blogPost9 from "../assets/blog-post-9.png";
import blogPost10 from "../assets/blog-post-10.png";
import blogPost11 from "../assets/blog-post-11.png";
import blogPost12 from "../assets/blog-post-12.png";
import blogPost13 from "../assets/blog-post-13.png";
import BlogPostCard from "../components/BlogPostCard";

const Blog = () => {
  const blogPostsImages = [
    blogPost2,
    blogPost3,
    blogPost4,
    blogPost5,
    blogPost6,
    blogPost7,
    blogPost8,
    blogPost9,
    blogPost10,
    blogPost11,
    blogPost12,
    blogPost13,
  ];
  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <div className=" relative ">
        {/* Image */}
        <img
          src="src/assets/blog-img.png"
          alt="Studying"
          className="w-full h-auto"
        />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            المدونة{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6">
              الرئيسية / المدونة
            </p>
          </h1>
        </div>
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-28">
        أحدث المدونات
      </h1>
      <div className="flex flex-col xl:flex-row justify-between mx-28 mb-20 gap-10">
        <div className="flex flex-col flex-1 gap-3">
          <img src={blogPost1} alt="" />
          <p className="text-[#0055D2]">البرامج التأهيلية • 1 يناير2024</p>
          <h1 className="text-[#1A1A1A]">
            أحدث الدورات والتخصصات والشهادات المهنية في تصميم تجربة
          </h1>
          <p className="text-[#616161] text-wrap">
            في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي تضرر لب
            السن إلى تحلله وبالتالي إعطاء الفرصة للبكتيريا بالنمو والتكاثر مكان
            اللب، وهذه البكتيريا إلى جانب التسوس الموجود بالأصل من شأنهما أن
            يُؤديا إلى الإصابة بالالتهاب أو خراج السن كما ذكرنا سابقًا، وهذا ما
            يجعل استئصال لب السن ضروريًا
            <span className="text-[#0055D2] underline"> عرض المزيد</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-10">
          {blogPostsImages.slice(0, 3).map((item, index) => {
            return (
              <div className="flex flex-col lg:flex-row gap-5" key={index}>
                <img src={item} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="text-[#0055D2]">تطوير الذات • 1 يناير2024</p>
                  <h1 className="text-[#1A1A1A]">
                    ماذا يجب أن تكسب: شهادة أم درجة؟
                  </h1>
                  <p className="text-[#616161] text-wrap">
                    في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي
                    تضرر لب السن إلى تحلله{" "}
                    <span className="text-[#0055D2] underline">
                      {" "}
                      عرض المزيد
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-28">
        المقالات الرئيسية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-28 gap-8 mb-20">
        {blogPostsImages.slice(3, 9).map((item, index) => {
          return <BlogPostCard key={index} img={item} />;
        })}
      </div>

      <h1 className="text-[#2C2C2C] text-3xl mt-20 mb-10 mx-28">
        المقالات الرئيسية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-28 gap-8 mb-20">
        {blogPostsImages.slice(9).map((item, index) => {
          return <BlogPostCard key={index} img={item} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
