import React from "react";

const Timelapse = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-center">
        <div
          className="max-w-[1000px] w-full relative"
          style={{ aspectRatio: "1/1" }}
        >
          <video
            className="w-full h-full object-contain"
            controls
            loop
            playsInline
          >
            <source src="/timelapse.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Timelapse;