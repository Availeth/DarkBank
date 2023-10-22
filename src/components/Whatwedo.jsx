
const Whatwedo = () => {
  return (
    <div id="payments" className="py-24">
      <div className="text-center text-5xl font-pop" id="services">
        What do we offer?
      </div>

      <div className="grid grid-cols-3 pt-11 px-20">
        <div className="flex px-10">
          <div>
            <img src="/src/assets/f.png" alt="" />
          </div>
          <div className="pl-3" id="services">
            <span className="text-[30px]">Security</span>
            <br />
            <p>Your data and funds will be securely protected.</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src="/src/assets/f.png" alt="" />
          </div>
          <div className="pl-3">
            <span className="text-[30px]">Investing</span>
            <br />
            <p>Your data and funds will be securely protected.</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src="/src/assets/f.png" alt="" />
          </div>
          <div className="pl-3">
            <span className="text-[30px]">Multiple method</span>
            <br />
            <p>Your data and funds will be securely protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo