"use client";
import React, { useState } from "react";
import ConvertPageSelectorAndButton from "@/components/ConvertPageSelectorAndButton";
import DropZone from "@/components/DropZone";
import { useConversionStore } from "@/state/stateStore";
import LoaderComponent from "./LoaderComponent";

const MainUploadComponent = ({defaultOption, specificConversionPage}) => {
  const [uploadedUrl, setUploadedUrl] = useState("");
  const {isConverting} = useConversionStore();
  return (
    <div className="h-full">
      {isConverting && <LoaderComponent />}
      <DropZone setUploadedUrl={setUploadedUrl}/>
      <p className="mt-5 text-center text-xs">
        Maximum file size should be 200 MB
      </p>
      <ConvertPageSelectorAndButton
        defaultOption={defaultOption}
        specificConversionPage={specificConversionPage}
        uploadedUrl={uploadedUrl}
      />
    </div>
  );
};

export default MainUploadComponent;
