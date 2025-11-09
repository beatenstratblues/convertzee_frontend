import MainUploadComponent from "@/components/MainUploadComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"TIFF to WEBP Converter"}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent defaultOption={"webp"} specificConversionPage={true} />
    </div>
  );
};

export default page;
