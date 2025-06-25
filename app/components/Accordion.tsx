'use client';

import { useState } from 'react';

type AccordionItem = {
  question: string;
  answer: string;
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionItems: AccordionItem[] = [
    {
      question: 'Сколько стоит вызов замерщика?',
      answer: 'Стоимость вызова замерщика составляет 2000 рублей. При заключении договора на ремонт эта сумма вычитается из общей стоимости работ.'
    },
    {
      question: 'Какой порядок оплаты?',
      answer: 'Мы работаем без предоплаты. Оплата производится поэтапно, после приёмки каждого этапа работ.'
    },
    {
      question: 'Выполняете ли вы дизайн-проект?',
      answer: 'Да, мы предоставляем услуги по разработке дизайн-проекта. Стоимость зависит от площади помещения и сложности проекта.'
    },
    {
      question: 'Стоимость сметы окончательная?',
      answer: 'Да, стоимость в смете является окончательной и не меняется в процессе работ, если не было внесено изменений в проект.'
    },
    {
      question: 'Сколько времени длится ремонт?',
      answer: 'Сроки ремонта зависят от площади и сложности работ. В среднем, косметический ремонт занимает 2-4 недели, капитальный - 1-3 месяца.'
    },
    {
      question: 'Технический или полный дизайн-проект?',
      answer: 'Мы предлагаем оба варианта. Технический проект включает планировочные решения и чертежи, полный - дополнительно содержит 3D-визуализацию и подбор материалов.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-0 flex">
      <div className="space-y-3 w-3/5">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-gray-200 bg-[#F5F5F5] rounded-2xl py-5 px-6 cursor-pointer">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex  justify-between items-center w-full text-left font-medium text-lg hover:text-green-600 focus:outline-none"
            >
              <span className="text-xl  cursor-pointer text-black font-semibold">{item.question}</span>
              <svg
                className={`w-8 h-8 transform transition-transform duration-200  cursor-pointer ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                activeIndex === index ? 'max-h-40 pt-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 w-2/5 lg:ml-5 flex flex-col">
        <div className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] w-full h-50 rounded-3xl">

        </div>
      </div>
    </div>
  );
};

export default Accordion;