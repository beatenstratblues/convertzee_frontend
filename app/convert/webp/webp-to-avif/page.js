import MainUploadComponent from "@/components/MainUploadComponent";
import PageHeroAndSubtextComponent from "@/components/PageHeroAndSubtextComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"WEBP to AVIF Converter"}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent
        defaultOption={"avif"}
        specificConversionPage={true}
      />
    </div>
  );
};

export default page;
