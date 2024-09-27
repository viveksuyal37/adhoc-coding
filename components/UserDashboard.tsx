import useAuth from "./useAuth";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="grid grid-cols-5 p-3">
      <div className="col-span-1">profile</div>
      <div className="col-span-4">
        <strong>My profile</strong>
        <ul className="list-disc">
          <div>
            <h2>Username:{user?.name}</h2>
            <span>Username:{user?.email}</span>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default UserDashboard;
