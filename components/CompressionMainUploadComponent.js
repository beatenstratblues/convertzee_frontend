"use client";
import { useState } from "react";
import DropZone from "./DropZone";
import CompressButton from "./CompressButton";

const CompressionMainUploadComponent = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");
  return (
    <div className="h-full">
      <DropZone setUploadedUrl={setUploadedUrl} />
      <p className="mt-5 text-center text-xs">
        Maximum file size should be 200 MB
      </p>
      <CompressButton uploadedUrl={uploadedUrl} />
    </div>
  );
};

export default CompressionMainUploadComponent;
