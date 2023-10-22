import "../styles/footer.css"


const Footers = () => {
  return (
    <>
      <div className="bg-[#000] mt-[-100px] pt-[70px] pb-[10px]">
        <div className="flex m-[100px] footers">
          <div>
            <p className="font-young text-[30px]">DarkBank</p>{" "}
            <p className=" text-[#aaa9a9]">
              Discover the power of our secure and <br /> rewarding credit cards
            </p>
            <p className=" text-[#aaa9a9] pt-20 text-[12px]">
              Copyright 2023 Avslayer All Rights Reserved
            </p>
          </div>

          <div className="flex ml-[300px]">
            <div className="mr-[50px] ">
              About Us
              <div className=" text-[#aaa9a9]">
                <p>Investors</p>
                <p>Features</p>
                <p>Book a demo</p>
              </div>
            </div>
            <div className="mr-[50px]">
              Products
              <div className=" text-[#aaa9a9]">
                <p>Credits Cards</p>
                <p>Gift Cards</p>
                <p>Savings accounts</p>
                <p>NFT</p>
              </div>
            </div>
            <div className="mr-[50px]">
              Useful
              <div className=" text-[#aaa9a9]">
                <p>Free rewards</p>
                <p>Documentation</p>
                <p>Affiliate program</p>
              </div>
            </div>
            <div className="mr-[50px]">
              Social
              <div className=" text-[#aaa9a9]">
                <p>Investors</p>
                <p>Features</p>
                <p>Book a demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers