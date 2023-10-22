import Sidebar from "./components/Sidebar";
import "./styles/payment.css";

export const Payments = () => {
  return (
    <>
      <div className="bg-[#050101] w-[100vw] pt-[100px] flex h-full text-white">
        <Sidebar />

        <aside className="w-[85vw] bg-[#000000] pl-60 pb-10 grid place-content-center">
          <p className=" text-center font-pop text-[120px]">Payments</p>

          <div className="stats bg-primary text-primary-content my-10">
            <div className="stat">
              <div className="stat-title">Account balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Add funds</button>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Current balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm">Withdrawal</button>
                <button
                  className="btn btn-sm ml-2"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Transfer
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-green-600 ">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg"> Send to bank Account</h3>
                    <form className="grid">
                      <label className="py-4"> Bank </label>
                      <select name="nigerian_banks">
                        <option value="access_bank">Access Bank</option>
                        <option value="gtbank">
                          Guaranty Trust Bank (GTBank)
                        </option>
                        <option value="zenith_bank">Zenith Bank</option>
                        <option value="first_bank">
                          First Bank of Nigeria
                        </option>
                        <option value="uba">
                          United Bank for Africa (UBA)
                        </option>
                        <option value="ecobank">Ecobank Nigeria</option>
                        <option value="stanbic_ibtc">Stanbic IBTC Bank</option>
                        <option value="union_bank">
                          Union Bank of Nigeria
                        </option>
                        <option value="fcmb">
                          First City Monument Bank (FCMB)
                        </option>
                        <option value="sterling_bank">Sterling Bank</option>
                      </select>

                      <label className="py-4"> Account Number </label>
                      <input
                        type="number"
                        placeholder="123456789"
                        className="input input-bordered input-success w-full max-w-xs text-black"
                      />

                      <label className="py-4"> Full Name </label>
                      <input
                        type="text"
                        placeholder="Tap here for account look up"
                        className="input input-bordered input-success w-full max-w-xs text-black"
                      />

                      <button className=" mt-10 w-[300px] h-[40px] bg-[#ffffff] rounded-sm text-black">
                        Send
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
