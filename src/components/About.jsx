import Wrapper from '../assets/Wrapper.png';
import wrapper2 from '../assets/wrapper2.png';
import whiteArrow from '../assets/whiteArrow.png';

const About = () => {
  return (
    <div dir='rtl' className='flex flex-col lg:flex-row items-center py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-5'>
      {/* right side */}
      <div className='w-full lg:w-[60%] text-center lg:text-right'>
        <h5 className='text-[#0055D2] text-xl font-bold mb-6'>
          عن مركز دروب المستقبل للتدريب و الإستشارات
        </h5>
        <h1 className='text-2xl font-bold mb-4'>
          مجموعة من الدورات التدريبية والكورسات المتنوعة لتعزيز معارفك وتحسين أدائك المهني.
        </h1>
        <p className='text-base text-[#616161] mb-4'>
          نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
        </p>
        <button className='flex gap-3 items-center bg-[#0055D2] py-3 px-6 border rounded-xl text-white mx-auto lg:mx-0'>
          تعلم المزيد <img src={whiteArrow} alt='arrow' />
        </button>
      </div>
      {/* left side */}
      <div className='hidden lg:flex gap-3'>
        <img className='w-60 h-80' src={Wrapper} alt='wrapper1' />
        <img className='w-60 h-80' src={wrapper2} alt='wrapper2' />
      </div>
    </div>
  );
};

export default About;
