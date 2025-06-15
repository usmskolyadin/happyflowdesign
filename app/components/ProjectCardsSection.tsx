import { useEffect, useState } from "react";

interface ProjectCardData {
  id: number;
  title: string;
  price: string;
  description: string;
  pros: string[];
  cons: string[];
  isFeatured: boolean;
}

export default function ProjectCards() {
  const [cards, setCards] = useState<ProjectCardData[]>([]);

  useEffect(() => {
    fetch("/api/project-cards")
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <section className="py-8 w-full">
      <div className="relative max-w-screen-xl lg:mx-auto px-4 items-center">
        <h1 className="text-4xl font-bold py-4">Персональные проекты под ваш стиль и бюджет</h1>
        <p className="text-xl font-medium">
          Услуги по проектированию — Продуманный проект — залог идеального ремонта
        </p>

        <div className="lg:grid lg:grid-cols-3 flex mt-5 pt-8 gap-4 overflow-x-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative min-w-96 w-full border p-6 rounded-xl ${
                card.isFeatured
                  ? "bg-[#D0EEDF] border-[#D0EEDF] shadow-lg z-50"
                  : "border-[#D0EEDF]"
              }`}
            >
              {card.isFeatured && (
                <div className="absolute top-[-30px] right-6 bg-[#FFCA3B] rounded-2xl p-3">
                  <h3 className="text-black font-semibold">Выбирают 86% клиентов</h3>
                </div>
              )}

              <h2 className="font-semibold text-lg">{card.title}</h2>
              <h2 className="font-bold text-3xl mt-2">{card.price}</h2>
              <p className="text-lg text-gray-500 mt-4">{card.description}</p>

              <div className="mt-12 mb-4">
                <button
                  className={`w-full py-5 px-10 rounded-2xl transition-opacity duration-300 ${
                    card.isFeatured
                      ? "bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white shadow-md font-bold"
                      : "bg-[#E8F6EF] text-md font-bold"
                  }`}
                >
                  <a href={card.isFeatured ? "#try" : "#call"}>
                    {card.isFeatured ? "Попробовать" : "Позвонить"}
                  </a>
                </button>
              </div>

              <div>
                {card.pros.map((plus, i) => (
                  <div key={`pro-${i}`} className="flex items-center py-2">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓
                    </span>
                    <p className="text-lg text-black font-medium ml-2">{plus}</p>
                  </div>
                ))}
                {card.cons.map((con, i) => (
                  <div key={`con-${i}`} className="flex items-center py-2">
                    <span className="text-white font-bold text-xs bg-gray-400 py-1.5 px-2.5 rounded-lg">
                      ✓
                    </span>
                    <p className="text-lg text-black font-medium ml-2">{con}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
