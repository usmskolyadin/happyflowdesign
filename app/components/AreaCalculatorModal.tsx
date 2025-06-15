"use client";

import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  area: number;
};

export default function AreaCalculatorModal({ isOpen, onClose, area: initialArea }: Props) {
  const [area, setArea] = useState(initialArea);
  const [pricePerM2, setPricePerM2] = useState(0);

  useEffect(() => {
    fetch("/api/pricing")
      .then((res) => res.json())
      .then((data) => setPricePerM2(data.pricePerM2));
  }, []);

  useEffect(() => {
    setArea(initialArea);
  }, [initialArea]);

  const total = area * pricePerM2;

  const handleChange = (value: number) => {
    const valid = Math.min(500, Math.max(1, value));
    setArea(valid);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Площадь</span>
            <span>Итого:</span>
          </div>

          <div className="flex justify-between gap-4 items-start">
            <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-center text-lg font-medium relative">
              <input
                type="number"
                className="w-full bg-transparent text-center outline-none"
                value={area}
                min={1}
                max={500}
                onChange={(e) => handleChange(parseInt(e.target.value || "1"))}
              />
              <span className="absolute right-4 top-3 text-sm text-gray-500">м²</span>
              <input
                type="range"
                min={1}
                max={500}
                value={area}
                onChange={(e) => handleChange(parseInt(e.target.value))}
                className="w-full mt-4 accent-green-500"
              />
            </div>

            <div className="flex-1 border-2 border-green-300 rounded-xl px-4 py-3 text-center font-semibold text-lg">
              {total.toLocaleString("ru-RU")} ₽
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Для более точной суммы, советуем вам оставить заявку на консультацию с нашим менеджером. <br />
            <a href="#" className="text-green-600 underline">Оставить заявку</a>
          </p>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold py-2 rounded-xl shadow-md">
              Оставить заявку
            </button>
            <button
              className="flex-1 border-2 border-green-300 text-gray-700 font-semibold py-2 rounded-xl"
              onClick={onClose}
            >
              Ещё подумать...
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
