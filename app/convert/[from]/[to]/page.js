import MainUploadComponent from "@/components/MainUploadComponent";
import PageHeroAndSubtextComponent from "@/components/PageHeroAndSubtextComponent";

const page = async ({ params }) => {
    const {from, to} = await params;
  return (
    <div className="h-full">
      <PageHeroAndSubtextComponent
        heading={`${from.toUpperCase()} to ${to.toUpperCase()} Converter`}
        subtext={
          "Easily convert images from one format to another online, safely!"
        }
      />
      <MainUploadComponent
        defaultOption={to}
        specificConversionPage={true}
      />
    </div>
  );
};

export default page;
