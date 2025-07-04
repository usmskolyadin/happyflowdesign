'use client';

import { useEffect, useState } from 'react';

interface ExtraServiceBlock {
  id: number;
  title: string;
  description: string;
  footerText: string;
  imageUrl: string;
  fileUrl: string;
  listItems: string[];
}

export default function ExtraServices() {
  const [data, setData] = useState<ExtraServiceBlock | null>(null);

  useEffect(() => {
    fetch('/api/extra-service-blocks/1') // например, id=1
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Загрузка...</p>;

  return (
    <section className="bg-[#E8F6EF] w-full">
      <div className="lg:mx-auto px-4 sm:px-0 py-10 max-w-screen-xl">
        <div className="lg:flex">
          <img className="w-[542px] lg:h-[542px] h-86 rounded-2xl object-cover" src={data.imageUrl} alt="" />
          <div className="lg:ml-6">
            <h1 className="text-4xl font-bold lg:mt-0 mt-4">{data.title}</h1>
            <p className="text-[#2F2929] text-md py-4">{data.description}</p>
            <h2 className="text-md font-semibold py-2">Мы можем предложить:</h2>
            <div className="flex">
              <div className="columns-1 space-y-1 w-full">
                {data.listItems.map((item, idx) => (
                  <div className="flex w-full" key={idx}>
                    <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                    <p className="w-full font-medium text-[#2F2929]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-md mt-4 text-[#2F2929]">{data.footerText}</p>

            <p className="text-[#2F29294D] text-md w-full mt-10">
              *Ознакомиться с дополнительными услугами и ценами можете, скачав файл ниже
            </p>

            <button className="w-full mt-4 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
              <a href={data.fileUrl} download>Скачать прайс-лист</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
