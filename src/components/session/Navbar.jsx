    // importer Volleyball 
import { Volleyball } from "lucide-react";
import { useState } from "react";
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex flex-row items-center justify-center mx-auto px-4 py-2 ">
            <p className="font-bold text-2xl flex items-center ">
                <Volleyball className="text-blue-500" size={40} />
                Alberic<span className="text-blue-500 font-bold text-3xl">DEV</span>
            </p>
            {/* Desktop menu */}
            <div className="hidden md:flex flex-1 justify-end items-center ml-8">
                <div className="flex space-x-6">
                    <a href="#home" className="text-blue-500">Accueil</a>
                    <a href="#about" className="text-blue-500">A propos</a>
                    <a href="#projects" className="text-blue-500">Project</a>
                    <a href="#contact" className="text-blue-500">Contact</a>
                </div>
            </div>
            {/* Hamburger button */}
            <button
                className="md:hidden flex flex-col justify-center items-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-blue-500 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-blue-500 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-blue-500 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
                    <a href="#home" className="text-blue-500" onClick={() => setMenuOpen(false)}>Accueil</a>
                    <a href="#about" className="text-blue-500" onClick={() => setMenuOpen(false)}>A propos</a>
                    <a href="#projects" className="text-blue-500" onClick={() => setMenuOpen(false)}>Project</a>
                    <a href="#contact" className="text-blue-500" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar
