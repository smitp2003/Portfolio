import {RiReactjsLine} from "react-icons/ri";
import {IoLogoJavascript} from "react-icons/io";
import {FaPython} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {SiCplusplus} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yello-400"/>
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-300"/>
            </div> 
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400"/>
            </div>  
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-blue-600"/>
            </div>    
        </div>        
    </div> 
  );
};

export default Technologies;
