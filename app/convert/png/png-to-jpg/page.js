import MainUploadComponent from "@/components/MainUploadComponent";

const page = () => {
  return (
    <div className="h-full">
      <h1 className="text-4xl text-center pt-10 md:text-6xl md:pt-15">
        PNG to JPG Converter
      </h1>
      <p className="text-center mt-3 md:text-xl">
        Easily convert images from one format to another online, safely!
      </p>
      <MainUploadComponent
        defaultOption={"jpg"}
        specificConversionPage={true}
      />
    </div>
  );
};

export default page;
