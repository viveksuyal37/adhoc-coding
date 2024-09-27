import { UserRoles } from "@/types/user";
import local from "next/font/local";
import { toast } from "sonner";



const useAuth = () => {
  let users = JSON.parse(localStorage.getItem("users") as string);
  let user = JSON.parse(sessionStorage.getItem("user") as string);

  const updateProfile = async (data) => {
    if (user.id !== id) toast.error("Bad request");
    user = data;
    sessionStorage.setItem("user", data);

    let temp = users?.filter((u) => u.id !== user.id);
    let updatedUsers = [...temp, { ...user, ...data }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    users = updatedUsers;
    toast.success("profile updated");
  };

  // if (user?.role !== String(UserRoles.Admin)) {
  //   users = [];
  // }



  return { users, user, role: user?.role, updateProfile };
};

export default useAuth;
