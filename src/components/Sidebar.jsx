import { Link } from "react-router-dom";
import { IoCard , IoAppsOutline } from "react-icons/io5";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaMoneyBillTransfer , FaChartLine } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <aside className=" w-[18vw] h-[100vh] bg-[#1b1b1b] border border-t-black border-l-black border-r-green-500 fixed">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}

            <div htmlFor="my-drawer" className=" drawer-button ">
              <ul>
                <li className="flex m-4  p-2 rounded-xl  hover:bg-[#2bb32a]">
                  <RiDashboard2Fill size="1.5rem" />
                  <Link to="/dashboard" >Dashboard</Link>
                </li>
              </ul>
            </div>
            <ul>
              <li className="flex m-4 p-2 rounded-xl  hover:bg-[#2bb32a]">
                <IoCard size="1.5rem" />
                <Link to="/dashboard/cards">
                  {" "}
                  <p className="text-[1rem] p-1">Card</p>
                </Link>
              </li>
              <li className="flex m-4 p-2 rounded-xl  hover:bg-[#2bb32a]">
                <FaMoneyBillTransfer size="1.5rem" />
               <Link to="/dashboard/payments">
                <p>Payments</p>
               </Link>
              </li>
              <li className="flex m-4 p-2 rounded-xl  hover:bg-[#2bb32a]">
                <FaChartLine size="1.5rem" />
                <Link to="/dashboard/invest"> 
                <p>Invest</p>
                </Link>
              </li>
              <li className="flex m-4 p-2 rounded-xl  hover:bg-[#2bb32a]">
                <IoAppsOutline size="1.5rem" />
                <Link to="/dashboard/more">
                <p>More</p>
                </Link>
              </li>
            </ul>

            <div className="avatar mt-[35vh] pl-5">
              <div className="w-24 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXTFbGraOLnpI2kSS_rqeBHiXO6MZ8S1O7A&usqp=CAU" />
              </div>
            </div>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
              {/* Sidebar content here */}
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Transactions</a>
              </li>
              <li>
                <a>Cards</a>
              </li>
              <li>
                <a>Rates</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
