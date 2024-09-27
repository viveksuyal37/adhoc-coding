"use client";

import AdminDashboard from "@/components/AdminDashboard";
import useAuth from "@/components/useAuth";
import UserDashboard from "@/components/UserDashboard";

export default function Home() {
  const { role, users } = useAuth();

  return (
    <div className="">
      {role === "0" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}
