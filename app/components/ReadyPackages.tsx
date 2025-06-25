'use client';
import { useEffect, useState } from 'react';

interface ReadyPackage {
  id: number;
  title: string;
  imageUrl: string;
  features: string[];
  price: string;
  buttonText: string;
}

export default function ReadyPackages() {
  const [packages, setPackages] = useState<ReadyPackage[]>([]);

    useEffect(() => {
    fetch('/api/ready-packages')
        .then((res) => res.json())
        .then((data) => {
        if (Array.isArray(data)) {
            setPackages(data);
        } else if (Array.isArray(data.data)) {
            setPackages(data.data);
        } else {
            console.error('Неверный формат ответа:', data);
            setPackages([]);
        }
        })
        .catch((err) => {
        console.error('Ошибка при загрузке пакетов:', err);
        setPackages([]);
        });
    }, []);

  return (
    <section className="py-8" id="shares">
      <div className="max-w-screen-xl lg:mx-auto px-4 lg:px-0 items-center">
        <h1 className="text-4xl font-bold py-4">Готовые пакеты</h1>
        <div className="flex grid lg:grid-cols-3 grid-cols-1 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl p-[5px] w-full bg-gradient-to-r from-[#B7E754] to-[#0BCAF0]"
            >
              <div className="bg-white rounded-2xl p-4 w-full h-full">
                <h2 className="text-2xl font-bold">{pkg.title}</h2>
                <img
                  className="rounded-2xl mt-3 h-[200px] w-full object-cover"
                  src={pkg.imageUrl}
                  alt=""
                />
                <div className="flex mt-4">
                  <div className="columns-1">
                    {pkg.features.map((feature, i) => (
                      <div className="flex items-center py-1" key={i}>
                        <div className="m-2 bg-[#3CB473] h-[10px] w-[10px] rounded-full"></div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <button className="w-4/8 mt-4 bg-[#E0FAEB] text-md font-bold py-2 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <span>{pkg.price}</span>
                  </button>
                  <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-2 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="#">{pkg.buttonText}</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}