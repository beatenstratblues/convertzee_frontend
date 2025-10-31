"use client";
import { useDropzone } from "react-dropzone";

function onDrop(acceptedFiles) {
  console.log(acceptedFiles);
}

const DropZone = () => {
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
    <section className="mt-8 p-8 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer">
      <div
        {...getRootProps()}
        className={isDragActive ? "bg-blue-100" : "bg-gray-50"}
      >
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files</p>
      </div>
      <ul className="mt-4">
        {acceptedFiles.map((file) => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DropZone;
