"use client";

import useAuth from "@/components/useAuth";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const { push } = useRouter();
  const  {users}  = useAuth();

  const getUser = (d) => {
    const targetUser = users?.find((user: any) => user.email === d.email);
    return targetUser;
  };

  const onSubmit: SubmitErrorHandler<any> = async (d) => {
    const targetUser = getUser(d);

    if (!targetUser) toast.error("Bad request");

    if (targetUser.password !== d.password) toast.error("Invalid creds");

    push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40vw] h-[50vh] border border-gray-300 rounded-md p-4 flex flex-col gap-5 overflow-auto"
      >
        <h2 className="text-center font-bold text-xl">Login</h2>

        <input
          {...register("email")}
          className="myInputs"
          placeholder="email"
          type="email"
        ></input>
        <input
          {...register("password")}
          className="myInputs"
          placeholder="password"
          type="password"
        ></input>

        <button className="text-white mt-auto bg-black py-1 px-2 rounded-sm w-max mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Page;
