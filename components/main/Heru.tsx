import React from "react";
import HeruContent from "../sub/HeruContent";

const Heru = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        loop
        muted
        className="absolute top-[-200px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeruContent />
    </div>
  );
};

export default Heru;
