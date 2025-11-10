import { Superballs } from "ldrs/react";
import "ldrs/react/Superballs.css";
import ImagePreviewCard from "./ImagePreviewCard";

const LoaderComponent = ({ previewUrl }) => {
  return (
    <div className="absolute top-0 left-0 z-60 w-full h-full bg-[#F9FCFE]/60 backdrop-blur-sm flex justify-center items-center flex-col">
      {(previewUrl)?<ImagePreviewCard previewUrl={previewUrl}/>:<Superballs size="120" speed="0.8" color="#5DABFF" />}
    </div>
  );
};

export default LoaderComponent;
