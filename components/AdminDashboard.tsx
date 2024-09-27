import Link from "next/link";
import useAuth from "./useAuth";

const AdminDashboard = () => {
  const { users, user } = useAuth();
  return (
    <div className="grid grid-cols-5 p-3">
      <div className="col-span-1">profile</div>
      <div className="col-span-4">
        <strong>All Registered Users</strong>
        <ul className="list-disc">
          {users?.map((user) => (
            <li className="my-1" key={user.email}>
                <Link href={`/user/${user.id}`} >{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AdminDashboard;
