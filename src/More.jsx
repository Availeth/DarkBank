// import React from 'react'
import Sidebar from './components/Sidebar'

const More = () => {
  return (
    <>
      <div className="bg-[#050101] w-[100vw] pt-[100px] flex h-full text-white">
        <Sidebar />

        <aside className="w-[85vw] bg-[#000000] pl-60 pb-10 grid place-content-center">
          <p className=" text-center font-pop text-[120px]">Profile</p>

          <div className="card card-side bg-base-100 shadow-xl text-black">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXTFbGraOLnpI2kSS_rqeBHiXO6MZ8S1O7A&usqp=CAU"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p className="card-title">@ruislayer</p>
              <p>Account Number</p>
              <p className=" text-2xl ">1234567890</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <ul className="menu bg-base-600 my-28 text-green-500 w-56 rounded-box">
            <li>
              <h2 className="menu-title text-slate-50">Title</h2>
              <ul>
                <li>
                    @Rui satori
                  <a>Username</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}

export default More