import { BsFillCircleFill } from "react-icons/bs";

const HeroPrevNext = () => {
  return (
    <>
      <h6 className="mr-2 text-sm text-[#1D65FF]">Previous</h6>
      <BsFillCircleFill size={8}></BsFillCircleFill>
      <BsFillCircleFill className="text-[#1D65FF]" size={12}></BsFillCircleFill>
      <BsFillCircleFill size={8}></BsFillCircleFill>
      <BsFillCircleFill size={8}></BsFillCircleFill>
      <BsFillCircleFill size={8}></BsFillCircleFill>
      <h6 className="ml-2 text-sm text-[#1D65FF]">Next</h6>
    </>
  );
};

export default HeroPrevNext;