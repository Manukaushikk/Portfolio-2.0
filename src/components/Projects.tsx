// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       name: "VeggieBites - Vegetarian Recipe Finder",
//       description: "A premium recipe finder application showcasing vegetarian dishes, built using React, TypeScript, and Tailwind CSS. The app features dual-theme support, smart filters, detailed recipe pages, and nutritional information. It is designed for an exceptional user experience with responsive design and smooth animations.",
//       technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Shadcn/UI", "React Router", "Lucide Icons"],
//       features: ["Dual Theme Support", "Smart Filtering", "Detailed Recipe Pages", "Nutritional Information", "Save & Share", "Responsive Design"]
//     },
//     {
//       "name": "Weather App",
//       "description": "A sleek, mobile-responsive weather app built with React, TypeScript, and Tailwind CSS. Features real-time weather updates, a 5-day forecast, and detailed metrics like humidity, wind speed, and pressure. Includes light/dark mode, location search, and a modern glassmorphism UI. Perfect for weather insights and showcasing modern web development practices.",
//       "technologies": ["react", "typescript", "tailwindcss", "vite", "weather-app", "responsive-design", "ui-design", "weather-forecast"],
//       "features": ["Real-Time Weather Updates", "5-Day Forecast", "Light/Dark Theme", "Responsive Design", "Weather Metrics Display"]
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Projects</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Some of my notable work and side projects
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                   {project.name}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div>
//                   <h4 className="font-semibold mb-2">Key Features:</h4>
//                   <div className="grid grid-cols-2 gap-2">
//                     {project.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                         <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-2">Technologies:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="outline">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex space-x-2 pt-4">
//                   <Button size="sm" className="flex-1">
//                     <ExternalLink className="h-4 w-4 mr-2" />
//                     Live Demos
//                   </Button>
//                   <Button size="sm" variant="outline" className="flex-1">
//                     <Github className="h-4 w-4 mr-2" />
//                     Code
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "VeggieBites - Vegetarian Recipe Finder",
      description:
        "A premium recipe finder application showcasing vegetarian dishes, built using React, TypeScript, and Tailwind CSS. The app features dual-theme support, smart filters, detailed recipe pages, and nutritional information. It is designed for an exceptional user experience with responsive design and smooth animations.",
      technologies: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Shadcn/UI",
        "React Router",
        "Lucide Icons",
      ],
      features: [
        "Dual Theme Support",
        "Smart Filtering",
        "Detailed Recipe Pages",
        "Nutritional Information",
        "Save & Share",
        "Responsive Design",
      ],
      liveDemo: "https://recipe-finder-dun-nu.vercel.app/",
      codeLink: "https://github.com/Manukaushikk/Recipe-Finder",
    },
    {
      name: "Weather App",
      description:
        "A sleek, mobile-responsive weather app built with React, TypeScript, and Tailwind CSS. Features real-time weather updates, a 5-day forecast, and detailed metrics like humidity, wind speed, and pressure. Includes light/dark mode, location search, and a modern glassmorphism UI. Perfect for weather insights and showcasing modern web development practices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      features: [
        "Real-Time Weather Updates",
        "5-Day Forecast",
        "Light/Dark Theme",
        "Responsive Design",
        "Weather Metrics Display",
      ],
      liveDemo: "https://weather-app-tau-six-15.vercel.app/",
      codeLink: "https://github.com/Manukaushikk/Weather-App-2.0",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my notable work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full flex items-center justify-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
