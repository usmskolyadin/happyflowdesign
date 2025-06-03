"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string | null;
  email: string;
  role: "USER" | "ADMIN";
}

interface UserForm {
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

export default function UserManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<UserForm>({ name: "", email: "", role: "USER" });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const resetForm = () => {
    setForm({ name: "", email: "", role: "USER" });
    setEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await fetch(`/api/admin/users/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/admin/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchUsers();
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const startEdit = (user: User) => {
    setForm({ name: user.name ?? "", email: user.email, role: user.role });
    setEditing(user);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete user?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      await fetchUsers();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          disabled={editing !== null}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value as "USER" | "ADMIN" })}
          className="w-full p-2 border rounded"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {editing ? "Update User" : "Create User"}
        </button>
        {editing && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-4 text-red-600 underline"
          >
            Cancel
          </button>
        )}
      </form>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.name ?? "-"}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => startEdit(user)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
