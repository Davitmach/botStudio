'use client'
export const Banner = ()=> {
    const HandleScroll = (page:string) => {
    
        const targetElement = document.querySelector(page);
        const header = document.querySelector('header');
        if (targetElement && header) {
          const headerHeight = header.offsetHeight;
    
         
          const position = targetElement.getBoundingClientRect();
    
          
          window.scrollTo({
            top: position.top + window.pageYOffset - headerHeight, 
            left: 0,
            behavior: 'smooth',
          });
          
        }
      
    };
    return(
      <div id="banner" className="mt-[70px] relative banner_container max-w-[1437px] w-full mx-auto px-[58px] pt-[165px] pb-[178px] flex flex-col gap-[25px]">
        <div className="title"><h1 className="font-[800] text-[52px] max-w-[679px] w-full font-[Mont]">Разработка Telegram-ботов <span className="gradient">любой сложности
        с пост-оплатой</span></h1></div>
        <div><p  className="text-[#333333] text-[23px] max-w-[665px] w-full info">Вы рассказываете об идее — а мы берём на себя всё остальное. Получите решение, работающее на вас!</p></div>
        <div className="flex items-center gap-[16px] contacts">
            <button className="bg-[#0F72EB] btn text-[15px] font-[600] rounded-[22px] py-[11px] px-[42px] text-white" onClick={()=> HandleScroll('#mail')}>Оставить заявку</button>
            <div className="flex items-center gap-[8px] cursor-pointer group  " onClick={()=> {
              window.open('https://t.me/botstudio_manager','_blank')
            }}>
                <div><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.524682 6.95158C0.563715 6.93198 0.602768 6.91336 0.640826 6.89572C1.30245 6.58803 1.97286 6.29993 2.64229 6.01184C2.6784 6.01184 2.73889 5.9697 2.77304 5.95598C2.82476 5.93344 2.87649 5.91188 2.92821 5.88935C3.02775 5.84623 3.12729 5.80409 3.22585 5.76098C3.42492 5.67572 3.623 5.59047 3.82208 5.50521L5.01358 4.99271C5.80793 4.6517 6.60326 4.30971 7.3976 3.96869C8.19194 3.62768 8.98725 3.28569 9.78159 2.94467C10.5759 2.60366 11.3712 2.26167 12.1656 1.92066C12.9599 1.57964 13.7553 1.23765 14.5496 0.896635C14.7262 0.820201 14.9175 0.706527 15.1068 0.67321C15.2659 0.644792 15.421 0.589919 15.5811 0.559541C15.8845 0.501726 16.2193 0.47821 16.5101 0.60462C16.6106 0.648716 16.7033 0.710451 16.7804 0.787865C17.1492 1.15436 17.0975 1.75602 17.0195 2.27146C16.4759 5.86386 15.9324 9.45725 15.3878 13.0496C15.3137 13.5426 15.2122 14.0835 14.8248 14.3951C14.4969 14.6587 14.0304 14.6881 13.6254 14.5764C13.2205 14.4637 12.8633 14.2275 12.513 13.9953C11.06 13.0291 9.60594 12.0629 8.15291 11.0967C7.80746 10.8674 7.42298 10.5675 7.42688 10.151C7.42883 9.90017 7.57812 9.67675 7.73036 9.47783C8.9931 7.82372 10.815 6.687 12.1705 5.10932C12.3617 4.88688 12.512 4.48511 12.2495 4.35674C12.0934 4.28031 11.9138 4.38418 11.7713 4.48315C9.97968 5.73255 8.18901 6.98294 6.39736 8.23234C5.81282 8.63999 5.19999 9.0594 4.49543 9.15935C3.86503 9.2495 3.23073 9.07311 2.62083 8.89281C2.10948 8.7419 1.5991 8.58707 1.09068 8.42734C0.820368 8.34307 0.541274 8.25194 0.332442 8.06085C0.123611 7.86977 0.00359748 7.54835 0.129482 7.29357C0.208526 7.13384 0.361737 7.03291 0.522752 6.9506L0.524682 6.95158Z" fill="#00B0F2"/>
</svg>
</div>
                <div className="text-[#333333] font-[600] text-[16px] info group-hover:underline">Написать нам в Telegram</div>
            </div>
        </div>
          {/* <div className="flex gap-[13px] items-center ">
              <img className="w-[35px] h-[35px] rounded-[100px] object-cover" src={'/img.png'}/>
              <p className="max-w-[359px] w-full text-[#555555] italic text-[13px]">Замечательные ребята! Автоматизировали онбординг быстро и под ключ, подключили CRM</p>
          </div> */}
        <div className="phone absolute right-[70px] top-[50%] -translate-y-[50%]">
            <img src="/phone.png" alt="" />
        </div>
      </div>
    )
}