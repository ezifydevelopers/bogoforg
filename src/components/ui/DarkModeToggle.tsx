"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync with current state
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    // Listen for theme changes (from other instances)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-[#0B0C10]">
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-colors hover:border-primary hover:bg-gray-50 dark:border-gray-700 dark:bg-[#0B0C10] dark:hover:bg-gray-800 cursor-pointer pointer-events-auto"
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
