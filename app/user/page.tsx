"use client";
import useAuth from "@/components/useAuth";
import { UserRoles } from "@/types/user";
import { useForm } from "react-hook-form";

const Page = () => {
  const { users: u, user, updateProfile } = useAuth();
  const { register, handleSubmit, watch } = useForm({ defaultValues: user });
  const users = u ?? [];

  const isChanged = JSON.stringify(watch()) !== JSON.stringify(user);

  const onSubmit = (d) => {
    updateProfile(d);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40vw] h-[50vh] border border-gray-300 rounded-md p-4 flex flex-col gap-5 overflow-auto"
      >
        <h2 className="text-center font-bold text-xl">Update profile</h2>

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

        <button
          disabled={!isChanged}
          className="text-white disabled:opacity-20 bg-black py-1 px-2 rounded-sm w-max mx-auto"
        >
          Update
        </button>
      </form>
    </div>
  );
};
export default Page;
