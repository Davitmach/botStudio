import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Posib } from "./components/posib";
import { Project } from "./components/project";


export default function Home() {
  return (
    <div className="relative  w-full mx-auto overflow-hidden  ">
<Header/>
<Banner/> 
<Project/>
<Posib/>

<div className="bg-[#F4F4F4] w-full absolute h-[4000px] left-0 bottom-0 z-[-1]"></div>
    </div>
  );
}
