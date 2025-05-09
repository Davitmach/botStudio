'use client'
export const Posib = ()=> {
    const HandleScroll = (page:string) => {
    
        const targetElement = document.querySelector(page);
        const header = document.querySelector('header'); // Получаем элемент header
        if (targetElement && header) {
          // Получаем высоту header
          const headerHeight = header.offsetHeight;
    
         
          const position = targetElement.getBoundingClientRect();
    
          
          window.scrollTo({
            top: position.top + window.pageYOffset - headerHeight, // Учитываем высоту header
            left: 0,
            behavior: 'smooth',
          });
  
        }
      
    };
    return(
        <div id="posib" className="max-w-[1437px] mx-auto w-full   posib_container px-[58px] mt-[112px] ">
       <div className="low_res_info mb-[19px]"> <h1  className="font-[Mont] text-center font-[900] text-[23px] max-w-[164px] w-full ">Возможности
       <span className="gradient"> Bot Studio</span></h1></div>
        <div className="posibs grid grid-cols-3 grid-rows-[repeat(2,minmax(0,247px))] gap-[23px]">
        <div className=" w-full aspect-[1/0.5839] rounded-[12px]">   
            <h1  className="font-[Mont] font-[900] text-[44px] max-w-[319px] w-full ">Возможности
            <span className="gradient"> Bot Studio</span></h1>
            <p className="text-[#333333] text-[20px] w-full  ">Широкий спектр возможностей позволяет создавать индивидуальные решения для вас и вашего бизнеса</p>
        </div>
        <div className="bg-white w-full justify-start hover:shadow-2xl duration-500   rounded-[12px] h-full py-[22px] px-[20px] flex flex-col ">
        <div className="w-[82px] h-[73px] img"><img className="w-full h-full object-cover" src={'/posib1.png'}/></div>
        <div>
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">Индивидуальная разработка</h1>
            <p className="text-[#333333] text-[13px]">Создаём ботов «под ключ», учитывая бизнес-процессы и бренд-гайд клиента</p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className=" text-[#0F72EB] cursor-pointer text-[15px] font-[Mont] font-[700] " >Заказать</a></div> 
        </div>
        <div className="bg-white w-full justify-start hover:shadow-2xl duration-500  rounded-[12px] h-full py-[22px] px-[20px] flex flex-col ">
        <div className="w-[82px] h-[73px] img"><img className="w-full h-full object-cover" src={'/posib3.png'}/></div>
        <div>
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">Интеграции с любыми сервисами</h1>
            <p className="text-[#333333] text-[13px]">Подключаем CRM, платежи, ERP и внешние API
            для единой цифровой экосистемы</p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className="font-[700] cursor-pointer text-[#0F72EB] text-[15px] font-[Mont] ">Заказать</a></div> 
        </div>
        <div className="bg-white w-full justify-start hover:shadow-2xl duration-500 rounded-[12px] h-full py-[22px] px-[20px] flex flex-col">
        <div className="w-[82px] h-[73px] img"><img className="w-full h-full object-cover" src={'/posib3.png'}/></div>
        <div>
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">AI-функции</h1>
            <p className="text-[#333333] text-[13px]">Встраиваем ChatGPT-подобные диалоги, классификацию запросов и генерацию контента </p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className=" text-[#0F72EB] cursor-pointer text-[15px] font-[Mont] font-[700] " >Заказать</a></div> 
        </div>
        <div className="bg-white w-full justify-start hover:shadow-2xl duration-500 rounded-[12px] h-full py-[22px] px-[20px] flex flex-col ">
        <div className="w-[82px] h-[73px] img"><img className="w-full h-full object-cover" src={'/posib4.png'}/></div>
        <div>
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">Конструкторы</h1>
            <p className="text-[#333333] text-[13px]">Запускаем функциональных ботов на визуальных конструкторах за считанные дни и без лишних затрат </p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className=" text-[#0F72EB] cursor-pointer text-[15px] font-[Mont] font-[700] " >Заказать</a></div> 
        </div>
        <div className="bg-white w-full justify-start hover:shadow-2xl duration-500 rounded-[12px] h-full py-[22px] px-[20px] flex flex-col " >
        <div className="w-[82px] h-[73px] img"><img className="w-full h-full object-cover" src={'/posib5.png'}/></div>
        <div>
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">Аналитика и поддержка 24/7</h1>
            <p className="text-[#333333] text-[13px]">Настраиваем метрики, A/B-тесты и берём бот
            на круглосуточную поддержку</p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className=" text-[#0F72EB] cursor-pointer text-[15px] font-[Mont] font-[700]  " >Заказать</a></div> 
        </div>
        <div className="bg-[#E8E8E8] last  w-full justify-center hover:shadow-2xl duration-500  rounded-[12px] h-[247px] py-[22px] px-[20px] flex flex-col " >
       
        <div className="">
            <h1 className="font-[700] text-[#333333] text-[20px] font-[Mont]">Не нашли того,
            что искали?</h1>
            <p className="text-[#333333] text-[13px]">Понимаем, что каждая идея
индивидуальна, поэтому просто
опишите вашу задачу, а реализацию
мы возьмем на себя   </p>
        </div>
        <div className="translate-y-[15px] gotg"><a href="https://t.me/botstudio_manager" target="_blank" className=" text-[#0F72EB] cursor-pointer text-[15px] font-[Mont] font-[700]  " >Заказать</a></div> 
        </div>
        </div>
    </div>
    )
}