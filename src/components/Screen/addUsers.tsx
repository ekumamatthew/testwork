import React, { useState } from "react";
import { UserRole } from "../types";

interface AddUserFormProps {
  addUser: (name: string, email: string, role: UserRole) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(UserRole.Regular);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(name, email, role);

    setName("");
    setEmail("");
    setRole(UserRole.Regular);
  };

  return (
    <form className="flex-col items-center gap-2 flex" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2 items-center">
        <label className="mr-2">Name:</label>
        <input
          className="rounded-md w-[200px] h-[40px]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <label className="mr-2">Email:</label>
        <input
          type="email"
          className="rounded-md w-[200px] h-[40px]"
          value={email}
          placeholder="email"
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
      <button type="submit" className="bg-green-500 text-white p-4 text-center">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
