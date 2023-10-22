import "../styles/threecards.css"

const Threecards = () => {
  return (
    <>
      <div className="flex place-content-evenly px-10">
        <div className=" w-[400px] h-[400px] rounded-3xl p-10 threecards">
          <img src="/src/assets/Frame.png" alt="" />
          <p className=" pt-10">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex mt-10">
            <div className="pr-2 rounded-full bg-white w-10 h-10"></div>
            <span className="pl-3">
              <p>Hadid Khan</p>
              <p>UIUX Designer</p>
            </span>
          </div>
        </div>

        <div className=" w-[400px] h-[400px] rounded-3xl p-10 threecards">
          <img src="/src/assets/Frame.png" alt="" />
          <p className=" pt-10">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex mt-10">
            <div className="pr-2 rounded-full bg-white w-10 h-10"></div>
            <span className="pl-3">
              <p>Hadid Khan</p>
              <p>UIUX Designer</p>
            </span>
          </div>
        </div>

        <div className=" w-[400px] h-[400px] rounded-3xl p-10 threecards">
          <img src="/src/assets/Frame.png" alt="" />
          <p className=" pt-10">
            Great session! Dani was super helpful. She shared some practical
            advice on how can lorem ip we go about refining our service
            offerings.
          </p>
          <div className="flex mt-10">
            <div className="pr-2 rounded-full bg-white w-10 h-10"></div>
            <span className="pl-3">
              <p>Hadid Khan</p>
              <p>UIUX Designer</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Threecards