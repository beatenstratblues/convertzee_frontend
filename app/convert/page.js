import CardComponent from "@/components/CardComponent";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-4xl pt-4 md:pt-15">Image Conversions</h1>
      <p className="text-center mt-3 md:text-lg">
        Select an image conversion from the list below.
      </p>
      <p className="text-center mt-4 text-xs">
        We are new to the Game, more conversions coming soon!! : )
      </p>
      <div className="flex flex-wrap gap-3 mt-6 md:mt-10 justify-between">
        <CardComponent type={"PNG"} list={["JPG", "WEBP", "AVIF", "TIFF"]} />
        <CardComponent type={"JPEG"} list={["PNG", "WEBP", "AVIF", "TIFF"]} />
        <CardComponent type={"WEBP"} list={["JPG", "PNG", "AVIF", "TIFF"]} />
        <CardComponent type={"AVIF"} list={["JPG", "WEBP", "PNG", "TIFF"]} />
        <CardComponent type={"TIFF"} list={["JPG", "WEBP", "AVIF", "PNG"]} />
      </div>
    </div>
  );
};

export default page;
