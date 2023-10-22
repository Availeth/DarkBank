import "../styles/numbers.css";
import { useRef } from "react";

const Numbers = () => {

  return (
    <div className=" py-24" id="">
      <div className=" grid place-content-center mt-[200px]">
        <div
          className=" w-[1100px] h-[200px] numberstrans flex py-5 place-content-center animate__animated animate__backInUp"
          id="numbers"
        >
          <div className="text-center px-12">
            <p className="text-[70px]">16Y</p>
            <p className="text-green-700 text-lg">Experience</p>
          </div>
          <div className="text-center px-12">
            <p className="text-[70px]">250+</p>
            <p className="text-green-700 text-lg">Merchant Partner</p>
          </div>
          <div className="text-center px-12">
            <p className="text-[70px]">18+</p>
            <p className="text-green-700 text-lg">Years Experience</p>
          </div>

          <div className="text-center px-12">
            <p className="text-[70px]">10.2k+</p>
            <p className="text-green-700 text-lg">Worldwide Clients</p>
          </div>
        </div>
      </div>
      <div className="grid place-content-center  my-[100px] ">
        <img
          src="/src/assets/logo slider.png"
          alt=""
          className="w-[1100px] h-[100px] object-contain"
        />
      </div>
    </div>
  );
}

export default Numbers;