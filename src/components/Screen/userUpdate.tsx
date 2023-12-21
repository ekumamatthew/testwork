import React, { useState } from "react";
import { User, UserRole } from "../types";

interface UpdateUserFormProps {
  user: User;
  updateUser: (id: number, name: string, email: string, role: UserRole) => void;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({
  user,
  updateUser,
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(user.id, name, email, role);
  };

  return (
    <form className="flex-col items-center gap-2 flex" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2 items-center">
        <label className="mr-2">Name:</label>
        <input
          className="rounded-md w-[200px] h-[40px]"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <label className="mr-2">Email:</label>
        <input
          className="rounded-md w-[200px] h-[40px]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
        >
          <option value={UserRole.Admin}>{UserRole.Admin}</option>
          <option value={UserRole.Regular}>{UserRole.Regular}</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white p-4 text-center" type="submit">
        Update User
      </button>
    </form>
  );
};

export default UpdateUserForm;
