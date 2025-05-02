'use client'

import { useState } from "react"

export const Header = () => {
    const [active,setActive] = useState(false);
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
          setActive(false);
        }
      
    };
    return(
        <header className="fixed w-full z-[999999999]  flex items-center justify-between  ">
  <div className=" header_container px-[58px] max-w-[2000px] h-[98px] w-full mx-auto  flex items-center justify-between relative">
  <div className="logo font-[800] text-[33px] ">Bot Studio</div>
  <div className="menu">
    <ul className="flex items-center gap-[60px]">
      <li><h1  onClick={()=>HandleScroll('#banner') }   className=" text-[#000000] font-[600] text-[18.71px]">О студии</h1></li>
      <li><h1 onClick={()=>HandleScroll('#project') }  className=" text-[#000000] font-[600] text-[18.71px]">Готовые решения</h1></li>
      <li><h1 onClick={()=> HandleScroll('#posib')}  className=" text-[#000000] font-[600] text-[18.71px]">Возможности</h1></li>
    </ul>
  </div>
  <div className=" flex items-center gap-[35px] contacts">
    <div className="flex  items-center gap-[14px]">
    <svg className="cursor-pointer" width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.533 0.908043H14.467C6.47708 0.908043 0 7.40567 0 15.4209V15.4871C0 23.5024 6.47708 30 14.467 30H14.533C22.5229 30 29 23.5024 29 15.4871V15.4209C29 7.40567 22.5229 0.908043 14.533 0.908043Z" fill="#00B0F2"/>
<path d="M4.63632 14.9583C4.67696 14.9379 4.71762 14.9186 4.75725 14.9002C5.4461 14.5802 6.1441 14.2805 6.84109 13.9809C6.87868 13.9809 6.94166 13.9371 6.97722 13.9228C7.03106 13.8993 7.08492 13.8769 7.13877 13.8535C7.2424 13.8086 7.34604 13.7648 7.44866 13.72C7.65593 13.6313 7.86216 13.5426 8.06943 13.4539L9.30997 12.9209C10.137 12.5662 10.9651 12.2105 11.7921 11.8558C12.6191 11.5011 13.4472 11.1454 14.2742 10.7907C15.1012 10.436 15.9293 10.0803 16.7563 9.72558C17.5834 9.37089 18.4114 9.01518 19.2385 8.66049C19.4224 8.58099 19.6215 8.46275 19.8186 8.4281C19.9842 8.39854 20.1457 8.34147 20.3124 8.30987C20.6283 8.24973 20.9768 8.22528 21.2796 8.35676C21.3843 8.40262 21.4808 8.46683 21.561 8.54735C21.9451 8.92855 21.8912 9.55435 21.81 10.0905C21.244 13.827 20.6781 17.5645 20.1112 21.301C20.034 21.8137 19.9283 22.3763 19.525 22.7004C19.1836 22.9746 18.6979 23.0052 18.2763 22.889C17.8546 22.7718 17.4828 22.5261 17.118 22.2846C15.6052 21.2796 14.0913 20.2746 12.5785 19.2697C12.2188 19.0312 11.8185 18.7193 11.8226 18.2861C11.8246 18.0252 11.9801 17.7928 12.1386 17.5859C13.4533 15.8654 15.3502 14.6831 16.7614 13.0422C16.9605 12.8108 17.117 12.3929 16.8437 12.2594C16.6812 12.1799 16.4942 12.2879 16.3459 12.3909C14.4805 13.6904 12.6161 14.9909 10.7507 16.2905C10.1421 16.7145 9.50405 17.1507 8.77049 17.2547C8.11415 17.3484 7.45374 17.165 6.81874 16.9774C6.28635 16.8205 5.75496 16.6594 5.22561 16.4933C4.94418 16.4056 4.6536 16.3108 4.43617 16.1121C4.21874 15.9133 4.09379 15.579 4.22486 15.314C4.30715 15.1479 4.46667 15.0429 4.63431 14.9573L4.63632 14.9583Z" fill="#FCFCEE"/>
</svg>
<span className="text-[#000000] font-[600]">Telegram</span>
    </div>
    <div><button className="bg-[#0F72EB] btn text-[15px] font-[600] rounded-[22px] py-[10px] px-[20px] text-white" onClick={()=> HandleScroll('#mail')}>Оставить заявку</button></div>
  </div>
  </div>
  <div className="burder_btn" onClick={()=> setActive(!active)}>{active ?<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.18409 13H0L5.91888 6.31429L0.327613 0H2.5117L7.01092 5.07L11.4883 0H13.6724L8.10296 6.31429L14 13H11.8159L7.01092 7.55857L2.18409 13Z" fill="#0F72EB"/>
</svg>
 :<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5H19" stroke="url(#paint0_linear_96_3126)" strokeWidth="2" strokeLinecap="round"/>
<path d="M1 6.5H19" stroke="url(#paint1_linear_96_3126)" strokeWidth="2" strokeLinecap="round"/>
<path d="M9 11.5L19 11.5" stroke="url(#paint2_linear_96_3126)" strokeWidth="2" strokeLinecap="round"/>
<defs>
<linearGradient id="paint0_linear_96_3126" x1="1" y1="2" x2="19" y2="2" gradientUnits="userSpaceOnUse">
<stop stopColor="#0F72EB"/>
<stop offset="0.495192" stopColor="#00B0F2"/>
<stop offset="1" stopColor="#0F72EB"/>
</linearGradient>
<linearGradient id="paint1_linear_96_3126" x1="1" y1="7" x2="19" y2="7" gradientUnits="userSpaceOnUse">
<stop stopColor="#0F72EB"/>
<stop offset="0.495192" stopColor="#00B0F2"/>
<stop offset="1" stopColor="#0F72EB"/>
</linearGradient>
<linearGradient id="paint2_linear_96_3126" x1="9" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
<stop stopColor="#0F72EB"/>
<stop offset="0.495192" stopColor="#00B0F2"/>
<stop offset="1" stopColor="#0F72EB"/>
</linearGradient>
</defs>
</svg>}
</div>
<div style={{
    left:active ? '0': '100%'
}} className="low_res_menu absolute bg-white z-[999999999999] pb-[50px] w-full flex flex-col items-center gap-[32px] duration-300">
  <div>
    <ul className="flex flex-col items-center gap-[15px]">
        <li><h1 onClick={()=> HandleScroll('#banner')}  className="text-black text-[18px]">О студии</h1></li>
        <li><h1  onClick={()=>HandleScroll('#project') }  className="text-black text-[18px]">Готовые решения</h1></li>
        <li><h1  onClick={()=>HandleScroll('#posib') }  className="text-black text-[18px]">Возможности</h1></li>
    </ul>
  </div>
  <div className="flex items-center flex-col gap-[20px]">
    <div><button className="bg-[#0F72EB]  text-[15px] font-[600] rounded-[22px] py-[10px] px-[35px] text-white" onClick={()=> HandleScroll('#mail')}>Оставить заявку</button></div>
    <div className="flex gap-[6px]"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.340234 5.82026C0.369974 5.80533 0.399728 5.79114 0.428724 5.7777C0.93282 5.54327 1.44361 5.32377 1.95365 5.10427C1.98116 5.10427 2.02725 5.07216 2.05327 5.06171C2.09267 5.04454 2.13209 5.02811 2.17149 5.01094C2.24733 4.97809 2.32317 4.94598 2.39826 4.91313C2.54994 4.84818 2.70086 4.78322 2.85254 4.71827L3.76035 4.32779C4.36556 4.06797 4.97153 3.8074 5.57674 3.54758C6.18196 3.28776 6.78791 3.0272 7.39312 2.76738C7.99833 2.50756 8.60428 2.247 9.20949 1.98718C9.8147 1.72736 10.4207 1.46679 11.0259 1.20697C11.1605 1.14873 11.3062 1.06212 11.4504 1.03674C11.5716 1.01509 11.6898 0.97328 11.8118 0.950135C12.043 0.906085 12.298 0.888169 12.5196 0.984481C12.5962 1.01808 12.6668 1.06511 12.7255 1.1241C13.0066 1.40333 12.9672 1.86174 12.9077 2.25446C12.4935 4.99152 12.0794 7.72934 11.6645 10.4664C11.608 10.842 11.5307 11.2541 11.2355 11.4915C10.9857 11.6923 10.6303 11.7147 10.3218 11.6296C10.0132 11.5438 9.7411 11.3638 9.47418 11.1869C8.36711 10.4507 7.25929 9.71457 6.15221 8.97841C5.88901 8.80371 5.59608 8.57525 5.59905 8.25794C5.60054 8.06681 5.71428 7.89658 5.83027 7.74502C6.79237 6.48474 8.18049 5.61868 9.21321 4.41664C9.35894 4.24716 9.47344 3.94105 9.27344 3.84324C9.15448 3.78501 9.01767 3.86415 8.90911 3.93955C7.54404 4.89148 6.17973 5.84415 4.81465 6.79608C4.36929 7.10667 3.90237 7.42622 3.36556 7.50237C2.88526 7.57106 2.40199 7.43667 1.9373 7.29929C1.5477 7.18431 1.15883 7.06635 0.771469 6.94465C0.565519 6.88044 0.352875 6.81101 0.193766 6.66542C0.0346557 6.51983 -0.0567829 6.27494 0.0391291 6.08083C0.0993529 5.95913 0.216085 5.88223 0.338763 5.81951L0.340234 5.82026Z" fill="#00B0F2"/>
</svg>
<span className="text-[#333333] text-[12px]">Написать нам в Telegram</span>
</div>
  </div>
</div>
</header>
    )
}