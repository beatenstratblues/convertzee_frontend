import MainUploadComponent from "@/components/MainUploadComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"TIFF to PNG Converter"}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent defaultOption={"png"} specificConversionPage={true} />
    </div>
  );
};

export default page;
