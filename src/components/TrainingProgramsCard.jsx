import PropTypes from "prop-types";
// import test from '../assets/diploma-patent-svgrepo-com'
const TrainingProgramsCard = ({ icon, name, desc, button, img }) => {
  return (
    <div className="flex flex-col justify-center items-end bg-[#ffffff] py-4 px-5 pl-16">
      <img src={icon} alt="" className="w-10" />
      <div className="flex flex-col justify-center items-end w-full mt-4">
        <h2 className="text-xl w-full text-right mb-2 font-medium">{name}</h2>
        <p className="text-xs min-w-96 text-right mb-4">{desc}</p>
        <button className="flex items-center gap-2 text-[#0055D2]">
          <img src={img} alt="" /> {button}
        </button>
      </div>
    </div>
  );
};
TrainingProgramsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
};
export default TrainingProgramsCard;
