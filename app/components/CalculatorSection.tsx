"use client";

import { useState } from "react";
import AreaCalculatorModal from "./AreaCalculatorModal";

export default function CalculatorSection() {
  const [inputArea, setInputArea] = useState(142);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="max-w-screen-xl lg:mx-auto px-4 py-8">
        <div className="lg:flex justify-between items-center">
          <h1 className="lg:text-3xl text-2xl font-bold py-4">
            Ввести метраж квартиры для расчета стоимости проектирования
          </h1>
          <div className="flex">
            <div className="flex mr-4 items-center">
              <input
                type="number"
                placeholder="142"
                value={inputArea}
                onChange={(e) => setInputArea(Number(e.target.value))}
                className="py-5 lg:px-10 px-2 rounded-2xl bg-[#F5F5F5]"
              />
              <h3 className="text-lg font-semibold ml-2">м²</h3>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FFCA3B] text-md font-bold py-5 lg:px-10 px-4 rounded-2xl hover:opacity-90 transition-opacity duration-300"
            >
              Рассчитать
            </button>
          </div>
        </div>
      </section>

      <AreaCalculatorModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        area={inputArea}
      />
    </>
  );
}
