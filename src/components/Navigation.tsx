import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without adding to history
      window.history.replaceState(null, "", href);
      setCurrentHash(href);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the section currently in view
      let currentSection = navItems[0].href; // default to first section

      for (const item of navItems) {
        const element = document.querySelector(item.href);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            currentSection = item.href;
          }
        }
      }

      if (currentSection !== currentHash) {
        window.history.replaceState(null, "", currentSection);
        setCurrentHash(currentSection);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Run on mount to set initial hash if needed
    handleScroll();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentHash, navItems]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group
              ${currentHash === item.href
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
          >
            {item.label}
            <span className={`absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300
              ${currentHash === item.href ? "scale-x-100" : "scale-x-0"}`}></span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 top-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40">
            <nav className="container mx-auto px-6 py-8">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300
                      ${currentHash === item.href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
