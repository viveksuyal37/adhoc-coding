"use client";

import useAuth from "@/components/useAuth";
import { UserRoles } from "@/types/user";
import { notFound, useParams } from "next/navigation";

const Page = () => {
  const { role, users } = useAuth();

  const { uid } = useParams();

  if (role !== String(UserRoles.Admin)) notFound();

  const user = users?.find((user) => user?.id === uid);

  if (!user) notFound();

  return (
    <div>
      <h2>Username:{user.name}</h2>
      <span>Email:{user.email}</span>
    </div>
  );
};
export default Page;
