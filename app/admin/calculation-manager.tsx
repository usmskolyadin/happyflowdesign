"use client";

import React, { useEffect, useState } from "react";

interface Factor {
  id: string;
  name: string;
  value: number;
  isPositive: boolean;
}

interface FactorValue {
  id: string;
  factorId: string;
  isApplied: boolean;
  factor: Factor;
}

interface Calculation {
  id: string;
  area: number;
  basePrice: number;
  totalPrice: number;
  notes?: string | null;
  createdBy?: string | null;
  factors: FactorValue[];
  createdAt: string;
}

interface CalculationForm {
  area: number;
  basePrice: number;
  totalPrice: number;
  notes?: string;
}

export default function CalculationManager() {
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [form, setForm] = useState<CalculationForm>({
    area: 0,
    basePrice: 1500,
    totalPrice: 0,
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<Calculation | null>(null);

  const fetchCalculations = async () => {
    const res = await fetch("/api/admin/calculations");
    const data = await res.json();
    setCalculations(data.calculations);
  };

  useEffect(() => {
    fetchCalculations();
  }, []);

  const resetForm = () => {
    setForm({
      area: 0,
      basePrice: 1500,
      totalPrice: 0,
      notes: "",
    });
    setEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await fetch(`/api/admin/calculations/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/admin/calculations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchCalculations();
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const startEdit = (calc: Calculation) => {
    setForm({
      area: calc.area,
      basePrice: calc.basePrice,
      totalPrice: calc.totalPrice,
      notes: calc.notes ?? "",
    });
    setEditing(calc);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete calculation?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/calculations/${id}`, { method: "DELETE" });
      await fetchCalculations();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Calculations</h2>
      <form onSubmit={handleSubmit} className="mb-8 max-w-md space-y-4">
        <input
          type="number"
          step="any"
          placeholder="Area"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          step="any"
          placeholder="Base Price"
          value={form.basePrice}
          onChange={(e) => setForm({ ...form, basePrice: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          step="any"
          placeholder="Total Price"
          value={form.totalPrice}
          onChange={(e) => setForm({ ...form, totalPrice: parseFloat(e.target.value) })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {editing ? "Update Calculation" : "Create Calculation"}
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
            <th className="border border-gray-300 p-2">Area</th>
            <th className="border border-gray-300 p-2">Base Price</th>
            <th className="border border-gray-300 p-2">Total Price</th>
            <th className="border border-gray-300 p-2">Notes</th>
            <th className="border border-gray-300 p-2">Created By</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((calc) => (
            <tr key={calc.id}>
              <td className="border border-gray-300 p-2">{calc.area}</td>
              <td className="border border-gray-300 p-2">{calc.basePrice}</td>
              <td className="border border-gray-300 p-2">{calc.totalPrice}</td>
              <td className="border border-gray-300 p-2">{calc.notes ?? "-"}</td>
              <td className="border border-gray-300 p-2">{calc.createdBy ?? "-"}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => startEdit(calc)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(calc.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {calculations.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">
                No calculations found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
