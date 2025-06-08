
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, ArrowRight, Sparkles } from "lucide-react";
import profileImg from '../img/My_Img.jpeg'

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Software Engineer
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Manu Kaushik
                </span>
              </h1>

              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-lg">Gurgaon, Haryana</span>
              </div>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              A passionate software engineer specializing in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span>,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">TypeScript</span>, and{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">modern web technologies</span>.
              I craft exceptional digital experiences with attention to detail and performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Let's Connect
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "../../public/pdfs/Manu_CV.pdf";
                  link.download = "Manu_Kaushik_CV.pdf";
                  link.click();
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <a
                href="mailto:manurwr15@gmail.com"
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white">manurwr15@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919467186187"
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 group"
              >
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">(+91) 9467186187</p>
                </div>
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin opacity-20 scale-110"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-ping opacity-30"></div>

              {/* Main profile circle */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-inner overflow-hidden">
                  {profileImg ? (
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement; // Explicitly cast target
                        target.style.display = "none"; // Hide the image
                      }}
                    />
                  ) : (
                    <span className="text-6xl font-bold text-gray-500 dark:text-gray-400">
                      MK
                    </span>
                  )}
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce delay-300">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce delay-500">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
