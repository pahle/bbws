import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";

export const GET = async (req, { params }) => {
  const fileName = req.nextUrl.searchParams.get("filename");
  const imgPath = "public/assets/" + fileName;
  // read image file
  const image = fs.readFileSync(imgPath, (err, data) => {
    // error handle
    if (err) {
      throw err;
    }

    // get image file extension name
    const extensionName = path.extname(imgPath);

    // convert image file to base64-encoded string
    const base64Image = Buffer.from(
      data,
      "binary"
    ).toString("base64");

    // combine all strings
    return `data:image/${extensionName
      .split(".")
      .pop()};base64,${base64Image}`;
  });

  console.log(image);

  return new NextResponse(image, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");

  console.log(file);
  if (!file) {
    return NextResponse.json(
      { error: "No files received." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );
    return NextResponse.json({
      Message: "Success",
      status: 201,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({
      Message: "Failed",
      status: 500,
    });
  }
};
