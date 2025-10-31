import ConvertPageSelectorAndButton from "@/components/ConvertPageSelectorAndButton";
import DropZone from "@/components/DropZone";

const page = () => {
  return (
    <div className="h-full">
      <h1 className="text-4xl text-center pt-10 md:text-6xl md:pt-15">
        AVIF to WEBP Converter
      </h1>
      <p className="text-center mt-3 md:text-xl">
        Easily convert images from one format to another online, safely!
      </p>
      <DropZone />
      <p className="mt-5 text-center text-xs">Maximum file size should be 200 MB</p>
      <ConvertPageSelectorAndButton defaultOption={"WEBP"} specificConversionPage={true}/>
    </div>
  );
};

export default page;
