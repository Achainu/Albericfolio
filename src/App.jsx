
import React, { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/session/Navbar";
import Accueil from "./components/session/Accueil";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement (ex: données à récupérer)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="p-6 bg-black text-gray-100 min-h-screen">
          <Navbar/>
          <Accueil/>
        </div>
      )}
    </>
  );
}

export default App;
