import React from "react";
import PropTypes from "prop-types";

const BlogPostCard = ({ img }) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={img} alt="" />
      <div className="flex flex-col gap-2">
        <p className="text-[#0055D2]">البرامج التأهيلية • 1 يناير2024</p>
        <h1 className="text-[#1A1A1A]">
          أحدث الدورات والتخصصات والشهادات المهنية في تصميم تجربة
        </h1>
        <p className="text-[#616161] text-wrap">
          في بعض الحالات وفي حال عدم تلقي العلاج بالوقت المناسب، يؤدي تضرر لب
          السن إلى تحلله وبالتالي إعطاء الفرصة للبكتيريا بالنمو والتكاثر مكان
          اللب، وهذه البكتيريا إلى جانب التسوس الموجود عرض المزيد
          <span className="text-[#0055D2] underline cursor-pointer">
            {" "}
            عرض المزيد
          </span>
        </p>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  img: PropTypes.node.isRequired,
};

export default BlogPostCard;
