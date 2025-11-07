import { NextResponse } from "next/server";
import cloudinary from "../../../configs/Cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    let imageBuffer = Buffer.from(await file.arrayBuffer());

    let base64String = imageBuffer.toString("base64");

    let dataURI = `data:${file.type};base64,${base64String}`;

    const uploadResponse = await cloudinary.uploader.upload(dataURI, {
      folder: "raw",
    });


    return NextResponse.json({
      success: true,
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}
