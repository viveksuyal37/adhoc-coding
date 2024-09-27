"use client";

import useAuth from "@/components/useAuth";
import { UserRoles } from "@/types/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const { users: u } = useAuth();
  const users = u ?? [];
  console.log({users,u})
  const { push } = useRouter();

  const onSubmit: SubmitErrorHandler<any> = async (data) => {
    const { image } = data;

    let d = { ...data, id: String(Math.random() * 100000) };

    //@ts-ignore
    if (!image.length) toast.error("Please provide user image!");

    const formData = new FormData();
    //@ts-ignore
    formData.set("userImg", image[0]);

    // let res = await axios.post('/api/imageUpload',{data:formData},{headers:{'Content-type':'multipart/form-data'}});
    console.log([...users, d]);
    debugger;
    localStorage.setItem("users", JSON.stringify([...users, d]));
    sessionStorage.setItem("user", JSON.stringify(d));
    toast.success("registered successfully.");
    push("/");
    // console.log({res})
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40vw] h-[50vh] border border-gray-300 rounded-md p-4 flex flex-col gap-5 overflow-auto"
      >
        <h2 className="text-center font-bold text-xl">Register</h2>

        <input
          {...register("name")}
          className="myInputs"
          placeholder="name"
          type=""
        ></input>
        <input
          {...register("email", { required: true })}
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
        <input
          {...register("phone")}
          className="myInputs"
          placeholder="phone"
          type="phone"
        ></input>
        <select {...register("role")}>
          <option value={UserRoles.Admin}>Admin</option>
          <option value={UserRoles.User}>User</option>
        </select>
        <input
          {...register("city")}
          className="myInputs"
          placeholder="city"
          type=""
        ></input>
        <input
          {...register("state")}
          className="myInputs"
          placeholder="state"
          type=""
        ></input>

        <input {...register("image")} type="file" accept="image/*"></input>
        <input
          {...register("hobbies")}
          className="myInputs"
          placeholder="your hobbies"
          type=""
        ></input>

        <select {...register("gender")}>
          <option value={"M"}>Male</option>
          <option value={"F"}>Female</option>
        </select>

        {/* <input type="checkbox">Swimming</input>
        <input type="checkbox">Reading</input>
        <input type="checkbox">Dancing</input> */}

        <button className="text-white bg-black py-1 px-2 rounded-sm w-max mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Page;
