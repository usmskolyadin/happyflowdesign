'use client';

import useSWR from 'swr';
import Image from 'next/image';

export type PricingCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  features: string[];
  order: number;
};

const fetcher = (url: string): Promise<PricingCard[]> =>
  fetch(url).then(async (res) => {
    if (!res.ok) {
      const error = await res.text();
      throw new Error(error);
    }
    return res.json();
  });

export default function PricingBlock() {
  const { data, error, isLoading } = useSWR<PricingCard[]>('/api/pricing-cards', fetcher);

  if (isLoading) return <p className="text-center py-8">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500 py-8">Ошибка загрузки: {error.message}</p>;
  if (!data || data.length === 0) return <p className="text-center py-8">Нет доступных вариантов ремонта</p>;

  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
        <h1 className="text-4xl font-bold py-4">Какой вид ремонта вас интересует?</h1>
        <div className="lg:grid lg:grid-cols-2 gap-4 mt-3">
          {data.map((card) => (
            <div key={card.id} className="border border-[#D0EEDF] rounded-2xl p-4 bg-white">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-[#909090] mt-1">{card.description}</p>

              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="rounded-2xl mt-3 h-[300px] w-full object-cover"
                />
              )}

              <div className="flex flex-col mt-4 space-y-2">
                {card.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-[#3CB473] rounded-full mr-2" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex mt-4 flex-wrap gap-2">
                <button className="bg-[#E0FAEB] py-4 px-4 rounded-2xl text-sm font-semibold text-black">
                  {card.duration}
                </button>
                <button className="bg-[#E0FAEB] py-4 px-4 rounded-2xl text-sm font-semibold text-black">
                  {card.price}
                </button>
                <button className="bg-[#FFCA3B] py-4 px-4 rounded-2xl text-sm font-semibold">
                  Получить консультацию
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
