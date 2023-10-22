
const Discover = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mt-[150px] ml-[100px] z-10 static ">
          <div className="text-[50px] text-bold font-pop">
            Discover the Perfect <br /> Credit Card for You
            <img
              src="src/assets/Vector 4.png"
              className="z-0 relative bottom-[90px]"
            />
          </div>
          <div>
            <span className="bottom-[80px] relative">
              Discover the power of our secure and rewarding credit <br />{" "}
              cards. Explore our range of credit cards and take control <br />{" "}
              of your finances today.
            </span>
            <button className="bg-[#2BB32A] rounded-full px-11 py-4 mr-[400px] animate-bounce hover:bg-slate-100">
              Get Started
            </button>
            <img src="/src/assets/Frame 21.png" alt="" className="pt-[30px] " />
          </div>
        </div>

        <div className=" top-[100px] relative">
          <img src="/src/assets/Group 21.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Discover