import React from "react";

const UploadLoadingBarComponent = ({ progress }) => {
  return (
    <div className="h-2">
      <div
        className={`h-full bg-amber-400`}
        style={{
          transform: `translateX(${progress - 100}%)`,
          transition: "0.5s ease-in",
        }}
      ></div>
    </div>
  );
};

export default UploadLoadingBarComponent;
