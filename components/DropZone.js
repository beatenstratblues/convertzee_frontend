"use client";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import UploadLoadingBarComponent from "./UploadLoadingBarComponent";

const DropZone = ({ setUploadedUrl }) => {
  const [uploading, setUploading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setUploadedUrl(data.url);
      setPreviewUrl(data.url);
    } else {
      alert("Upload failed.");
    }
    setUploading(false);
  };

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      onDrop,
      maxSize: 100 * 1024 * 1024,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpg", ".jpeg"],
        "image/tiff": [".tif", ".tiff"],
        "image/avif": [".avif"],
        "image/webp": [".webp"],
      },
      maxFiles: 1,
    });

  return (
    <div
      className={`${
        isDragActive ? "bg-blue-100" : "bg-gray-50"
      } mt-12 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer w-full mx-auto md:w-4/6 lg:w-3/6 h-2/6 flex flex-col justify-center overflow-hidden`}
      {...getRootProps()}
    >
      <div className="flex-1 flex flex-col justify-center p-2">
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : acceptedFiles.length > 0 ? null : (
          <p>Drag & drop files here, or click to select files</p>
        )}
        {previewUrl && (
          <div className="border-2">
            <img
              src={previewUrl}
              alt="Preview"
              className={`mx-auto rounded-lg transition-all duration-500 ${
                uploading ? "opacity-60 blur-sm" : "opacity-100"
              }`}
              width={70}
            />
          </div>
        )}
        <input {...getInputProps()} />
      </div>
      {uploading && <UploadLoadingBarComponent />}
    </div>
  );
};

export default DropZone;
