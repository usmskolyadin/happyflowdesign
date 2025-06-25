"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface Repair {
  id: number;
  title: string;
  photos: string[];
  workList: string[];
}

interface RepairType {
  id: number;
  name: string;
}

const repairTypes: RepairType[] = [
  { id: 1, name: "Капитальный" },
  { id: 2, name: "Косметический" },
  { id: 3, name: "Дизайнерский" },
  { id: 4, name: "Под ключ" },
  { id: 5, name: "Студии" },
  { id: 6, name: "Черновой" },
];

export default function RepairsSection() {
  const [selectedType, setSelectedType] = useState<number>(1);
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/repairs?filter=${encodeURIComponent(JSON.stringify({ typeId: selectedType }))}`)
      .then((res) => res.json())
      .then((data) => {
        setRepairs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedType]);

  return (
    <section className="bg-[#E8F6EF] w-full py-8" id="works">
      <div className="max-w-screen-xl lg:mx-auto px-4 sm:px-0">
        <h1 className="text-4xl font-bold mb-6">Наши работы</h1>

        <div className="flex space-x-4 overflow-x-auto ">
          {repairTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex-shrink-0 px-6 py-2 font-bold rounded-2xl shadow-md flex items-center ${
                selectedType === type.id
                  ? "bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white"
                  : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {type.name}
              <span
                className={`p-2 w-8 h-8 ml-2 flex items-center justify-center rounded-full text-md ${
                  selectedType === type.id
                    ? "bg-white text-black"
                    : "bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white"
                }`}
              >
                {repairs.length}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <p>Загрузка...</p>
        ) : repairs.length === 0 ? (
          <p>Ремонты не найдены.</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            className="mt-6"
          >
            {repairs.map((repair) => (
              <SwiperSlide key={repair.id}>
                <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col ">
                  <div className="flex w-full lg:w-1/2 gap-4">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="rounded-2xl w-full h-72"
                    >
                      {repair.photos.map((src, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={src}
                            alt={`Фото ${i + 1}`}
                            className="object-cover rounded-2xl w-full h-72"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Описание */}
                  <div className="mt-4 lg:mt-0 lg:ml-6 flex-1">
                    <h3 className="text-black font-bold text-xl">{repair.title}</h3>
                    <h4 className="mt-4 text-black font-semibold text-lg">Перечень работ</h4>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                      {repair.workList.map((work, i) => (
                        <li key={i}>{work}</li>
                      ))}
                    </ul>

                  </div>

                    <div className="flex mt-6 space-x-4">
                      <button className="flex-1 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white font-bold py-3 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                        <a href="#">Получить консультацию</a>
                      </button>
                      <button className="flex-1 bg-[#FFCA3B] font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                        <a href="#">Хочу такой же ремонт!</a>
                      </button>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
