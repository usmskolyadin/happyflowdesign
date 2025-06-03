"use client";

import React, { useEffect, useState } from "react";

interface Factor {
  id: string;
  name: string;
}

interface Calculation {
  id: string;
  area: number;
}

interface FactorValue {
  id: string;
  calculationId: string;
  factorId: string;
  isApplied: boolean;
  factor: Factor;
  calculation: Calculation;
}

interface FactorValueForm {
  calculationId: string;
  factorId: string;
  isApplied: boolean;
}

export default function FactorValueManager() {
  const [factorValues, setFactorValues] = useState<FactorValue[]>([]);
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [factors, setFactors] = useState<Factor[]>([]);
  const [form, setForm] = useState<FactorValueForm>({
    calculationId: "",
    factorId: "",
    isApplied: true,
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<FactorValue | null>(null);

  const fetchFactorValues = async () => {
    const res = await fetch("/api/admin/factorValues");
    const data = await res.json();
    setFactorValues(data.factorValues);
  };

  const fetchCalculations = async () => {
    const res = await fetch("/api/admin/calculations");
    const data = await res.json();
    setCalculations(data.calculations);
  };

  const fetchFactors = async () => {
    const res = await fetch("/api/admin/factors");
    const data = await res.json();
    setFactors(data.factors);
  };

  useEffect(() => {
    fetchFactorValues();
    fetchCalculations();
    fetchFactors();
  }, []);

  const resetForm = () => {
    setForm({
      calculationId: "",
      factorId: "",
      isApplied: true,
    });
    setEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await fetch(`/api/admin/factorValues/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/admin/factorValues", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchFactorValues();
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const startEdit = (fv: FactorValue) => {
    setForm({
      calculationId: fv.calculationId,
      factorId: fv.factorId,
      isApplied: fv.isApplied,
    });
    setEditing(fv);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete factor value?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/factorValues/${id}`, { method: "DELETE" });
      await fetchFactorValues();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Factor Values</h2>
      <form onSubmit={handleSubmit} className="mb-8 max-w-md space-y-4">
        <select
          required
          value={form.calculationId}
          onChange={(e) => setForm({ ...form, calculationId: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Calculation</option>
          {calculations.map((calc) => (
            <option key={calc.id} value={calc.id}>
              {`Area: ${calc.area}`}
            </option>
          ))}
        </select>

        <select
          required
          value={form.factorId}
          onChange={(e) => setForm({ ...form, factorId: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Factor</option>
          {factors.map((factor) => (
            <option key={factor.id} value={factor.id}>
              {factor.name}
            </option>
          ))}
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={form.isApplied}
            onChange={(e) => setForm({ ...form, isApplied: e.target.checked })}
          />
          <span>Is Applied</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {editing ? "Update Factor Value" : "Create Factor Value"}
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
            <th className="border border-gray-300 p-2">Calculation</th>
            <th className="border border-gray-300 p-2">Factor</th>
            <th className="border border-gray-300 p-2">Is Applied</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {factorValues.map((fv) => (
            <tr key={fv.id}>
              <td className="border border-gray-300 p-2">
                {`Area: ${fv.calculation.area}`}
              </td>
              <td className="border border-gray-300 p-2">{fv.factor.name}</td>
              <td className="border border-gray-300 p-2">{fv.isApplied ? "Yes" : "No"}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => startEdit(fv)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(fv.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {factorValues.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No factor values found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
