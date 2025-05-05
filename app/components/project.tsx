    'use client';
    import { useEffect } from "react";
    export const Project = ()=> {
        useEffect(() => {
            const container = document.querySelector('.projects') as HTMLElement | null;
            if (!container) return;
    
            let scrollDirection = 1; // 1 — вправо, -1 — влево
            let animationFrame: number;
            let isPaused = false;
            const scrollSpeed = 1; // скорость прокрутки, можешь изменить
    
            const scroll = () => {
                if (!isPaused) {
                    container.scrollLeft += scrollDirection * scrollSpeed;
    
                    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    
                    // Точное сравнение с запасом для плавности
                    if (container.scrollLeft >= maxScrollLeft - 2) scrollDirection = -1;
                    if (container.scrollLeft <= 2) scrollDirection = 1;
                }
    
                animationFrame = requestAnimationFrame(scroll);
            };
    
            const handleMouseEnter = () => { isPaused = true; };
            const handleMouseLeave = () => { isPaused = false; };
    
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
    
            animationFrame = requestAnimationFrame(scroll);
    
            return () => {
                cancelAnimationFrame(animationFrame);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, []);
        return(
            <div id="project" className="project_container flex flex-col max-w-[1437px] mx-auto px-[58px] gap-[68px] mb-[48px]">
                <div className="flex items-start justify-between gap-[30px] info_block">
                    <div><h1 className="text-[44px] font-[Mont] font-[900] max-w-[423px] w-full " style={{lineHeight:'1.1'}}>Изучите наши
                    <span className="gradient">  готовые решения</span></h1></div>
                    <div><p className="max-w-[707px] w-full text-[#333333] text-[20px]">Откройте для себя готовых Telegram-ботов для бизнеса, обучения, сервиса, развлечений и других сфер. Быстрая интеграция, удобные интерфейсы и адаптация под ваши задачи — с Bot Studio вы легко создадите бота, который работает на результат    </p></div>
                </div>
                <div className="flex overflow-x-auto overflow-y-hidden gap-[15px]  pb-[68px] projects">

                    <div className=" shrink-0 w-[428px] flex flex-col gap-[10px] hover:shadow-2xl duration-500 rounded-[12px]">
                        <div className="w-full h-[284px] bg-[white] img rounded-[12px]"><img className="object-contain w-full h-full" src="/banner1.png" alt="" /></div>
                        <div className="flex flex-col gap-[2px] p-[5px]">
                            <h1 className="text-[#333333] text-[25px]  font-[Mont] font-[700]">Бот для продажи контента</h1>
                            <p className="text-[#333333] text-[16px] max-w-[396px] w-full">Принимает разовые платежи и автосписания (подписки) прямо в Telegram, мгновенно выдаёт доступ к курсам, видео или любым цифровым материалам</p>
                        </div>
                    </div>
                    <div className=" shrink-0 w-[428px] flex flex-col gap-[10px] hover:shadow-2xl duration-500 rounded-[12px]">
                        <div className="w-full h-[284px] bg-[white] img rounded-[12px]"><img className="object-contain w-full h-full" src="/banner2.png" alt="" /></div>
                        <div className="flex flex-col gap-[2px] p-[5px]">
                            <h1 className="text-[#333333] text-[25px]  font-[Mont] font-[700]">ИИ-ассистент</h1>
                            <p className="text-[#333333] text-[16px] max-w-[396px] w-full">Интегрируем любую крупную языковую модель или специализированную нейросеть: бот отвечает 24/7, консультирует, делает подборки и снижает нагрузку на поддержку</p>
                        </div>
                    </div>
                    <div className=" shrink-0 w-[428px] flex flex-col gap-[10px] hover:shadow-2xl duration-500 rounded-[12px]">
                        <div className="w-full h-[284px] bg-[white] img rounded-[12px]"><img className="object-contain w-full h-full"  src="/banner3.png" alt="" /></div>
                        <div className="flex flex-col gap-[2px] p-[5px]">
                            <h1 className="text-[#333333] text-[25px]  font-[Mont] font-[700]">Сбор лидов из чатов</h1>
                            <p className="text-[#333333] text-[16px] max-w-[396px] w-full">Парсит сообщения в группах/каналах по заданным ключевым словам, извлекает контакты и отправляет лиды в вашу CRM, Google Sheets или на e-mail</p>
                        </div>
                    </div>
                    <div className=" shrink-0 w-[428px] flex flex-col gap-[10px] hover:shadow-2xl duration-500 rounded-[12px]">
                        <div className="w-full h-[284px] bg-[white] img rounded-[12px]"><img className="object-contain w-full h-full" src="/banner4.png" alt="" /></div>
                        <div className="flex flex-col gap-[2px] p-[5px]">
                            <h1 className="text-[#333333] text-[25px] font-[Mont] font-[700]">Бот-Фотобудка</h1>
                            <p className="text-[#333333] text-[16px] max-w-[396px] w-full">Пользователь загружает свои фото, бот обучается на лице и генерирует новые снимки в разных стилях (ретро, аниме, fashion-look и т.д.)</p>
                        </div>
                    </div>
                    <div className=" shrink-0 w-[428px] flex flex-col gap-[10px] hover:shadow-2xl duration-500 rounded-[12px]">
                        <div className="w-full h-[284px] bg-[white] img rounded-[12px]"><img className="object-contain w-full h-full" src="/banner5.png" alt="" /></div>
                        <div className="flex flex-col gap-[2px] p-[5px]">
                            <h1 className="text-[#333333] text-[25px]  font-[Mont] font-[700]">Бот для 3x-ui</h1>
                            <p className="text-[#333333] text-[16px] max-w-[396px] w-full">Управление панелями 3x-ui из Telegram: продаёт конфигурации, продлевает доступ, показывает трафик и статистику, поддерживает автосписания</p>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }