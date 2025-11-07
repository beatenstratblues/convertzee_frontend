"use client";

const CompressButton = ({ uploadedUrl }) => {
  async function buttonHandler() {
    const res = await fetch(`http://localhost:4000/api/compress/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: uploadedUrl,
        options: {
          quality: 50,
        },
      }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center mt-6">
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-50" onClick={buttonHandler}>
        Compress Image
      </button>
    </div>
  );
};

export default CompressButton;
