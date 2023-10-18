/** @format */

import bg from "../assets/mountains.svg";
const Hero = () => {
  return (
    <>
      <div
        className="w-[100%] h-[90vh] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
};

export default Hero;
