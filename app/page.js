import MainUploadComponent from "@/components/MainUploadComponent";
import PageHeroAndSubtextComponent from "@/components/PageHeroAndSubtextComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"Image Converter"}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent
        defaultOption={"jpg"}
        specificConversionPage={false}
      />
    </div>
  );
};

export default page;
