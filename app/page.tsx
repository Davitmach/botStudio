import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Mail } from "./components/mail";
import { Posib } from "./components/posib";
import { Project } from "./components/project";


export default function Home() {
  return (
    <div className="relative  w-full mx-auto overflow-hidden scroll-smooth ">
<Header/>
<Banner/> 
<Project/>
<Posib/>
<Mail/>
<Footer/>
<div className="bg-[#F4F4F4] w-full absolute h-[4000px] left-0 bottom-0 z-[-1]"></div>
    </div>
  );
}
