"use client";

import { ReactNode } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const AppInitializer = ({ children }: { children: ReactNode }) => {
  const {user} = useAuth();
  const { push } = useRouter();

  if (!user) push("/register");

  return <div>{children}</div>;
};
export default AppInitializer;
