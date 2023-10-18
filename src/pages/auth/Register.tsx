/** @format */

import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import imgs from "../../assets/undraw_weather_re_qsmd (1).svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex items-center justify-between">
      <div className="w-[699px] h-[661px]  flex items-center justify-center">
        <img src={imgs} alt="loading..." className="h-[300px]" />
      </div>
      <div className="w-[665px] h-[661px] bg-white">
        <div className="flex items-center justify-end mt-5">
          <span className="flex items-center justify-center text-[18px] font-bold">
            Already have an account?
          </span>
          <Link to={"/sign-in"}>
            <p className="w-[130px] h-[30px] rounded-full border flex items-center justify-center text-[20px] font-bold ml-3">
              SIGN IN
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center flex-col mt-7">
          <span className="text-[20px] font-bold">Reigster your account</span>
          <div className="mt-5 pl-5">
            <span className="text-[25px] font-bold ">E-mail</span>
            <input
              type="text"
              placeholder="Enter your E-mail"
              className="outline-none w-[640px] h-[40px] bg-white border-[#004AAD] border pl-4 rounded-md"
            />
            <p className="flex items-center justify-end mr-5 text-[red]">
              Error
            </p>
          </div>
          <div className="mt-5 pl-5">
            <span className="text-[25px] font-bold pl-3">Password</span>
            <input
              type="text"
              placeholder="Enter your Password"
              className="outline-none w-[640px] h-[40px] bg-white border border-[#004AAD] rounded-md pl-4"
            />
            <p className="flex items-center justify-end mr-5 text-[red]">
              Error
            </p>
          </div>
          <button className=" w-[200px] h-[60px] flex items-center justify-center bg-[#004AAD] rounded-full text-[23px] font-bold text-white mr-56 mt-5">
            Sign up
          </button>
          <div className="flex mt-5 items-center justify-center">
            <span className="mr-4 text-[20px] font-bold">
              Create account with
            </span>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center mr-3">
              <FcGoogle size={30} />
            </p>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center">
              <SiFacebook size={30} style={{ color: "blue" }} />
            </p>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center ml-3">
              <BsLinkedin size={30} style={{ color: "blue" }} />
            </p>
            <p className="w-[50px] h-[50px] rounded-full border flex items-center justify-center ml-6">
              <RiTwitterXFill size={30} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
