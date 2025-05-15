    // importer Volleyball 
import { Volleyball } from "lucide-react";
const Navbar = () => {

    return (
        <div className="flex flex-row items-center justify-between mx-auto px-4 py-2">
            <p className="font-bold text-2xl flex items-center ">
            <Volleyball className="text-blue-500" size={40} />
            Alberic<span className="text-blue-500 font-bold text-3xl">DEV</span>
            </p>
            <div className="flex items-center">
            <div className="flex space-x-6">
                <a href="#home" className="text-blue-500">Accueil</a>
                <a href="#about" className="text-blue-500">A propos</a>
                <a href="#projects" className="text-blue-500">Project</a>
                <a href="#contact" className="text-blue-500">Contact</a>
            </div>
            </div>
        </div>
        );
}

export default Navbar
