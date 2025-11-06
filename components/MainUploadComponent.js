"use client";
import React, { useState } from "react";
import ConvertPageSelectorAndButton from "@/components/ConvertPageSelectorAndButton";
import DropZone from "@/components/DropZone";

const MainUploadComponent = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");
  return (
    <div className="h-full">
      <DropZone setUploadedUrl={setUploadedUrl}/>
      <p className="mt-5 text-center text-xs">
        Maximum file size should be 200 MB
      </p>
      <ConvertPageSelectorAndButton
        defaultOption={"jpg"}
        specificConversionPage={false}
        uploadedUrl={uploadedUrl}
      />
    </div>
  );
};

export default MainUploadComponent;
