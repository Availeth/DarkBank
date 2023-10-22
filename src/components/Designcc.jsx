import "animate.css";

const Designcc = () => {
  return (
    <>
      <div
        className="flex px-5 pt-[150px] place-content-evenly gap-[200px]"
        id="payment"
      >
        <div className="ml-10">
          <p className="text-[40px] text-bold font-pop">
            Design your personalized <br />
            credit card.
          </p>
          <p className="text-[#c0c0c0] ">
            You have the freedom to personalize the design of
            <br /> your credit card, ensuring a truly unique experience
            <br />
            that makes you feel extraordinary
          </p>
          <div className="rounded-full bg-[#2BB32A] w-max px-8 py-4 my-5">
            Create New Card
          </div>
        </div>

        <div className="">
          <img
            src="/src/assets/Group 14.png"
            alt=""
            className="animate__animated animate__backInRight"
          />
          <img
            src="/src/assets/Star 17.png"
            alt=""
            className=" relative bottom-[330px] right-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default Designcc;
