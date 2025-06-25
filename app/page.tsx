"use client"

import Image from "next/image";
import Link from "next/link";
import { Stars } from "./components/Stars";
import HeroSection from "./components/HeroSection";
import ProjectCards from "./components/ProjectCardsSection";
import CalculatorSection from "./components/CalculatorSection";
import PricingBlock from "./components/PricingSection";
import Accordion from "./components/Accordion";
import ExtraServices from "./components/ExtraServiceBlock";
import ReadyPackages from "./components/ReadyPackages";
import RepairsSection from "./components/RepairsSection";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <header className="hidden lg:block max-w-screen-xl max-w-screen-xl mx-auto py-2 px-4 lg:px-0">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                width={100} 
                height={100} 
                alt="Логотип компании" 
                className=""
              />
              <div className=""> {/* Скрыто на mobile, видно на md и выше */}
                <p className="text-sm w-48 ml-4">Ремонт квартир под ключ с гарантией</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex items-center hidden lg:flex">
                <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" fill="#A3CEE1"/>
                    <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" fill="white"/>
                  </svg>
                </span>
                <p className="lg:block hidden text-sm ml-4 w-36">Israel, Netanya central district</p>
              </div>
              <div className="flex items-center hidden lg:flex mr-10">
                <span className="items-center justify-center border rounded-xl p-4 border-[#CEECF0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.5001 12.69V14.94C16.5009 15.1489 16.4581 15.3556 16.3745 15.547C16.2908 15.7384 16.168 15.9102 16.0141 16.0514C15.8602 16.1926 15.6785 16.3001 15.4806 16.367C15.2828 16.434 15.0731 16.4588 14.8651 16.44C12.5572 16.1892 10.3403 15.4006 8.39257 14.1375C6.58044 12.986 5.04407 11.4496 3.89257 9.63751C2.62506 7.68091 1.83625 5.45326 1.59007 3.13501C1.57133 2.92761 1.59598 2.71858 1.66245 2.52123C1.72892 2.32388 1.83575 2.14253 1.97615 1.98873C2.11654 1.83493 2.28743 1.71204 2.47792 1.6279C2.6684 1.54376 2.87433 1.50021 3.08257 1.50001H5.33257C5.69655 1.49643 6.04942 1.62532 6.32539 1.86266C6.60137 2.1 6.78163 2.4296 6.83257 2.79001C6.92754 3.51006 7.10366 4.21706 7.35757 4.89751C7.45848 5.16595 7.48032 5.4577 7.4205 5.73817C7.36069 6.01865 7.22172 6.27609 7.02007 6.48001L6.06757 7.43251C7.13524 9.31017 8.68991 10.8648 10.5676 11.9325L11.5201 10.98C11.724 10.7784 11.9814 10.6394 12.2619 10.5796C12.5424 10.5198 12.8341 10.5416 13.1026 10.6425C13.783 10.8964 14.49 11.0725 15.2101 11.1675C15.5744 11.2189 15.9071 11.4024 16.145 11.6831C16.3828 11.9638 16.5092 12.3222 16.5001 12.69Z" fill="#A3CEE1"/>
                  </svg>
                </span>
                <div className="lg:block hidden ">
                  <p className="text-sm ml-4 text-[#8FB0C7] font-medium">Ежедневно, с 9.00-21.00</p>
                  <p className="text-lg ml-4">+ 972 (055) 296-85-22</p>
                </div>
              </div>
              <button className="mr-2 flex bg-[#E0FAEB] text-white text-md font-semibold py-4 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300 ">
                <img className="max-w-[22px] max-w-[22px] min-w-[22px] min-w-[22px] mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2ZSWgUURBAa9xB9KK4oiIKapb6E0aCt4joTcnFmGSqZiIuuXkVPM1RgjHzqyPBePGsEIxrUHLQQBDiQSO4oaAInowJioqo0PLHLUiW+R2mU8E8qGNDP+p3/apqgFlmmT6Skq5F4QEj9AEt3asU2gEziVRn83y0fNYIh6MDhUbM6examAlsaTm0xFi+8a/EKJnroJ2q9oY1aPnReBJ/ZPKcBa1U2IaVxtKzySQKYXk41UarQRtluboFaKm/KIm/cRm0gcInPCV+B4Em0PKrKCJoaajsTNMq0IIR+hgxI6Gx1AVaQKHnkUUKVSxdDxowlrqmImKEn4IGjHDzlDIi/Bk0gB28Ai1/j/6d8F3QghHujf6NKLrpk5KujViCH0AuNwfUEELCCA36iiQt7wFtGKEDnnfIFVBJCAljua/4Y8WHQSumLVuOlr4WWa2GyyW7CbSCQi0ed8h9PMWLQSOb5dhC94Ie30uvewY0khQqQ0ufis8MXarJ1cwDjZh8+qhnq3LOFQzQCI6xTZkkLOhdDdFtz/tFVGam4udi4oXvMau7WDcXtJGymfVG+LVnH9a94XzTItAGWq4wwu/8ZPjmWPeMy5YJ+KBbxaLwN2P5iWuRYpMxQWO12wX7FQAaHN0BYMC7JrinrrpFYSwyySCz21j64lcAeNj1Zmj5WhFHcihp0+n45hdfGc9AS92xbDRNnnb6HzNPGaERt1MouUxVe2Y7Cr8tpYwpHE3qKW+tXxdD689vSi2DLjtBY3VJZTDgjb6XZjQZHiipSEGmg1f4TJjRCgC/h9h+UQh1lk6E+iFOKoWO+MwzpmiR9F6Im6p8ZpvnpBlOGJYDmC7cCGyETxa90JDxJKhHxQTqSrQRvhMxEw+rhZaCGkJIVArt9zluKPTYzUOgkhASKLwPhW4VWngZNxN9qdbG5TAT2NqeWfarK77gfhi534Ao9NJYPu7G7Ol+v1n+W34Ax4nV0qk+7yAAAAAASUVORK5CYII=" alt="phone"></img>
                <a href="" className="text-[#2F915C]">Оставить заявку</a>
              </button>
            </div>
          </nav>
        </header>
        

        <header className="lg:hidden max-w-screen-xl max-w-screen-xl mx-auto py-4 px-4 lg:px-0">
          <nav className="flex items-center justify-between"  >
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                width={86} 
                height={86} 
                alt="Логотип компании" 
                className=""
              />
            </div>
            <div className="flex">
              <button className="mr-2 flex bg-[#E0FAEB] text-white text-md font-semibold py-4 px-5 rounded-2xl hover:opacity-90 transition-opacity duration-300 ">
                <img className="max-w-[22px] max-w-[22px] min-w-[22px] min-w-[22px] mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nO2ZSWgUURBAa9xB9KK4oiIKapb6E0aCt4joTcnFmGSqZiIuuXkVPM1RgjHzqyPBePGsEIxrUHLQQBDiQSO4oaAInowJioqo0PLHLUiW+R2mU8E8qGNDP+p3/apqgFlmmT6Skq5F4QEj9AEt3asU2gEziVRn83y0fNYIh6MDhUbM6examAlsaTm0xFi+8a/EKJnroJ2q9oY1aPnReBJ/ZPKcBa1U2IaVxtKzySQKYXk41UarQRtluboFaKm/KIm/cRm0gcInPCV+B4Em0PKrKCJoaajsTNMq0IIR+hgxI6Gx1AVaQKHnkUUKVSxdDxowlrqmImKEn4IGjHDzlDIi/Bk0gB28Ai1/j/6d8F3QghHujf6NKLrpk5KujViCH0AuNwfUEELCCA36iiQt7wFtGKEDnnfIFVBJCAljua/4Y8WHQSumLVuOlr4WWa2GyyW7CbSCQi0ed8h9PMWLQSOb5dhC94Ie30uvewY0khQqQ0ufis8MXarJ1cwDjZh8+qhnq3LOFQzQCI6xTZkkLOhdDdFtz/tFVGam4udi4oXvMau7WDcXtJGymfVG+LVnH9a94XzTItAGWq4wwu/8ZPjmWPeMy5YJ+KBbxaLwN2P5iWuRYpMxQWO12wX7FQAaHN0BYMC7JrinrrpFYSwyySCz21j64lcAeNj1Zmj5WhFHcihp0+n45hdfGc9AS92xbDRNnnb6HzNPGaERt1MouUxVe2Y7Cr8tpYwpHE3qKW+tXxdD689vSi2DLjtBY3VJZTDgjb6XZjQZHiipSEGmg1f4TJjRCgC/h9h+UQh1lk6E+iFOKoWO+MwzpmiR9F6Im6p8ZpvnpBlOGJYDmC7cCGyETxa90JDxJKhHxQTqSrQRvhMxEw+rhZaCGkJIVArt9zluKPTYzUOgkhASKLwPhW4VWngZNxN9qdbG5TAT2NqeWfarK77gfhi534Ao9NJYPu7G7Ol+v1n+W34Ax4nV0qk+7yAAAAAASUVORK5CYII=" alt="phone"></img>
                <a href="" className="text-[#2F915C]">Оставить заявку</a>
              </button>
              <button>
                <svg width="54" height="54" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="94" height="94" rx="20" stroke="#A7E3C7" strokeWidth="2" fill="none"/>

                  <rect x="30" y="30" width="36" height="4" rx="2" fill="#27AE60"/>
                  
                  <rect x="42" y="40" width="24" height="4" rx="2" fill="#27AE60"/>
                  
                  <rect x="30" y="50" width="36" height="4" rx="2" fill="#27AE60"/>
                  
                  <rect x="42" y="60" width="24" height="4" rx="2" fill="#27AE60"/>
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <nav className="border border-[#E4ECF1] mx-auto py-3 hidden lg:block">
          <div className="flex justify-between max-w-screen-xl mx-auto">
            <Link className="font-medium hover:text-blue-500" href={`#services`} >
                      Услуги
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#calculator`} >
                      Рассчитать стоимость
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#shares`} >
                      Акции
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#works`} >
                      Наши работы
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#reviews`} >
                      Отзывы
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#services`} >
                      Ответы на вопросы
            </Link>
            <Link className="font-medium hover:text-blue-500" href={`#services`} >
                      Контакты
            </Link>
          </div>
        </nav>
      </div>

      <HeroSection />
      
      <ProjectCards  />

      <CalculatorSection />

      <section className="max-w-screen-xl lg:mx-auto px-4 sm:px-0 py-10 ">
        <h1 className="text-4xl font-bold py-8">Очная консультация и техпроект</h1>
        <div className="flex overflow-hidden rounded-xl lg:h-[550px] h-[200px]">
          <div className="relative w-1/2">
            <img 
              src="first2.png" 
              alt="Консультация" 
              className=" rounded-l-xl"
            />
            <div className="absolute top-4 left-6">
              <p className="text-white">До</p>
            </div>
          </div>
          <div className="relative w-1/2">
            <img 
              src="first1.png" 
              alt="Техпроект" 
              className=" rounded-r-xl"
            />
            <div className="absolute top-4 left-6">
              <p className="text-white">После</p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold py-4">День встречи</h1>
        <div className="relative">
          <div className="grid grid-cols-4 gap-8 pb-8">
            <div className="flex flex-col">
              <div className="relative z-10 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white rounded-full p-3 w-15 h-15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M9.33334 17.7548L13.6667 22.0708C14.4643 22.8653 15.7579 22.8653 16.5556 22.0708L26.6667 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="lg:text-lg text-md py-2 mt-2">Дизайнер приезжает на объект</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">2</p>
              </div>
              <h3 className="lg:text-lg text-md py-2 mt-2">Делает замеры</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">3</p>
              </div>
              <h3 className="lg:text-lg text-md py-2 mt-2">Обсуждает пожелания и показывает сценарии планироваки</h3>
            </div>
            
            <div className="flex flex-col">
              <div className="relative z-10 bg-[#E8FDFF] text-white rounded-full p-4 w-15 h-15 flex items-center justify-center">
                <p className="text-[#259FD4] text-lg">4</p>
              </div>
              <h3 className="lg:text-lg text-md py-2 mt-2">Рассказывает о работе и отличиях между проектами</h3>
            </div>
            
            {/* Полоска под кружками */}
            <div className="absolute left-0 right-0 top-1/5 h-1 rounded-full opacity-10 bg-[#2F2929] transform -translate-y-1/2"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold py-4">Через 2–3 дня клиент получает:</h1>
        <div className="lg:flex lg:grid grid-cols-3 gap-4">
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] w-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Технический план с заметками</a>
            </button>
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] w-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Базовую 3Д модель с расстановкой</a>
            </button>
            <button className="lg:mt-0 mt-4 bg-[#E8F6EF] фw-full border border-[#D0EEDF] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
              <a href="">Черновую смету на ремонт</a>
            </button>
        </div>
      </section>
      <section className="bg-[#E8F6EF] w-full ">
            <div className="lg:mx-auto px-4 sm:px-0 py-8 max-w-screen-xl">
              <h1 className="text-4xl font-bold py-4 ">Рассчитаем стоимость онлайн за 5 минут</h1>
                <div className="bg-[#ffffff] rounded-2xl flex p-6 ">
                  <div className="relative hidden lg:block w-2/5">
                    <img src="xyu.png" className="h-full rounded-2xl" alt="" />
                    <div className="absolute bottom-5 right-6 flex flex-col text-white">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] h-4 w-4 rounded-full mr-2"></div>
                        <h2 className="text-xl font-medium right-8">Виталий</h2>
                      </div>
                      <p className="text-xs mt-1">Операционный менеджер</p>
                    </div>
                  </div>
                  <div className="lg:w-3/5 lg:ml-4">
                    <div className="flex items-center">
                      <button className="w-36 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-xs font-bold py-3 px-4 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                        <a href="">Рассчет готов</a>
                      </button>
                      <span className="bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] w-full h-2.5 rounded-full ml-2"></span>
                    </div>

                    <div className="mt-4">
                      <div className="flex mt-4">
                        <input type="text" placeholder="Имя" className="w-1/2 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                        <input type="phone" placeholder="Номер телефона" className="w-1/2 ml-4 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                      </div>
                      <div className="flex mt-4">
                        <input type="text" placeholder="Адрес" className="w-1/2 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                        <input type="text" placeholder="Город" className="w-1/2 ml-4 py-5 px-5 rounded-2xl border-1 border-[#D3D3D3]" />
                      </div>
                    </div>
                      <div className="flex mt-4 w-full">
                        <div className="w-full">
                          <div className="">
                            <h2 className="text-xl font-semibold mb-1">Вид ремонта</h2>
                            <div className="space-y-2">
                              {/* Квадратные чекбоксы */}
                              <div className="flex items-center">
                                <input type="checkbox" id="painting" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="painting">Покраска квартиры</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="capital" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="capital">Капитальный</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="cosmetic" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="cosmetic">Косметический</label>
                              </div>
                              
                              {/* Круглые радио-кнопки */}
                              <div className="flex items-center">
                                <input type="radio" id="bathroom" name="repair-type" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="bathroom">Ремонт ванной и туалета</label>
                              </div>
                              <div className="flex items-center">
                                <input type="radio" id="designer" name="repair-type" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="designer">Дизайнерский</label>
                              </div>
                              <div className="flex items-center">
                                <input type="radio" id="turnkey" name="repair-type" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="turnkey">Под ключ</label>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h2 className="text-xl font-semibold mb-1">Состояние помещения</h2>
                            <div className="space-y-2">
                              {/* Квадратные чекбоксы */}
                              <div className="flex items-center">
                                <input type="checkbox" id="no-finish" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="no-finish">Без отделки</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="rough-finish" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="rough-finish">С черновой отделкой</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="pre-finish" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="pre-finish">С предчистовой отделкой (White Box)</label>
                              </div>
                              
                              {/* Круглые радио-кнопки */}
                              <div className="flex items-center">
                                <input type="radio" id="livable" name="condition" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="livable">Жилое состояние</label>
                              </div>
                              <div className="flex items-center">
                                <input type="radio" id="bad-condition" name="condition" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="bad-condition">Плохое состояние</label>
                              </div>
                              <div className="flex items-center">
                                <input type="radio" id="dont-know" name="condition" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label htmlFor="dont-know">Не знаю</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full ml-6">
                          <div className="">
                            <h2 className="text-xl font-semibold mb-1">Площадь помещения</h2>
                            <div className="space-y-1">
                              <div>16 м2</div>
                              <div className="text-gray-600">{">"} 50м2</div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h2 className="text-xl font-semibold mb-1">Тип недвижимости</h2>
                            <div className="space-y-2">
                              {/* Квадратные чекбоксы */}
                              <div className="flex items-center">
                                <input type="checkbox" id="new-building" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="new-building">Новостройка</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="secondary" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="secondary">Вторичное жилье</label>
                              </div>
                              
                              {/* Круглые радио-кнопки */}
                              <div className="flex items-center">
                                <input type="radio" id="old-fund" name="property-type" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="old-fund">Старый фонд</label>
                              </div>
                            </div>
                          </div>  
                          
                          <div className="mt-4">
                            <h2 className="text-xl font-semibold mb-1">Отделочные материалы</h2>
                            <div className="space-y-2">
                              {/* Квадратные чекбоксы */}
                              <div className="flex items-center">
                                <input type="checkbox" id="floor" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="floor">Напольное покрытие: ламинат, паркет, керамогранит, инженерная плитка, другое</label>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="walls" className="mr-2 w-5 h-5 rounded-none text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="walls">Стены: покраска, обои, декоративная штукатурка, другое</label>
                              </div>
                              
                              {/* Круглые радио-кнопки */}
                              <div className="flex items-center">
                                <input type="radio" id="old-fund-2" name="materials" className="mr-2 w-5 h-5 rounded-full text-green-500 focus:ring-green-500 border-gray-300" />
                                <label className="w-full" htmlFor="old-fund-2">Старый фонд</label>
                              </div>
                            </div>
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

      <PricingBlock />

      <ExtraServices />

      <ReadyPackages />

      <RepairsSection />
      
      <section className="py-8" >
        <div className="max-w-screen-xl lg:mx-auto px-4 sm:px-0">
          <h1 className="text-4xl font-bold py-4">Действующие акции</h1>
          
          <div className="relative rounded-3xl overflow-hidden mb-4 h-56 w-full bg-gray-100">
            <Image
              src="/fornow.png"
              alt="Главная акция"
              fill
              className="object-cover z-30"
              quality={100}
              priority
            />
            <div className=" absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 lg:py-0 py-4">
              <h2 className="lg:text-3xl text-2xl font-bold text-white mb-2 z-40">Специальное предложение</h2>
              <p className="lg:text-xl text-md text-white mb-4 z-40">Скидка 20% на все виды ремонта до конца месяца</p>
              <div className="flex z-40">
                <button className="lg:text-lg text-xs font-semibold text-black mr-2 lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-[#E0FAEB] hover:bg-gray-100 transition">
                  -10%
                </button>
                <button className="lg:text-lg text-xs font-medium text-white lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
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
                className="object-cover z-10"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                <h2 className="lg:text-2xl text-xl font-bold text-white mb-2 z-20">Молодым семьям</h2>
                <p className="text-white mb-4 z-20">Рассрочка 0% на 12 месяцев</p>
                <div className="flex">
                  <button className="z-20 lg:text-lg text-xs font-semibold text-black mr-2 lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-[#E0FAEB] hover:bg-gray-100 transition">
                    -10%
                  </button>
                  <button className="z-20 lg:text-lg text-xs font-medium text-white lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
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
                className="object-cover z-10"
                quality={100}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
                <h2 className="text-2xl font-bold text-white mb-2 z-20">Пенсионерам</h2>
                <p className="text-white mb-4 z-20">Специальные скидки до 30%</p>
                <div className="flex z-20">
                  <button className="z-20 lg:text-lg text-xs font-semibold text-black mr-2 lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-[#E0FAEB] hover:bg-gray-100 transition">
                    -10%
                  </button>
                  <button className="z-20 lg:text-lg text-xs font-medium text-white lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                    Получить скидку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E8F6EF] w-full py-8" id="works">
        <div className="max-w-screen-xl lg:mx-auto px-4 sm:px-0">
          <h1 className="text-4xl font-bold mb-6">Наши работы</h1>
          
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white font-bold rounded-2xl shadow-md">
              Капитальный <span className="p-2 py-1 m-1 bg-white rounded-full text-black text-md">15</span>
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Косметический <span className="p-2 py-1 m-1  rounded-full  bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md">15</span>
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Дизайнерский <span className="p-2 py-1 m-1  rounded-full  bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md">15</span>
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Под ключ <span className="p-2 py-1 m-1  rounded-full  bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md">15</span>
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Студии <span className="p-2 py-1 m-1  rounded-full  bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md">15</span>
            </button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl">
              Черновой <span className="p-2 py-1 m-1  rounded-full  bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md">15</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 mt-2 flex">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex ">
                  <div className="flex w-1/2">
                    <div className="flex">
                      <div className="flex gap-2 flex-col items-center justify-start">
                        <div className="lg:w-24 w-20 lg:h-24 h-20">
                          <Image 
                            width={100}
                            height={100}
                            src={"/ourw.jpg"}
                            alt={"qwerty"}
                            className="object-cover lg:w-24 lg:h-24 w-20 h-20 rounded-2xl"
                          />
                        </div>
                        <div className="lg:w-24 w-20 lg:h-24 h-20">
                          <Image 
                            width={100}
                            height={100}
                            src={"/ourw.jpg"}
                            alt={"qwerty"}
                            className="object-cover lg:w-24 lg:h-24 w-20 h-20 rounded-2xl"
                          />
                        </div>
                        <div className="lg:w-24 w-20 lg:h-24 h-20">
                          <Image 
                            width={100}
                            height={100}
                            src={"/ourw.jpg"}
                            alt={"qwerty"}
                            className="object-cover lg:w-24 lg:h-24 w-20 h-20 rounded-2xl"
                          />
                        </div>
                        <div className="lg:w-24 w-20 lg:h-24 h-20">
                          <Image 
                            width={100}
                            height={100}
                            src={"/ourw.jpg"}
                            alt={"qwerty"}
                            className="object-cover lg:w-24 lg:h-24 w-20 h-20 rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-5/5 h-full ml-2">
                      <img
                          className="object-cover h-full rounded-2xl" 
                          src={"/ourw.jpg"}
                        />
                    </div>
                  </div>
                  <div className="ml-4">
                      <h3 className="w-full  text-black font-bold text-xl">Ремонт кв. 14 ул. Песина</h3>

                      <h3 className="w-full text-black font-semibold text-xl">Перечень работ</h3>
                        <div className="flex flex-col  space-y-2">
                            <div className="flex items-center">
                              <div className="h-2 w-2 bg-[#3CB473] rounded-full mr-2" />
                              <p>Выравнивание стен, полов и потолков</p>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 bg-[#3CB473] rounded-full mr-2" />
                              <p>Выравнивание стен, полов и потолков</p>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 bg-[#3CB473] rounded-full mr-2" />
                              <p>Выравнивание стен, полов и потолков</p>
                            </div>

                        </div>
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
        <div className="max-w-screen-xl lg:mx-auto px-4 sm:px-0 items-center ">
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
        <div className="max-w-screen-xl lg:mx-auto px-4 sm:px-0 items-center">
            <h1 className="text-4xl font-bold py-4">Этапы работы</h1>
            <div className="flex grid lg:grid-cols-3 gap-5">
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
              <div className="rounded-3xl w-full invisible lg:block hidden">
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
              <div className="rounded-3xl w-full invisible lg:block hidden">
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
              <div className="rounded-3xl w-full invisible lg:block hidden">
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
          <div className="relative rounded-3xl overflow-hidden mb-4 h-56 w-full bg-gray-100 mt-15">
            <Image
              src="/works.png"
              alt="Главная акция"
              fill
              className="object-cover z-30"
              quality={100}
              priority
            />
            <div className=" absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 lg:py-0 py-4">
              <h2 className="lg:text-3xl text-2xl font-bold text-white mb-2 z-40">Специальное предложение</h2>
              <p className="lg:text-xl text-md text-white mb-4 z-40">Скидка 20% на все виды ремонта до конца месяца</p>
              <div className="flex z-40">
                <button className="lg:text-lg text-xs font-semibold text-black mr-2 lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-[#E0FAEB] hover:bg-gray-100 transition">
                  -10%
                </button>
                <button className="lg:text-lg text-xs font-medium text-white lg:py-4 py-3 lg:px-6 px-4 rounded-2xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] hover:opacity-90 transition">
                  Получить скидку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-[#E8F6EF]" id="reviews">
        <div className="max-w-screen-xl lg:mx-auto px-4 lg:px-0 items-center">
            <p className="text-xs text-[#8F8F8F]">Держим качество не первый год</p>
            <h1 className="text-4xl font-bold py-4">За N лет работы мы получили более 800 положительных отзывов</h1>
            <div className="flex grid lg:grid-cols-3 grid-cols-1 gap-5 overflow-x-auto">
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
                    <path d="M15 18L9 12L15 6" stroke="#4D4747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="max-w-screen-xl lg:mx-auto px-4 lg:px-0 py-10 relative">
        {/* Основной контейнер с обрезкой */}
        <div className="relative bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] w-full lg:h-[700px] h-full rounded-2xl lg:p-14 p-8 overflow-hidden">
          <div className="lg:w-2/3 w-full">
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
            
            <div className="lg:w-2/3 lg:mt-10 mt-2">
              <input placeholder="Ваше имя" className="w-full mt-3 bg-[#FFFFFF] text-md py-5 px-8 rounded-2xl hover:opacity-90 transition-opacity duration-300" type="text" />
              <input placeholder="Номер телефона" className="w-full mt-3 bg-[#FFFFFF] text-md py-5 px-8 rounded-2xl hover:opacity-90 transition-opacity duration-300" type="text" />
              <button className="w-full mt-3 bg-[#FFCA3B] text-md font-bold py-5 px-10 rounded-2xl hover:opacity-90 transition-opacity duration-300">
                Рассчитать
              </button>
              <p className="text-xs text-white mt-2">*Я соглашаюсь на обработку персональных даннных</p>
            </div>
          </div>
          
          {/* Обертка для изображения с обрезкой */}
          <div className="w-full hidden lg:block absolute right-0 bottom-0 w-[100%] h-[100%] overflow-hidden">
            <img 
              className="absolute right-[-40%] bottom-[-40%] h-[1000px] w-auto max-w-none object-contain object-left-bottom" 
              src="book.png" 
              alt="Дизайнерский проект" 
            />
          </div>
        </div>
      </section>
      <section className="py-8 ">
        <div className="mx-auto lg:mx-auto px-4 lg:px-0 items-center">
            <h1 className="text-3xl font-bold py-4 max-w-screen-xl mx-auto">Используем оборудование этих марок при проведении вашего ремонта</h1>
            <div className="bg-[#E8F6EF] overflow-hidden">
              <div className="relative py-8 h-[200px]">
                <div className="absolute flex items-center mt-8 top-0 left-0 grid lg:grid-cols-12 grid-cols-4 gap-4 w-[200%] animate-scroll-horizontal">
                  {[...Array(12)].map((_, i) => (
                    <div key={`first-${i}`} className="bg-white flex-col flex py-8  items-center rounded-lg">
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

      <section className="py-8 ">
        <div className="mx-auto lg:mx-auto px-4 lg:px-0 items-center">
            <h1 className="text-4xl font-bold py-4 max-w-screen-xl mx-auto">Ответы на частые вопросы</h1>
            <Accordion />
        </div>
      </section>

      <section className="bg-gray-200  mx-auto">
        <div className="flex w-1/2 items-center max-w-screen-xl mx-auto py-2 justify-center text-2xl h-[500px]">
            Здесь типо карта должна быть, нужен апи ключ
        </div>
      </section>
      <footer className=" max-w-screen-xl mx-auto lg:mx-auto px-4 lg:px-0 py-4">
          <nav className="flex items-center justify-between">
            <div className="mr-2">
              <Image 
                  src="/logo.png" 
                  width={100} 
                  height={100} 
                  alt="" 
              />
              <p className="text-sm w-48 mt-4">Ремонт квартир под ключ с гарантией</p>
            </div>
            <div className="flex items-center">
              <div className="lg:flex">
                <div className="mr-2">
                  <p className="py-1 px-12 hover:underline"><a  href="">Услуги</a></p>
                  <p className="py-1 px-12 hover:underline"><a  href="">Калькулятор</a></p>
                  <p className="py-1 px-12 hover:underline"><a  href="">Наши работы</a></p>
                  <p className="py-1 px-12 hover:underline"><a  href="">Отзывы</a></p>
                </div>
                <div className="mr-2 lg:mt-0 mt-3">
                  <p className="py-1 px-12"><a href="">Email:</a></p>
                  <p className="py-1 px-12 hover:underline text-blue-500"><a href="mailto:happyflowdesign@gmail.com">happyflowdesign@gmail.com</a></p>
                  <p className="py-1 px-12"><a href="">Адрес:</a></p>
                  <p className="py-1 px-12"><a href="">Israil Netanya central district</a></p>
                </div>
              </div>
                <button className="lg:mt-0 mt-3 max-h-15 bg-gradient-to-r from-[#B7E754] to-[#0BCAF0] text-white text-md font-bold py-5 px-10 rounded-2xl shadow-md hover:opacity-90 transition-opacity duration-300">
                  <a href="">Позвонить</a>
                </button>
            </div>
          </nav>
        </footer>
    </div>
  );
}
