"use client"

import Image from "next/image";
import Link from "next/link";
import { Stars } from "./components/Stars";

export default function Home() {
  const services = [
    "Услуги",
    "Рассчитать стоимость",
    "Акции",
    "Наши работы",
    "Отзывы",
    "Ответы на вопросы",
    "Контакты"
  ]

  return (
    <div className="">
      <div className="">
        <header className="max-w-screen-xl max-w-screen-xl mx-auto py-2">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                  src="/logo.png" 
                  width={100} 
                  height={100} 
                  alt="" 
                  className=""
              />
              <p className="hidden text-sm w-48 ml-4">Ремонт квартир под ключ с гарантией</p>
            </div>
            <div className="flex items-center">
              <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" fill="#A3CEE1"/>
                  <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" fill="white"/>
                </svg>

              </span>
              <p className="lg:block hidden text-sm ml-4 w-24">Israel, Netanya central district</p>
            </div>
            
            <div className="flex items-center">
              <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16.5001 12.69V14.94C16.5009 15.1489 16.4581 15.3556 16.3745 15.547C16.2908 15.7384 16.168 15.9102 16.0141 16.0514C15.8602 16.1926 15.6785 16.3001 15.4806 16.367C15.2828 16.434 15.0731 16.4588 14.8651 16.44C12.5572 16.1892 10.3403 15.4006 8.39257 14.1375C6.58044 12.986 5.04407 11.4496 3.89257 9.63751C2.62506 7.68091 1.83625 5.45326 1.59007 3.13501C1.57133 2.92761 1.59598 2.71858 1.66245 2.52123C1.72892 2.32388 1.83575 2.14253 1.97615 1.98873C2.11654 1.83493 2.28743 1.71204 2.47792 1.6279C2.6684 1.54376 2.87433 1.50021 3.08257 1.50001H5.33257C5.69655 1.49643 6.04942 1.62532 6.32539 1.86266C6.60137 2.1 6.78163 2.4296 6.83257 2.79001C6.92754 3.51006 7.10366 4.21706 7.35757 4.89751C7.45848 5.16595 7.48032 5.4577 7.4205 5.73817C7.36069 6.01865 7.22172 6.27609 7.02007 6.48001L6.06757 7.43251C7.13524 9.31017 8.68991 10.8648 10.5676 11.9325L11.5201 10.98C11.724 10.7784 11.9814 10.6394 12.2619 10.5796C12.5424 10.5198 12.8341 10.5416 13.1026 10.6425C13.783 10.8964 14.49 11.0725 15.2101 11.1675C15.5744 11.2189 15.9071 11.4024 16.145 11.6831C16.3828 11.9638 16.5092 12.3222 16.5001 12.69Z" fill="#A3CEE1"/>
                </svg>

              </span>
              <div className="lg:block hidden ">
                <p className="text-sm ml-4 text-[#8FB0C7] font-semibold">Ежедневно, с 9.00-21.00</p>
                <p className="text-lg ml-4">+ 972 (055) 296-85-22t</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center">
                <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M22 7.53138L19.3109 21.3755C19.3109 21.3755 18.9347 22.3354 17.9011 21.8751L11.6967 17.017L11.668 17.0027C12.506 16.2342 19.0048 10.2671 19.2888 9.99658C19.7285 9.57767 19.4555 9.32829 18.945 9.64473L9.34555 15.8703L5.6421 14.5977C5.6421 14.5977 5.05928 14.386 5.00321 13.9257C4.94641 13.4646 5.66128 13.2152 5.66128 13.2152L20.7591 7.16672C20.7591 7.16672 22 6.60994 22 7.53138Z" fill="#259FD4"/>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.5488 8.44374C18.1659 7.06561 16.3219 6.29999 14.3756 6.29999C10.3293 6.29999 7.05122 9.56665 7.05122 13.5989C7.05122 14.875 7.40976 16.151 8.02439 17.2229L7 21L10.8927 19.9792C11.9683 20.5406 13.1463 20.8469 14.3756 20.8469C18.4219 20.8469 21.7 17.5802 21.7 13.5479C21.6488 11.6594 20.9317 9.82186 19.5488 8.44374ZM17.9098 16.2021C17.7561 16.6104 17.039 17.0187 16.6805 17.0698C16.3732 17.1208 15.9634 17.1208 15.5537 17.0187C15.2976 16.9167 14.939 16.8146 14.5293 16.6104C12.6854 15.8448 11.5073 14.0073 11.4049 13.8542C11.3024 13.7521 10.6366 12.8844 10.6366 11.9656C10.6366 11.0469 11.0976 10.6385 11.2512 10.4344C11.4049 10.2302 11.6098 10.2302 11.7634 10.2302C11.8659 10.2302 12.0195 10.2302 12.1219 10.2302C12.2244 10.2302 12.378 10.1792 12.5317 10.5364C12.6854 10.8937 13.0439 11.8125 13.0951 11.8635C13.1463 11.9656 13.1463 12.0677 13.0951 12.1698C13.0439 12.2719 12.9927 12.3739 12.8902 12.476C12.7878 12.5781 12.6854 12.7312 12.6341 12.7823C12.5317 12.8844 12.4293 12.9864 12.5317 13.1396C12.6341 13.3437 12.9927 13.9052 13.5561 14.4156C14.2732 15.0281 14.8366 15.2323 15.0415 15.3344C15.2463 15.4364 15.3488 15.3854 15.4512 15.2833C15.5537 15.1812 15.9122 14.7729 16.0146 14.5687C16.1171 14.3646 16.2707 14.4156 16.4244 14.4667C16.578 14.5177 17.5 14.9771 17.6537 15.0792C17.8585 15.1812 17.961 15.2323 18.0122 15.2833C18.0634 15.4364 18.0634 15.7937 17.9098 16.2021Z" fill="#259FD4"/>
                  </svg>
                </span>
              </div>
              <div className="flex items-center">
                <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14.6876 18.9C9.42598 18.9 6.42485 15.2213 6.2998 9.10001H8.93541C9.02198 13.5929 10.965 15.496 12.5041 15.8884V9.10001H14.9858V12.9749C16.5056 12.8081 18.1023 11.0423 18.641 9.10001H21.1227C20.9197 10.1074 20.5151 11.0612 19.9341 11.9018C19.3532 12.7424 18.6084 13.4516 17.7464 13.9853C18.7086 14.4729 19.5585 15.1631 20.24 16.0102C20.9214 16.8574 21.419 17.8423 21.6998 18.9H18.968C18.7159 17.9813 18.2036 17.159 17.4952 16.536C16.7868 15.913 15.9138 15.5171 14.9858 15.3979V18.9H14.6876Z" fill="#259FD4"/>
                  </svg>
                </span>
              </div>
            </div>


            <button className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
              <a href="">Позвонить</a>
            </button>
          </nav>
        </header>
        <nav className="border border-[#E4ECF1] mx-auto py-3 hidden lg:block">
          <div className="flex justify-between max-w-screen-xl mx-auto">
            {
              services.map((item) => (
                <a key={item} className="font-medium hover:text-blue-500">
                  <Link href={`${item}`} >
                      {item}
                  </Link>
                </a>
              ))
            }
          </div>
        </nav>
      </div>
      <section className="relative"> {/* Добавляем relative для позиционирования */}
        <div className="relative h-[700px]"> {/* Контейнер для всего контента */}
          {/* Фоновое изображение */}
          <Image 
            src="/image.png" 
            fill // Заполняет родительский контейнер
            className="object-cover z-0" // z-0 помещает изображение под контент
            alt="Фоновое изображение"
          />
          
          {/* Текст и кнопки */}
          <div className="lg:ml-0 ml-4 absolute inset-0 z-10 flex items-center"> {/* z-10 поверх изображения */}
            <div className="max-w-screen-xl mx-auto w-full">
              <div className="lg:flex justify-between">
                {/* Левая часть с текстом */}
                <div className="flex-col lg:w-1/2  rounded-xl"> {/* Добавляем прозрачный фон */}
                  <h1 className="lg:text-6xl text-5xl font-bold">10 лет ремонтируем квартиры в Израиле</h1>
                  <p className="mt-2 text-xl py-4">Превращаем вашу квартиру в дом мечты – с гарантией качества!</p>
                  

                </div>
                
                <div className="lg:w-1/2 flex flex-col  lg:p-8 rounded-xl lg:ml-8"> {/* Добавляем прозрачный фон */}
                  <p className="hidden lg:block py-4 ">Ремонт квартир под ключ с гарантией. Фиксированные цены без скрытых доплат...</p>
                  <div className="mt-6">
                    <a href="" className="bg-[#E8FDFF] font-semibold lg:text-xl text-md p-4 text-[#259FD4] rounded-xl">
                      под ключ от 1500 ₪ /м²
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#FFCA3B] lg:w-[180px] lg:h-[180px] w-24 h-24 rounded-2xl flex flex-col justify-center items-center lg:bottom-12 lg:right-76 z-20 bottom-32 right-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                <path d="M16.75 50.25L50.25 16.75M50.25 16.75H25.125M50.25 16.75V41.875" stroke="#2F2929" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="font-semibold text-md ml-8">Рассчитать стоимость</p>
          </div>
        </div>
      </section>
      <section className="py-8 w-full">
        <div className="max-w-screen-xl mx-auto items-center">
            <h1 className="text-4xl font-bold py-4">Персональные проекты под ваш стиль и бюджет</h1>
            <p className="text-xl font-medium">Услуги по проектированию — Продуманный проект — залог идеального ремонта</p>
            <div className="lg:grid lg:grid-cols-3 flex mt-4 gap-4 overflow-x-auto">
              <div className="  min-w-96 w-full border border-[#D0EEDF] p-6 rounded-xl">
                <h2 className="font-semibold text-lg">Покраска квартиры</h2>
                <h2 className="font-bold text-3xl mt-2">Бесплатно</h2>
                <p className=" text-lg text-gray-500 mt-4">
                Проект передаётся клиенту бесплатно — при условии заключения договора на ремонт
                </p>
                
                <div className="mt-12 mb-4">
                  <button className="bg-[#E8F6EF] w-full text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Позвонить</a>
                  </button>
                </div>

                <div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#D0EEDF]  min-w-96  w-full border border-[#D0EEDF] p-6 rounded-xl">
                <h2 className="font-semibold text-lg">Покраска квартиры</h2>
                <h2 className="font-bold text-3xl mt-2">Бесплатно</h2>
                <p className=" text-lg text-gray-500 mt-4">
                Проект передаётся клиенту бесплатно — при условии заключения договора на ремонт
                </p>
                
                <div className="mt-12 mb-4">
                  <button className="w-full bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                    <a href="">Попробовать</a>
                  </button>
                </div>

                <div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                </div>
              </div>
              <div className=" min-w-96 w-full border border-[#D0EEDF] p-6 rounded-xl">

                <h2 className="font-semibold text-lg">Покраска квартиры</h2>
                <h2 className="font-bold text-3xl mt-2">Бесплатно</h2>
                <p className=" text-lg text-gray-500 mt-4">
                Проект передаётся клиенту бесплатно — при условии заключения договора на ремонт
                </p>

                <div className="mt-12 mb-4">
                  <button className="bg-[#E8F6EF] w-full text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Позвонить</a>
                  </button>
                </div>
                <div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                  <div className="flex items-center py-4">
                    <span className="text-white font-bold text-xs bg-[#3CB473] py-1.5 px-2.5 rounded-lg">
                      ✓	
                    </span>
                    <p className="text-lg text-black font-medium ml-2">Выезд дизайнера на объект</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-8 ">
        <div className="lg:flex justify-between items-center">
              <h1 className="lg:text-3xl text-2xl font-bold py-4">Ввести метраж квартиры для расчета стоимости проектирования</h1>
              <div className="flex">
                <div className="flex mr-4 items-center">
                  <input type="text" placeholder="142" className="py-5 lg:px-10 px-2 rounded-2xl bg-[#F5F5F5] " />
                  <h3 className="text-lg font-semibold ml-2">м2</h3>
                </div>
                <div>
                  <button className="bg-[#FFCA3B] text-md font-bold py-5 lg:px-10 px-4 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Рассчитать</a>
                  </button>
                </div>
              </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto py-10 ">
        <h1 className="text-4xl font-bold py-8">Очная консультация и техпроект</h1>
        <div className="flex overflow-hidden rounded-xl lg:h-[550px] h-[200px]">
          <img 
            src="first1.png" 
            alt="Консультация" 
            className="w-1/2 object-cover rounded-l-xl"
          />
          <img 
            src="first2.png" 
            alt="Техпроект" 
            className="w-1/2 object-cover rounded-r-xl"
          />
        </div>
        <h1 className="text-2xl font-bold py-4">День встречи</h1>
        <div className="relative">
          <div className="grid grid-cols-4 gap-8 pb-8">
            <div className="flex flex-col">
              <div className="relative z-10 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white rounded-full p-3 w-15 h-15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M9.33334 17.7548L13.6667 22.0708C14.4643 22.8653 15.7579 22.8653 16.5556 22.0708L26.6667 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg py-2 mt-2">Дизайнер приезжает на объект</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">2</p>
              </div>
              <h3 className="text-lg py-2 mt-2">Дизайнер приезжает на объект</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">3</p>
              </div>
              <h3 className="text-lg py-2 mt-2">Дизайнер приезжает на объект</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">4</p>
              </div>
              <h3 className="text-lg py-2 mt-2">Дизайнер приезжает на объект</h3>
            </div>
            
            {/* Полоска под кружками */}
            <div className="absolute left-0 right-0 top-1/5 h-1 rounded-full opacity-10 bg-[#2F2929] transform -translate-y-1/2"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold py-4">Через 2–3 дня клиент получает:</h1>
        <div className="lg:flex lg:grid grid-cols-3 gap-4">
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] w-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Рассчитать</a>
            </button>
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] w-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Рассчитать</a>
            </button>
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] w-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Рассчитать</a>
            </button>
        </div>
      </section>
      <section className="bg-[#E8F6EF] w-full ">
            <div className="mx-auto py-8 max-w-screen-xl">
              <h1 className="text-4xl font-bold py-4 ">Рассчитаем стоимость онлайн за 5 минут</h1>
                <div className="bg-[#ffffff] rounded-2xl flex p-6 ">
                  <img src="xyu.png" className="hidden lg:block w-2/5 rounded-2xl" alt="" />
                  

                  <div className="lg:w-3/5 lg:ml-4">
                    <div className="flex items-center">
                      <button className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-xs font-bold py-2 px-4 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                        <a href="">Расчет готов</a>
                      </button>
                      <span className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] w-full h-2.5 rounded-full ml-2"></span>
                    </div>

                    <div className="mt-4">
                      <input type="text" placeholder="Имя" className="w-full py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                      <div className="flex mt-4">
                        <input type="text" placeholder="Номер телефона" className="w-1/2 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                        <input type="text" placeholder="Адрес" className="w-1/2 ml-4 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                      </div>
                    </div>
                    <div className="flex mt-4 w-full">
                      <div className="w-full">
                        <div className="w-1/2">
                          <h2 className="text-xl font-semibold">Вид ремонта</h2>
                        </div>
                        <div className="w-1/2">
                          <h2 className="text-xl font-semibold">Вид ремонта</h2>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-1/2">
                          <h2 className="text-xl font-semibold">Вид ремонта</h2>
                        </div>
                        <div className="w-1/2">
                          <h2 className="text-xl font-semibold">Вид ремонта</h2>
                        </div>  
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-[#FFCA3B] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">Рассчитать</a>
                    </button>
                  </div>
                </div>
            </div>
      </section>
      <section className="py-8 ">
        <div className="max-w-screen-xl mx-auto items-center">
            <h1 className="text-4xl font-bold py-4">Какой вид ремонта вас интересует?</h1>
            <div className="lg:grid lg:grid-cols-2 gap-4">
            <div className="border border-[#D0EEDF] rounded-2xl p-4 w-full">
                  <h2 className="text-2xl font-bold">Покраска квартиры</h2>
                  <p className="text-[#909090] text-md ">Обновим интерьер вашей квартиры быстро и аккуратно</p>
                  <img className="rounded-2xl mt-3 h-[300px] w-full object-cover" src="example.png" alt="" />
                <div className="flex mt-4">
                  <div className="columns-2 space-y-4">
                    <div className="flex items-center py-2">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="w-2/8 mt-4 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 35 дней</a>
                  </button>
                  
                  <button className="w-2/8 mt-4 ml-2 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 18 000 ₪</a>
                  </button>
                  
                  <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-5 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Получить консультацию</a>
                  </button>
                </div>
              </div>
              <div className="border border-[#D0EEDF] rounded-2xl p-4 w-full">
                  <h2 className="text-2xl font-bold">Покраска квартиры</h2>
                  <p className="text-[#909090] text-md ">Обновим интерьер вашей квартиры быстро и аккуратно</p>
                  <img className="rounded-2xl mt-3 h-[300px] w-full object-cover" src="example.png" alt="" />
                <div className="flex mt-4">
                  <div className="columns-2 space-y-4">
                    <div className="flex items-center py-2">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="w-2/8 mt-4 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 35 дней</a>
                  </button>
                  
                  <button className="w-2/8 mt-4 ml-2 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 18 000 ₪</a>
                  </button>
                  
                  <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-5 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Получить консультацию</a>
                  </button>
                </div>
              </div>
              <div className="border border-[#D0EEDF] rounded-2xl p-4 w-full">
                  <h2 className="text-2xl font-bold">Покраска квартиры</h2>
                  <p className="text-[#909090] text-md ">Обновим интерьер вашей квартиры быстро и аккуратно</p>
                  <img className="rounded-2xl mt-3 h-[300px] w-full object-cover" src="example.png" alt="" />
                <div className="flex mt-4">
                  <div className="columns-2 space-y-4">
                    <div className="flex items-center py-2">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="w-2/8 mt-4 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 35 дней</a>
                  </button>
                  
                  <button className="w-2/8 mt-4 ml-2 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 18 000 ₪</a>
                  </button>
                  
                  <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-5 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Получить консультацию</a>
                  </button>
                </div>
              </div>
              <div className="border border-[#D0EEDF] rounded-2xl p-4 w-full">
                <h2 className="text-2xl font-bold">Покраска квартиры</h2>
                <p className="text-[#909090] text-md ">Обновим интерьер вашей квартиры быстро и аккуратно</p>
                
                <img className="rounded-2xl mt-3 h-[300px] w-full object-cover" src="example.png" alt="" />
                
                <div className="flex mt-4">
                  <div className="columns-2 space-y-4">
                    <div className="flex items-center py-2">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button className="w-2/8 mt-4 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 35 дней</a>
                  </button>
                  
                  <button className="w-2/8 mt-4 ml-2 bg-[#E0FAEB] text-md font-bold py-5 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">от 18 000 ₪</a>
                  </button>
                  
                  <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-5 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                    <a href="">Получить консультацию</a>
                  </button>
                </div>
              </div>
            </div>
            
        </div>
      </section>
      <section className="bg-[#E8F6EF] w-full ">
        <div className="mx-auto py-10 max-w-screen-xl">
          <div className="lg:flex">
            <img className="w-[542px] h-[542px] rounded-2xl" src="sometng.jpg" alt="" />
            <div className="ml-6">
              <h1 className="text-4xl font-bold">Дополнительные услуги и продукты</h1>
              <p className="text-[#2F2929] text-md py-4">
                Мы рады предложить вам расширенный спектр дополнительных услуг, которые помогут сделать ваш строительный проект ещё более успешным и комфортным. Наша строительная компания стремится обеспечить максимальное качество и удовлетворение потребностей каждого клиента. 
              </p>
              <h2 className="text-md font-semibold py-2">Мы можем предложить: </h2>
                <div className="flex">
                  <div className="columns-1 space-y-1 w-full">
                    <div className="flex w-full">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p className="w-full font-medium text-[#2F2929]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="flex w-full">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p className="w-full font-medium text-[#2F2929]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="flex w-full">
                      <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                      <p className="w-full font-medium text-[#2F2929]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-md mt-4 text-[#2F2929]">У нас работают опытные специалисты с большим опытом работы, которые рады помочь вам в любом вопросе!</p>
                <p className="text-[#2F29294D] text-md w-full mt-10">*Ознакомиться с дополнительными услугами и ценами можете, скачав файл ниже</p>
                
                <button className="w-full mt-4 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                  <a href="">Скачать прайс-лист</a>
                </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 ">
        <div className="max-w-screen-xl mx-auto items-center">
            <h1 className="text-4xl font-bold py-4">Готовые пакеты</h1>
            <div className="flex grid lg:grid-cols-3 grid-cols-2 gap-5">
              <div className="rounded-3xl p-[5px] w-full bg-gradient-to-r from-[#B7E754] to-[#0BCAF0]">
                <div className="bg-white rounded-2xl p-4 w-full h-full">
                  <h2 className="text-2xl font-bold">Запусти ремонт за 72 часа</h2>
                  <img className="rounded-2xl mt-3 h-[200px] w-full object-cover" src="example.png" alt="" />
                  <div className="flex mt-4">
                    <div className="columns-1">
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Выезд, замеры</p>
                      </div>
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Тех. план</p>
                      </div>
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Черновая смета</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="w-4/8 mt-4 bg-[#E0FAEB] text-md font-bold py-2 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">990 ₪</a>
                    </button>
                    <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-2 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">Купить</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl ">
                <div className="bg-white border border-gray-300 rounded-2xl p-4 w-full h-full">
                  <h2 className="text-2xl font-bold">Ясный старт!</h2>
                  <img className="rounded-2xl mt-3 h-[200px] w-full object-cover" src="example.png" alt="" />
                  <div className="flex mt-4">
                    <div className="columns-1">
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Выезд, замеры</p>
                      </div>
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Тех. план</p>
                      </div>
                      <div className="flex items-center py-1">
                        <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                        <p>Черновая смета</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="w-4/8 mt-4 bg-[#E0FAEB] text-md font-bold py-2 px-2 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">990 ₪</a>
                    </button>
                    <button className="w-4/8 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-2 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">Купить</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-lg flex justify-between items-center mt-4">
              <div className="flex">
                <p className="text-lg font-medium mr-2">1 / 3</p>
                <p className="text-gray-900">Листайте, чтобы увидеть следующие услуги</p>
              </div>
              <div className="flex">
                <div className="p-3 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#4D4747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold py-4">Действующие акции</h1>
          
          {/* Главное акционное изображение */}
          <div className="relative rounded-3xl overflow-hidden mb-4 h-56 w-full bg-gray-100">
            <Image
              src="/fornow.png"
              alt="Главная акция"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Специальное предложение</h2>
              <p className="text-xl text-white mb-4">Скидка 20% на все виды ремонта до конца месяца</p>
              <div className="flex">
                <button className="text-lg font-semibold text-black mr-2 py-3 px-6 rounded-xl bg-white hover:bg-gray-100 transition">
                  -10%
                </button>
                <button className="text-lg font-medium text-white py-3 px-6 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                  Получить скидку
                </button>
              </div>
            </div>
          </div>

          {/* Дополнительные акции */}
          <div className="flex space-x-4">
            {/* Первая дополнительная акция */}
            <div className="relative rounded-3xl overflow-hidden h-56 w-1/2 bg-gray-100">
              <Image
                src="/molod.jpg"
                alt="Акция для молодых семей"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Молодым семьям</h2>
                <p className="text-white mb-4">Рассрочка 0% на 12 месяцев</p>
                <div className="flex">
                  <button className="text-lg font-semibold text-black mr-2 py-3 px-6 rounded-xl bg-white hover:bg-gray-100 transition">
                    -10%
                  </button>
                  <button className="text-lg font-medium text-white py-3 px-6 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                    Получить скидку
                  </button>
                </div>
              </div>
            </div>

            {/* Вторая дополнительная акция */}
            <div className="relative rounded-3xl overflow-hidden h-56 w-1/2 bg-gray-100">
              <Image
                src="/pension.png"
                alt="Акция для пенсионеров"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Пенсионерам</h2>
                <p className="text-white mb-4">Специальные скидки до 30%</p>
                <div className="flex">
                  <button className="text-lg font-semibold text-black mr-2 py-3 px-6 rounded-xl bg-white hover:bg-gray-100 transition">
                    -10%
                  </button>
                  <button className="text-lg font-medium text-white py-3 px-6 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                    Получить скидку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8F6EF] w-full py-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Наши работы</h1>
          
          {/* Табы */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white font-bold rounded-2xl shadow-md">
              Капитальный (15)
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Косметический (15)
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Дизайнерский (15)
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Под ключ (1)
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Студии (1)
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Черновой (10)
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 mt-2 flex">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex w-2/3">
                  <div>
                    <div className="flex gap-2 flex-col items-center justify-start">
                      <div className="w-24 h-24">
                        <Image 
                          width={100}
                          height={100}
                          src={"/ourw.jpg"}
                          alt={"qwerty"}
                          className="object-cover w-24 h-24 rounded-2xl"
                        />
                      </div>
                      <div className="w-24 h-24">
                        <Image 
                          width={100}
                          height={100}
                          src={"/ourw.jpg"}
                          alt={"qwerty"}
                          className="object-cover w-24 h-24 rounded-2xl"
                        />
                      </div>
                      <div className="w-24 h-24">
                        <Image 
                          width={100}
                          height={100}
                          src={"/ourw.jpg"}
                          alt={"qwerty"}
                          className="object-cover w-24 h-24 rounded-2xl"
                        />
                      </div>
                      <div className="w-24 h-24">
                        <Image 
                          width={100}
                          height={100}
                          src={"/ourw.jpg"}
                          alt={"qwerty"}
                          className="object-cover w-24 h-24 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full lg:ml-2">
                    <img
                        className="object-cover h-96 rounded-2xl" 
                        src={"/ourw.jpg"}
                      />
                  </div>
                  <div className="w-1/3">

                  </div>
                </div>
                <div className="flex w-full">
                  <button className="w-1/2 mt-4 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-4 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                    <a href="">Получить консультацию</a>
                  </button>
                  <button className="w-1/2 mt-4 ml-2 bg-[#FFCA3B] text-md font-bold py-2 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                      <a href="">Хочу такой же ремонт!</a>
                    </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="py-8 w-full">
        <div className="max-w-screen-xl mx-auto items-center ">
            <h1 className="text-4xl font-bold py-4">Цены ниже, а услуг больше!</h1>
            <div className="lg:flex">
              <div className="flex grid grid-cols-2 gap-5">
                <div className="rounded-3xl p-[5px] w-full bg-gradient-to-r from-[#B7E754] to-[#0BCAF0]">
                  <div className="bg-white rounded-2xl p-4 w-full">
                    <h2 className="text-2xl font-bold">Запусти ремонт за 72 часа</h2>
                    <div className="flex mt-4">
                      <div className="columns-1">
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Выезд, замеры</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Тех. план</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Черновая смета</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#3CB473] text-lg py-3">
                      Включено
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl ">
                  <div className="bg-white border border-gray-300 rounded-2xl p-4 w-full ">
                    <h2 className="text-2xl font-bold">Ясный старт!</h2>
                    <div className="flex mt-4">
                      <div className="columns-1">
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Выезд, замеры</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Тех. план</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Черновая смета</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#3CB473] text-lg py-3">
                      Включено
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl ">
                  <div className="bg-white border border-gray-300 rounded-2xl p-4 w-full ">
                    <h2 className="text-2xl font-bold">Ясный старт!</h2>
                    <div className="flex mt-4">
                      <div className="columns-1">
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Выезд, замеры</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Тех. план</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Черновая смета</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#3CB473] text-lg py-3">
                      Включено
                    </p>
                  </div>
                </div>
                  <div className="rounded-3xl ">
                  <div className="bg-white border border-gray-300 rounded-2xl p-4 w-full ">
                    <h2 className="text-2xl font-bold">Ясный старт!</h2>
                    <div className="flex mt-4">
                      <div className="columns-1">
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Выезд, замеры</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Тех. план</p>
                        </div>
                        <div className="flex items-center py-1">
                          <div className="m-2 bg-[#3CB473] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                          <p>Черновая смета</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#3CB473] text-lg py-3">
                      Включено
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img className="lg:mt-0 mt-10 pl-12" src="chart.png" alt="" />
              </div>
            </div>
            <p className="text-lg mt-5">По статистке за 2024 год наши цены были ниже чем у 85% конкурентов! 
            Мы благодарны каждому клиенту и нам важно сделать качественный ремонт за человеческие деньги! </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-screen-xl mx-auto items-center">
            <h1 className="text-4xl font-bold py-4">Этапы работы</h1>
            <div className="flex grid grid-cols-3 gap-5">
              <div className="rounded-3xl w-full ">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full ">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full invisible">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full invisible">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full ">
                <div className="bg-[#E8FDFF] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full ">
                <div className="bg-[#E8FDFF] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
                            <div className="rounded-3xl w-full ">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full ">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl w-full invisible">
                <div className="bg-[#E0FAEB] rounded-2xl p-6 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Проектирование и планирование</h2>
                    <h2 className="text-5xl font-bold">
                      01
                    </h2>
                  </div>
                  <div className="flex mt-2">
                    Наши дизайнеры создадут уникальный проект, учитывая ваши предпочтения и особенности помещения. 
                    Вместе мы определим стиль и функциональность вашей будущей квартиры.
                  </div>
                </div>
              </div>

            </div>
          <div className="relative rounded-3xl overflow-hidden mb-4 h-56 w-full bg-gray-100 mt-20">
            <img
              src="/works.png"
              alt="Главная акция"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Специальное предложение</h2>
              <p className="text-xl text-white mb-4">Скидка 20% на все виды ремонта до конца месяца</p>
              <div className="flex">
                <button className="text-lg font-semibold text-black mr-2 py-3 px-6 rounded-xl bg-white hover:bg-gray-100 transition">
                  -10%
                </button>
                <button className="text-lg font-medium text-white py-3 px-6 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                  Получить скидку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-[#E8F6EF]">
        <div className="max-w-screen-xl mx-auto items-center">
            <p className="text-xs text-[#8F8F8F]">Держим качество не первый год</p>
            <h1 className="text-4xl font-bold py-4">За N лет работы мы получили более 800 положительных отзывов</h1>
            <div className="flex grid lg:grid-cols-3 grid-cols-2 gap-5">
              <div className="rounded-3xl w-full ">
                <div className="bg-white rounded-2xl p-6 w-full ">
                  <div className="flex items-center justify-between">
                    <Stars count={5} />
                    <p className="text-xs text-[#9C9C9C]">30 июня 2025 г.</p>
                  </div>
                  <div className="py-6">
                    <p className="text-[#4D4747] text-md">
                      Современные технологии достигли такого уровня, что базовый вектор развития требует от нас анализа стандартных подходов. Картельные сговоры не допускают ситуации, при которой
                    </p>
                  </div>
                    <div className="w-12 h-12 flex w-full items-center">
                      <Image 
                        src={"/avatar.jpg"}
                        width={100}
                        height={100}
                        className="min-w-12 min-h-12 max-w-12 max-h-12 object-cover rounded-full"
                        alt={"avatar"}
                      />
                      <p className="pl-2 text-md font-semibold text-[#2F2929]">Александр Сычов</p>
                    </div>
                </div>
              </div>
              <div className="rounded-3xl w-full ">
                <div className="bg-white rounded-2xl p-6 w-full ">
                  <div className="flex items-center justify-between">
                    <Stars count={5} />
                    <p className="text-xs text-[#9C9C9C]">30 июня 2025 г.</p>
                  </div>
                  <div className="py-6">
                    <p className="text-[#4D4747] text-md">
                      Современные технологии достигли такого уровня, что базовый вектор развития требует от нас анализа стандартных подходов. Картельные сговоры не допускают ситуации, при которой
                    </p>
                  </div>
                    <div className="w-12 h-12 flex w-full items-center">
                      <Image 
                        src={"/avatar.jpg"}
                        width={100}
                        height={100}
                        className="min-w-12 min-h-12 max-w-12 max-h-12 object-cover rounded-full"
                        alt={"avatar"}
                      />
                      <p className="pl-2 text-md font-semibold text-[#2F2929]">Александр Сычов</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="text-lg flex justify-between items-center mt-4">
              <div>

              </div>
              <div className="flex">
                <div className="p-3 rounded-xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#4D4747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-10 relative">
        {/* Основной контейнер с обрезкой */}
        <div className="relative bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] w-full h-[700px] rounded-2xl p-14 overflow-hidden">
          <div className="w-2/3">
            <h1 className="text-white text-3xl font-bold">Дизайнерский проект в подарок!</h1>
            <p className="text-white text-lg mt-2">При заключении договора на ремонтно-отделочные работы от 750 000 ₪ вы получаете профессиональный дизайн-проект в подарок.</p>
            <p className="text-white text-lg font-medium mt-4">В состав подарочного дизайн-проекта входят:</p>
            
            <div className="flex mt-2">
              <div className="columns-2 ">
                <div className="flex items-center py-1">
                  <div className="m-2 bg-white min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center py-1">
                  <div className="m-2 bg-white min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center py-1">
                  <div className="m-2 bg-white min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center py-1">
                  <div className="m-2 bg-white min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] rounded-full"></div>
                  <p className="text-white">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            
            <div className="w-2/3 mt-10">
              <input placeholder="Ваше имя" className="w-full mt-3 bg-[#FFFFFF] text-md py-5 px-8 rounded-2xl hover:opacity-90 transition-opacity duration-300" type="text" />
              <input placeholder="Номер телефона" className="w-full mt-3 bg-[#FFFFFF] text-md py-5 px-8 rounded-2xl hover:opacity-90 transition-opacity duration-300" type="text" />
              <button className="w-full mt-3 bg-[#FFCA3B] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                Рассчитать
              </button>
              <p className="text-xs text-white mt-2">*Я соглашаюсь на обработку персональных даннных</p>
            </div>
          </div>
          
          {/* Обертка для изображения с обрезкой */}
          <div className="w-full absolute right-0 bottom-0 w-[100%] h-[100%] overflow-hidden">
            <img 
              className="absolute right-[-40%] bottom-[-40%] h-[1000px] w-auto max-w-none object-contain object-left-bottom" 
              src="book.png" 
              alt="Дизайнерский проект" 
            />
          </div>
        </div>
      </section>
      <section className="py-8 ">
        <div className=" items-center">
            <h1 className="text-4xl font-bold py-4 max-w-screen-xl mx-auto">Используем оборудование этих марок при проведении вашего ремонта</h1>
            <div className="bg-[#E8F6EF] overflow-hidden">
              <div className="relative py-8 h-[240px]"> {/* Фиксированная высота контейнера */}
                <div className="absolute flex items-center mt-8 top-0 left-0 grid grid-cols-8 gap-4 w-[200%] animate-scroll-horizontal">
                  {/* Первый набор блоков */}
                  {[...Array(8)].map((_, i) => (
                    <div key={`first-${i}`} className="bg-white flex-col flex py-12 items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="45" viewBox="0 0 128 45" fill="none">
                        <path d="M2.80737 42.1711H125.205V2.79004H2.80737V42.1711Z" fill="#EC1B24"/>
                        <path d="M91.3153 42.2062C90.7399 41.9618 89.136 41.1418 88.9278 39.5137L85.9527 42.2101L79.0229 42.2062C78.3372 42.0169 77.0884 41.402 76.6966 39.427L73.8316 42.2022L67.7833 42.2101L65.2 33.8687L62.0044 42.2022H56.2133L57.3029 39.4034C54.9767 41.331 54.2543 42.0012 54.0462 42.2101L49.1243 42.2062C47.2755 41.3547 47.1408 39.3837 47.1408 39.3837C44.7411 41.3389 43.9943 41.9933 43.7739 42.2062L39.4764 42.2022C37.897 41.4651 37.395 39.4704 37.395 39.4704C34.9953 41.2325 33.5996 42.2022 33.5996 42.2022H25.8005L30.4285 30.313H26.3024L21.8336 42.2022H16.0791L21.3561 27.5339H17.5851L11.9653 42.2022H6.21089L12.8224 24.7547H2.78271V19.7207H20.3766L19.3849 22.6733H28.9103L27.8329 25.7087H37.444L33.0363 37.7753H37.5297L41.0313 29.0949C41.0313 29.0949 42.3781 25.7087 45.5247 25.7087H57.658L53.3483 37.862H57.8416L64.7592 19.7207H70.232L66.008 31.7006L72.3012 25.7087H78.8637L70.9544 33.4351L72.1175 37.9488L76.9782 37.9054L81.8266 25.622H87.2994L82.904 37.862H89.1972L92.3315 29.6153H88.6462L90.091 25.622H93.5926L96.0168 19.7207H101.673L99.5184 25.4485H102.849L101.502 29.5285H97.9023L94.9394 37.7753H101.233L104.195 29.8754C104.195 29.8754 105.457 25.7994 109.142 25.7087H120.993L116.598 37.7753H125.217V42.2022H113.721C113.721 42.2022 111.027 41.8553 110.574 39.427L107.783 42.2022H103.84C103.84 42.2022 101.318 41.8553 100.963 39.427L98.0859 42.2062H91.3153ZM110.623 37.9488L113.672 30.313H109.803L106.754 37.9488H110.623ZM47.3857 37.9488L50.4343 30.313H46.5776L43.5168 37.9488H47.3857Z" fill="white"/>
                        <path d="M82.2673 24.2031L83.8835 19.6895H89.3686L87.7524 24.2031H82.2673Z" fill="white"/>
                        <path d="M118.827 17.265H117.945V16.4332H118.9C119.084 16.4332 119.402 16.4648 119.402 16.8432C119.402 17.2059 119.108 17.265 118.827 17.265ZM119.769 18.2978L119.745 17.8563C119.733 17.5173 119.573 17.4542 119.414 17.3951C119.586 17.3044 119.794 17.1704 119.794 16.8077C119.794 16.2913 119.328 16.1494 118.863 16.1494H117.565V18.5974H117.945V17.5488H118.863C119.328 17.5488 119.377 17.7854 119.377 17.9864C119.377 18.0771 119.39 18.4476 119.439 18.5974H119.916V18.5422C119.794 18.4831 119.769 18.4358 119.769 18.2978Z" fill="white"/>
                        <path d="M118.655 19.4291C118.104 19.4291 117.59 19.2163 117.198 18.826C116.806 18.4357 116.586 17.9193 116.586 17.3674C116.586 16.8156 116.806 16.2991 117.198 15.9089C117.59 15.5186 118.104 15.3058 118.655 15.3058C119.206 15.3058 119.732 15.5186 120.112 15.9089C120.504 16.2991 120.724 16.8156 120.724 17.3674C120.724 18.5067 119.794 19.4291 118.655 19.4291ZM120.283 15.7512C119.843 15.3176 119.267 15.0811 118.655 15.0811C117.394 15.0811 116.365 16.106 116.365 17.3674C116.365 17.9785 116.598 18.554 117.039 18.9876C117.467 19.4173 118.043 19.6578 118.655 19.6578C119.267 19.6578 119.843 19.4173 120.283 18.9876C120.712 18.554 120.945 17.9785 120.945 17.3674C120.945 16.7564 120.712 16.1809 120.283 15.7512Z" fill="white"/>
                      </svg>
                      <p className="text-[#3CB473] text-md">5 единиц в наличии</p>
                    </div>
                  ))}
              </div>
  </div>
</div>

{/* Добавьте в ваш CSS или Tailwind конфиг */}
<style jsx global>{`
  @keyframes scroll-horizontal {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll-horizontal {
    animation: scroll-horizontal 20s linear infinite;
  }
`}</style>
        </div>
      </section>

      <section className="bg-gray-200  ">
        <div className="flex items-center max-w-screen-xl mx-auto py-2 justify-center text-2xl h-[500px]">
            Здесь типо карта должна быть, нужен апи ключ
        </div>
      </section>
      <footer className=" max-w-screen-xl mx-auto py-2">
          <nav className="flex items-center justify-between">
            <div className="">
              <Image 
                  src="/logo.png" 
                  width={100} 
                  height={100} 
                  alt="" 
              />
              <p className="text-sm w-48 mt-4">Ремонт квартир под ключ с гарантией</p>
            </div>
            <div>
              <p><a href="">Услуги</a></p>
              <p><a href="">Калькулятор</a></p>
              <p><a href="">Наши работы</a></p>
              <p><a href="">Отзывы</a></p>
            </div>
            <div>
              <p><a href="">Email:</a></p>
              <p><a href="">Калькулятор</a></p>
              <p><a href="">Address:</a></p>
              <p><a href="">Отзывы</a></p>
            </div>

            <button className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
              <a href="">Позвонить</a>
            </button>
          </nav>
        </footer>
    </div>
  );
}
