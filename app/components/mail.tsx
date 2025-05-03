'use client'

import { useState } from "react";

export const Mail = ()=> {
    const [telegram, setTelegram] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!telegram.trim()) {
            setError("Пожалуйста, укажите ссылку на ваш Telegram.");
            return;
        }

        setError("");
        // тут можно добавить отправку формы
        console.log("Форма отправлена!");
    };
    return(
        <div className="max-w-[1437px] w-full mx-auto">
        <div id="mail" className="mb-[55px] mail_container justify-between    relative flex  h-[544px] overflow-hidden bg-[#FFFFFF] rounded-[25px] py-[47px] px-[59px] mx-[58px] mt-[118px]">

<svg className="absolute left-0 bottom-[-20px]  w-full  aspect-[1/.3]"   viewBox="0 0 1318 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 167.332V369C0 382.807 11.1929 394 25 394H1292.5C1306.31 394 1317.5 382.859 1317.5 369.052L1317.5 331.761C1317.5 258.928 1317.5 155.046 1317.5 138C1317.5 109.189 1240.5 0.499956 1111.5 0.5C880.41 0.500078 798.5 138 604.5 180C279.282 250.408 116.625 185.15 35.1896 145.406C18.7349 137.376 0 149.022 0 167.332Z" fill="#0F72EB"/>
</svg>


<div className="flex flex-col  h-full justify-between z-[9999999]">
<div>
    <div><h2 className="gradient text-[52px] text-white max-w-[495px] w-full font-[Mont] font-[900]">Расскажите нам
    о вашей идее</h2></div>
    <div><p className="text-[#333333] text-[23px] max-w-[440px] w-full ">А мы подберем и реализуем решение, которое будет работать на вас!</p></div>
</div>
<div className="flex flex-col gap-[8px] contacts cursor-pointer" onClick={()=> {
    window.open('https://t.me/botstudiooo','_blank')
}}>
    <div className="flex items-center gap-[15px]">
<img src="/bot.png" alt="" />
        <h3 className="font-[400] text-[#FFFFFF] text-[21px] font-[Mont]">Bot Studio </h3>
    </div>
    <div><span className="text-[#FFFFFF] text-[16px] ">Официальный канал в Telegram </span></div>
</div>
</div>


<div className="z-[999999999]">
    <div><h1 className="max-w-[498px] w-full font-[700] text-[#333333] text-[23px] font-[Mont]">Свяжемся с вами, чтобы уточнить детали
    вашей задумки</h1></div>
    <form onSubmit={handleSubmit} noValidate>
  <div className="w-full mt-[13px]">
    <input className="outline-none bg-[#F2F2F2] rounded-[30px] py-[19px] px-[29px] w-full" type="text" placeholder="Ваше ФИО" />
  </div>
  <div className="w-full ">
    <input
      className="mt-[14px] outline-none bg-[#F2F2F2] rounded-[30px] py-[19px] px-[29px] w-full"
      type="text"
      placeholder="Ссылка на ваш профиль в Telegram"
      value={telegram}
      onChange={(e) => setTelegram(e.target.value)}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
  <div className="">
    <textarea className="mt-[13px] h-[136px] bg-[#F2F2F2] rounded-[30px] py-[19px] px-[29px] w-full resize-none outline-none" placeholder="Опишите вашу идею или задачу"></textarea>
  </div>
  <div className="">
    <button type="submit" className="mt-[32px] w-[184px] text-[#333333] font-[600] text-[14px] bg-[#FFFFFF] rounded-[20px] font-[Mont] py-[9px] px-[31px]">
      Отправить
    </button>
  </div>
</form>

    <div className="mt-[13px]"><span className="italic text-[#FFFFFF] text-[10px]">Нажимая “Отправить” вы соглашаетесь с Политика в отношении обработки персональных данных</span></div>
</div>

        </div>
        </div>
    )
}