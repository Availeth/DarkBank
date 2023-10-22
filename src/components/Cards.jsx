import "../styles/cards.css"
import Sidebar from "./Sidebar";
import { FaCcVisa } from "react-icons/fa6";
import { IoCard, IoAppsOutline } from "react-icons/io5";





const Cards = () => {
  return (
    <>
      <div className="bg-[#050101] w-[100vw] pt-[100px] flex h-full text-white">
        <Sidebar />

        <aside className="w-[85vw] bg-[#000000] pl-60 pb-10">
          <p className=" text-center font-pop text-[120px]">Cards</p>
          <div>
            <div className="w-[500px] flex rounded-xl ml-[300px] mt-20 h-[280px] bg-gradient-to-r from-green-500 to-green-700 p-6">
              <div className="grid ">
                <p className="font-young">DarkBank</p>
                <span className="mt-[150px]">
                  <p className="">Card Number</p>
                  <p className="text-[20px]">****2345</p>
                </span>
              </div>
              <div className="  ml-[225px]">
                <img
                  src="/src/assets/README.png"
                  width="200px"
                  alt=""
                  className=" "
                />
                <FaCcVisa size="90px" className="mt-[60px] mx-6" />
              </div>
            </div>

            <details className="collapse ml-[300px]">
              <summary className="collapse-title text-xl font-medium">
                Show card details
              </summary>
              <div className="collapse-content">
                <div className=" grid ">
                  <label htmlFor="number">Card Number</label>
                  <input
                    type="number"
                    placeholder="2222 3333 4444 5555"
                    className="input input-bordered border-green-500 w-[500px] max-w-xs mb-10  text-black"
                    disabled
                  />
                  <label htmlFor="number">CVV</label>
                  <input
                    type="number"
                    placeholder="217"
                    className="input input-bordered border-green-500 w-full max-w-xs mb-10"
                    disabled
                  />

                  <label htmlFor="number">Expiry</label>
                  <input
                    type="number"
                    placeholder="10/o5"
                    className="input input-bordered border-green-500 w-full max-w-xs mb-10"
                    disabled
                  />
                </div>
              </div>
            </details>
            <div className="grid place-content-center ml-[100px]">
              <p>CURRENT BALANCE</p>
              <p className="text-[50px]">$10.79</p>
            </div>

            <div className="grid place-content-center">
              <div className="flex">
                <IoCard size="1.5rem" className="m-10" />
                <p className="m-10">You funded your card</p>
                <p className="m-10">$16.28</p>
                <p></p>
              </div>

              <div className="flex">
                <IoCard size="1.5rem" className="m-10" />
                <p className="m-10">You funded your card</p>
                <p className="m-10">$16.28</p>
                <p></p>
              </div>

              <div className="flex">
                <IoCard size="1.5rem" className="m-10" />
                <p className="m-10">You funded your card</p>
                <p className="m-10">$16.28</p>
                <p></p>
              </div>

              <div className="flex">
                <IoCard size="1.5rem" className="m-10" />
                <p className="m-10">You funded your card</p>
                <p className="m-10">$16.28</p>
                <p></p>
              </div>

              <div className="flex">
                <IoCard size="1.5rem" className="m-10" />
                <p className="m-10">You funded your card</p>
                <p className="m-10">$16.28</p>
                <p></p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Cards