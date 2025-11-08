import React from "react";

const UploadLoadingBarComponent = ({ progress }) => {
  return (
    <div className="h-2">
      <div
        className={`h-full bg-amber-400`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default UploadLoadingBarComponent;
