import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, Line, Doughnut} from "react-chartjs";

import { Bar, Line } from "react-chartjs-2";
import Sidebar from "./Sidebar";
import sourceData from "../data/sourceData.json";


const Invest = () => {
  return (
    <>
      <div className="bg-[#050101] w-[100vw] pt-[100px] flex h-full text-white">
        <Sidebar />
        <aside className="w-[85vw] bg-[#000000] pl-60 pb-40 grid place-content-center">
          <p className=" text-center font-pop text-[120px]">Stocks</p>

          <div className="stats shadow my-20">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Loss</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Profit</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">11% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXTFbGraOLnpI2kSS_rqeBHiXO6MZ8S1O7A&usqp=CAU" />
                  </div>
                </div>
              </div>
              <div className="stat-value">100,000</div>
              <div className="stat-title">Stocks</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
          <div className="w-[800px] h-[500px] bg-[#363535] p-10 rounded-lg mt-2">
            <Line
              data={{
                labels: sourceData[0].map((data) => data.label),
                datasets: [
                  {
                    label: "Profit",
                    data: sourceData[0].map((data) => data.value),
                    backgroundColor: ["RGB(255 255 255)"],
                    borderRadius: 15,
                    borderColor: ["RGB(43 179 42)"],
                  },
                  {
                    label: "Loss",
                    data: sourceData[1].map((data) => data.value),
                    backgroundColor: ["RGB(255 255 255)"],
                    borderColor: ["RGB(172 7 158)"],
                    borderRadius: 15,
                  },
                ],
              }}
            />

            <div className="my-40">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="text-white">
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>TSLA</th>
                      <td>TESLA INC.</td>
                      <td>245.65</td>
                      <td>+3.54</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th>AAPL</th>
                      <td>APPLE</td>
                      <td>$300</td>
                      <td>+10</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>GOGL</th>
                      <td>GOOGLE INC.</td>
                      <td>$1000</td>
                      <td>+200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Invest;
