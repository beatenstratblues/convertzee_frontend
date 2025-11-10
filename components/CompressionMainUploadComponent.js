"use client";
import { useState } from "react";
import DropZone from "./DropZone";
import CompressButton from "./CompressButton";
import { useConversionStore } from "@/state/stateStore";
import LoaderComponent from "./LoaderComponent";

const CompressionMainUploadComponent = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");
  const { isConverting } = useConversionStore();
  return (
    <div className="h-full">
      {isConverting && <LoaderComponent />}
      <DropZone setUploadedUrl={setUploadedUrl} />
      <p className="mt-5 text-center text-xs">
        Maximum file size should be 200 MB
      </p>
      <CompressButton uploadedUrl={uploadedUrl} />
    </div>
  );
};

export default CompressionMainUploadComponent;
