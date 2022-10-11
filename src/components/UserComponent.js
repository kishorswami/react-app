import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTableView from "./UserTableView";

const UserComponent = () => {
  const [userData, setUserData] = useState([]);

  const handleUserFormSubmit = (data) => {
    setUserData([...userData, data]);
  };
  return (
    <>
      <UserForm handleUserFormSubmit={handleUserFormSubmit} />
      <UserTableView userData={userData} />
    </>
  );
};

export default UserComponent;
