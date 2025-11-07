"use client";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const DropZone = ({ setUploadedUrl }) => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);

    setUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64 = reader.result;

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: base64 }),
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
    <section
      className={`${
        isDragActive ? "bg-blue-100" : "bg-gray-50"
      } mt-12 p-8 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer w-6/6 mx-auto md:w-4/6 lg:w-3/6 h-2/6 flex flex-col items-center justify-center `}
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {acceptedFiles.length > 0 ? (
          <aside className="mt-4">
            <h4 className="font-semibold">Selected file:</h4>
            <ul>
              {acceptedFiles.map((file) => (
                <li key={file.path}>
                  {file.path} - {(file.size / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
          </aside>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop files here, or click to select files</p>
        )}
      </div>

      {previewUrl && (
        <div className="mt-6">
          <img
            src={previewUrl}
            alt="Preview"
            className={`mx-auto rounded-lg transition-all duration-500 ${
              uploading ? "opacity-60 blur-sm" : "opacity-100"
            }`}
            width={50}
          />
          {uploading && (
            <p className="text-blue-600 mt-2 animate-pulse">
              Uploading to Cloudinary...
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default DropZone;
