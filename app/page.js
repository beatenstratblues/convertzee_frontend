import DropZone from "@/components/DropZone";

const page = () => {
  return (
    <div className="h-full">
      <h1 className="text-4xl text-center pt-20 md:text-6xl">
        Image Converter
      </h1>
      <p className="text-center mt-3 md:text-xl">
        Easily convert images from one format to another online, safely!
      </p>
      <DropZone />
    </div>
  );
};

export default page;