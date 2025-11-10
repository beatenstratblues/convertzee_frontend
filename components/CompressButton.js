"use client";

import { useConversionStore } from "@/state/stateStore";

const CompressButton = ({ uploadedUrl }) => {
  async function buttonHandler() {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/compress/image`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl: uploadedUrl,
          options: {
            quality: 50,
          },
        }),
      }
    );
    const data = await res.json();
    const imagePath = data.compressedImageUrl.split(".");
    if (data.status == 200) {
      const imageFetch = await fetch(data.compressedImageUrl);
      setConvertedImageUrl(data.compressedImageUrl);
      const imageBlob = await imageFetch.blob();
      const blobUrl = URL.createObjectURL(imageBlob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `compressed.${imagePath[imagePath.length - 1]}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      console.log(imageFetch);
    } else {
      stopConversion();
      alert("Conversion failed.");
    }
  }

  const { startConversion, stopConversion, setConvertedImageUrl } =
    useConversionStore();

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-50"
        onClick={() => {
          buttonHandler();
          startConversion();
        }}
      >
        Compress Image
      </button>
    </div>
  );
};

export default CompressButton;
