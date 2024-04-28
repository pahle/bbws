import { auth } from "@/utils/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = () => {
  if (cookies().get("session")) {
    redirect("/");
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="bg-white border-2 text-center p-8 rounded-xl flex flex-col gap-4">
        <div className="font-bold text-3xl">
          <h1>E-ARSIP</h1>
          <h1>BBWS SERAYU OPAK</h1>
        </div>
        <form action={auth} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-start">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-start">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <input type="submit" value="Login" className="border bg-[#47648B] p-2 text-white rounded-lg"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
