"use client";

import React, { useEffect, useState } from "react";

interface Factor {
  id: string;
  name: string;
  description?: string | null;
  value: number;
  isPositive: boolean;
  isActive: boolean;
  category?: string | null;
}

interface FactorForm {
  name: string;
  description?: string;
  value: number;
  isPositive: boolean;
  isActive: boolean;
  category?: string;
}

export default function FactorManager() {
  const [factors, setFactors] = useState<Factor[]>([]);
  const [form, setForm] = useState<FactorForm>({
    name: "",
    description: "",
    value: 0,
    isPositive: true,
    isActive: true,
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<Factor | null>(null);

  const fetchFactors = async () => {
    const res = await fetch("/api/admin/factors");
    const data = await res.json();
    setFactors(data.factors);
  };

  useEffect(() => {
    fetchFactors();
  }, []);

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      value: 0,
      isPositive: true,
      isActive: true,
      category: "",
    });
    setEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await fetch(`/api/admin/factors/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/admin/factors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchFactors();
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const startEdit = (factor: Factor) => {
    setForm({
      name: factor.name,
      description: factor.description ?? "",
      value: factor.value,
      isPositive: factor.isPositive,
      isActive: factor.isActive,
      category: factor.category ?? "",
    });
    setEditing(factor);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete factor?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/factors/${id}`, { method: "DELETE" });
      await fetchFactors();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Factors</h2>
      <form onSubmit={handleSubmit} className="mb-8 max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <input
          type="number"
          step="any"
          placeholder="Value"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded"
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.isPositive}
            onChange={(e) => setForm({ ...form, isPositive: e.target.checked })}
          />
          <span>Is Positive</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.isActive}
            onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
          />
          <span>Is Active</span>
        </label>
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {editing ? "Update Factor" : "Create Factor"}
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

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Value</th>
            <th className="border border-gray-300 p-2">Is Positive</th>
            <th className="border border-gray-300 p-2">Is Active</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {factors.map((factor) => (
            <tr key={factor.id}>
              <td className="border border-gray-300 p-2">{factor.name}</td>
              <td className="border border-gray-300 p-2">{factor.value}</td>
              <td className="border border-gray-300 p-2">{factor.isPositive ? "Yes" : "No"}</td>
              <td className="border border-gray-300 p-2">{factor.isActive ? "Yes" : "No"}</td>
              <td className="border border-gray-300 p-2">{factor.category ?? "-"}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => startEdit(factor)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(factor.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {factors.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">
                No factors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
