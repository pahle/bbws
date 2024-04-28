"use server";

import { redirect } from "next/navigation";
import prisma from "./prismaClient";
import { createSession } from "@/utils/session";
import { cookies } from "next/headers";

export async function auth(formData) {
  try {
    const query = await prisma.user.findUnique({
      where: {
        username: formData.get("username"),
        password: formData.get("password"),
      },
    });
    if (!query) {
      throw new Error("Invalid username or password");
    }
    await createSession(query);
  } catch (error) {
    console.error(error);
  }
  redirect("/");
}

export async function logout() {
  cookies().delete("session");
  redirect("/login");
}
