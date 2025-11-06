import { NextResponse } from "next/server";
import cloudinary from "../../../configs/Cloudinary";

export async function POST(req) {
  try {
    const { file } = await req.json();

    const uploadResponse = await cloudinary.uploader.upload(file, {
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
