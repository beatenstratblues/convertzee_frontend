import MainUploadComponent from "@/components/MainUploadComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"WEBP to TIFF Converter"}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent defaultOption={"tiff"} specificConversionPage={true} />
    </div>
  );
};

export default page;
