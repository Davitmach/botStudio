import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Project } from "./components/project";


export default function Home() {
  return (
    <div className="relative  w-full mx-auto overflow-hidden  ">
<Header/>
<Banner/> 
<Project/>


    </div>
  );
}
