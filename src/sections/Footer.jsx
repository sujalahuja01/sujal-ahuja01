import { mySocials } from "../constants";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../components/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mt-20 md:mt-30 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-[#CBACF9]">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center px-1">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:sujalahuja150@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mx-5 flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Sujal Ahuja
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4">
          {mySocials.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href}>
                <img src={info.icon} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
