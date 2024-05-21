import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full opacity-50 h-full"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the
          next level?
              </h1>
              <p className="text-white-200 md:mt-10 my-5 ">Reach out to me today and let&apos;s discuss how I can help your achieve your goals.</p>
              <a href="mailto:antwibrian82@gmail.com" className="">
                  <MagicButton title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position="right"
                  />
              </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
              <p className="md:text-base text-sm font-light md:font-normal">Copyright ©️ 2024 Brian</p>
              <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((profile) => (
                      <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200" key={profile.id}>
                          <img src={profile.img} alt={profile.id} className="" width={20} height={20} />
                      </div>
                  ))}
              </div>
          </div>
    </footer>
  );
};

export default Footer;
