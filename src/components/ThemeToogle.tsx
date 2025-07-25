import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToogle(){
    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

    const toggleTheme = () => {
      if (isDarkMode) {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme','light')
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme','dark')
        setIsDarkMode(true);
      }
    };

    return (
      <button
      onClick={toggleTheme}
      className={cn(
        "fixed border max-sm:hidden top-4 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
      )}
    >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-300" />
        ) : (
          <Moon className="h-5 w-5 text-blue-900" />
        )}
      </button>
    );
}