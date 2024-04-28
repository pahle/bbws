"use server";

import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

const Layout = ({ children }) => {
  if (!cookies().get("session")) {
    redirect("/login");
  }
  return children;
};

export default Layout;
