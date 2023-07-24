import React from "react";
import { Button, Countdown } from "../landing/Home";
import { motion } from "framer-motion";
// import openImg from "../assets/open.png";

const Header = () => {
  const recentSearches = [
    "Machine Learning",
    "Data Science",
    "Blockchain dApps",
  ];

  return (
    <>
      <div
        className="flex h-[140vh] -mt-32 bg-cover justify-start bg-black"
        style={
          {
            // backgroundImage: `url('/blo.png')`,
            // "background-repeat": "no-repeat",
          }
        }
      >
        <div className="video-container">
          <video src={"/movie.mp4"} autoPlay loop muted id="myVideo" />
        </div>

        <div className="content w-screen">
            <div className="pl-12">
              <h1 className="text-8xl font-light text-white">
                Find the most trusted{" "}
                <span className="text-thin italic">
                  {" "}
                  <br /> freelance{" "}
                </span>{" "}
                services <br /> for your business
              </h1>
            </div>
            <div className="w-screen  ml-12 mt-12">
                <Button text={"Explore"} />
            </div>
        </div>


      </div>
    </>
  );
};

export default Header;
