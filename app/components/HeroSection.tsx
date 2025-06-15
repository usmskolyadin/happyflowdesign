"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSection = {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
};

export default function Hero() {
  const [data, setData] = useState<HeroSection | null>(null);

  useEffect(() => {
    fetch("/api/hero-sections")
      .then((res) => res.json())
      .then((res) => setData(res[0]));  
  }, []);

  if (!data) return null;

  return (
    <section className="relative">
      <div className="relative h-[700px]">
        <Image
          src={data.imageUrl || "/default-image.png"}
          fill
          className="object-cover z-0"
          alt="Фоновое изображение"
        />
        <div className="lg:ml-0 ml-4 absolute inset-0 z-10 flex items-center">
          <div className="max-w-screen-xl mx-auto w-full">
            <div className="lg:flex justify-between">
              <div className="flex-col lg:w-1/2 rounded-xl">
                <h1 className="lg:text-6xl text-5xl font-bold">{data.title}</h1>
              </div>
              <div className="lg:w-1/2 flex flex-col lg:p-8 rounded-xl lg:ml-8">
                <p className="hidden lg:block py-4">{data.subtitle}</p>
                <div className="mt-6">
                  <a href="" className="bg-[#E8FDFF] font-semibold lg:text-xl text-md p-4 text-[#259FD4] rounded-xl">
                    {data.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#FFCA3B] lg:w-[180px] lg:h-[180px] w-24 h-24 rounded-2xl flex flex-col justify-center items-center lg:bottom-12 right-48 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
            <path
              d="M16.75 50.25L50.25 16.75M50.25 16.75H25.125M50.25 16.75V41.875"
              stroke="#2F2929"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-semibold lg:text-lg text-xs lg:ml-8 ml-4 mb-3 lg:mb-0">Рассчитать стоимость</p>
        </div>
      </div>
    </section>
  );
}
