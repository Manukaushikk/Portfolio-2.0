
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import profileImg from '../img/My_Img.jpeg'

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white transition-all duration-500 relative overflow-x-hidden">
      <FloatingElements />

      {/* Premium Header */}
      <header className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-white font-bold text-lg">M</span>
              )}
            </div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Manu Kaushik
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            <Navigation />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 mt-20">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to work on innovative solutions.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Manu Kaushik. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
