import CompressionMainUploadComponent from "@/components/CompressionMainUploadComponent";
import PageHeroAndSubtextComponent from "@/components/PageHeroAndSubtextComponent";

const page = () => {
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={"Image Compressor"}
        subtext={
          "Easily compress images online, safely!"
        }
      />
      <CompressionMainUploadComponent/>
    </div>
  );
};

export default page;
