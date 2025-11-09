import CardComponent from "@/components/CardComponent";
import PageHeroAndSubtextComponent from "@/components/PageHeroAndSubtextComponent";

const page = () => {
  return (
    <div>
      <PageHeroAndSubtextComponent heading={"Image Conversions"} subtext={"Select an image conversion from the list below."} />
      <div className="flex flex-wrap gap-3 mt-6 md:mt-10 justify-between">
        <CardComponent type={"PNG"} list={["JPG", "WEBP", "AVIF", "TIFF"]} />
        <CardComponent type={"JPG"} list={["PNG", "WEBP", "AVIF", "TIFF"]} />
        <CardComponent type={"WEBP"} list={["JPG", "PNG", "AVIF", "TIFF"]} />
        <CardComponent type={"AVIF"} list={["JPG", "WEBP", "PNG", "TIFF"]} />
        <CardComponent type={"TIFF"} list={["JPG", "WEBP", "AVIF", "PNG"]} />
      </div>
    </div>
  );
};

export default page;
