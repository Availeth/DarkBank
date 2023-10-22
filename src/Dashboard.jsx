import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css"

export const Dashboard = () => {
  return (
    <>
      <div className="bg-[#050101] w-[100vw] min-h-screen pt-[100px] flex text-white">
        <Sidebar/>
        <aside className="w-[85vw] bg-[#000000] pl-60 pb-10">
          <div className="m-10 text-white">
            <p className="">Hi Username</p>
            <p className="text-[40px]  font-pubsans">Welcome Back</p>
          </div>

          <div>
            <div className="w-[1000px] flex h-[300px] p-[20px] rounded-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-md ml-[50px] border-lime-600 border	">
              <div className="">
                <p className="mt-16">Account Balance</p>
                <p className="text-[40px]">$30,000.00</p>
              </div>
              <div>
                <div className="w-[560px] h-[200px]  rounded-xl ml-20 mt-10 bg-[#2BB32A] text-center p-4">
                  <p>Account Numer</p>
                  <p className="text-xl">1234567890</p>
                  <div className="flex">
                    <div className="w-[300px] h-14 rounded-2xl bg-black p-4 m-7 shadow-md hover:bg-green-700">
                      {" "}
                      Fund Account
                    </div>
                    <div className="w-[300px] h-14 rounded-2xl bg-black p-4 m-7 shadow-md hover:bg-green-700">
                      {" "}
                      Transfer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[1000px] overflow-auto ml-10 scrollable-element">
              <div className="w-[400px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                <p>Airtime</p>
              </div>
              <div className="w-[800px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Bills
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Betting
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Cardless
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Giftcards
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Electricity
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Internet
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Transport
              </div>
              <div className="w-[600px] h-[140px] bg-[#1b1b1b] p-[50px] ml-[50px] mt-[40px] rounded-lg">
                Borrow
              </div>
            </div>
            <p className="m-[50px] text-3xl ">Latest transactions</p>
            <div>
              <div className="w-[1000px] h-[80px] bg-[#1b1b1b] p-7 ml-[50px] mt-[20px] rounded-lg">
                <span>Today</span>
                <span className="pl-[150px]"> Randy Hicks</span>
                <span className="pl-[150px]"> Transfer</span>
                <span className="pl-[150px]"> $200</span>
              </div>

              <div className="w-[1000px] h-[80px] bg-[#1b1b1b] p-7 ml-[50px] mt-[20px] rounded-lg">
                <span>Today</span>
                <span className="pl-[150px]"> Randy Hicks</span>
                <span className="pl-[150px]"> Transfer</span>
                <span className="pl-[150px]"> $200</span>
              </div>

              <div className="w-[1000px] h-[80px] bg-[#1b1b1b] p-7 ml-[50px] mt-[20px] rounded-lg">
                <span>Today</span>
                <span className="pl-[150px]"> Randy Hicks</span>
                <span className="pl-[150px]"> Transfer</span>
                <span className="pl-[150px]"> $200</span>
              </div>

              <div className="w-[1000px] h-[80px] bg-[#1b1b1b] p-7 ml-[50px] mt-[20px] rounded-lg">
                <span>Today</span>
                <span className="pl-[150px]"> Randy Hicks</span>
                <span className="pl-[150px]"> Transfer</span>
                <span className="pl-[150px]"> $200</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
