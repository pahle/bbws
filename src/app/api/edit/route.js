import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
import prisma from "@/utils/prismaClient";

export const GET = async (req) => {
  const id = req.nextUrl.searchParams.get("id");

  const data = await prisma.dokumen.findUnique({
    where: {
      id: parseInt(id),
    },
  });

//   return json
    return new NextResponse(JSON.stringify(data), {
        status: 200,
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
