import CompressionMainUploadComponent from "@/components/CompressionMainUploadComponent";

const page = () => {
  return (
    <div className="h-full">
      <h1 className="text-4xl text-center pt-10 md:text-6xl md:pt-15">
        Image Compressor
      </h1>
      <p className="text-center mt-3 md:text-xl">
        Easily compress images online, safely!
      </p>
      <CompressionMainUploadComponent/>
    </div>
  );
};

export default page;
