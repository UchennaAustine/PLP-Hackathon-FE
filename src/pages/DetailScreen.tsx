import { FiSearch } from "react-icons/fi";

const DetailScreen = () => {
  return (
    // container
    <div className="w-full h-full bg-[#FFFFFF] flex ">
      {/* main */}
      <div className="w-full h-full  flex flex-col items-center">
        {/* mini header */}
        <div className="h-[60px] w-full bg-[#F2F2F2] flex justify-center items-center ">
          <div className="w-[400px] h-[40px] border rounded bg-[#ebe5e5]  flex items-center">
            <input
              placeholder="Enter the city name...."
              type="text"
              className=" w-[90%] h-full outline-none border-none rounded pl-[5px]"
            />
            <FiSearch className="text-[25px]  ml-[5px]" />
          </div>
        </div>
        <div className="w-[75%] h-[500px] bg-slate-400">
          {/* part A */}
          <div className="h-[40%] w-full flex">
            <div className="w-[40%] ">
              <span>Oct 18, 04:35pm</span>
              <span>Ifo, NG</span>
              <div>
                <TiWeatherShower />
                <span>31°C</span>
                <span>Feels like 36°C. Light rain. Light breeze</span>
                <div>
                  <div>
                    <TiWeatherDownpour />
                    <span>0.13mm</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] bg-white flex justify-center items-center">
              <div className="border w-[450px] h-[180px] rounded shadow-sm"></div>
            </div>
          </div>
          {/* part B */}
          <div className="h-[60%] w-full  bg-[silver] "></div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
