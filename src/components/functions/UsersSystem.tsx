import React, { useState } from "react";
import { User, UserRole } from "../types";
import AddUserForm from "../Screen/addUsers";
import UpdateUserForm from "../Screen/userUpdate";

interface Props {
  initialUsers: User[];
}

const UserSystem: React.FC<Props> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const addUser = (name: string, email: string, role: UserRole) => {
    const newUser: User = {
      id: Math.max(...users.map((user) => user.id)) + 1, 
      name,
      email,
      role,
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (
    id: number,
    name: string,
    email: string,
    role: UserRole
  ) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name, email, role } : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {editingUser ? (
        <UpdateUserForm user={editingUser} updateUser={updateUser} />
      ) : (
        users.map((user) => (
          <div className="gap-2 flex-row flex items-start" key={user.id}>
            {user.name} - {user.email} - {user.role}
            <button
              onClick={() => setEditingUser(user)}
              className="bg-blue-500"
            >
              Edit
            </button>{" "}
            <button
              className="bg-red-500 p-1 text-white text-center"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
      <AddUserForm addUser={addUser} />
    </div>
  );
};

export default UserSystem;
