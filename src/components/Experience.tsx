
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";
import PremiumCard from "./PremiumCard";

const Experience = () => {
  const experiences = [
    {
      company: "Chetu Company",
      position: "Software Engineer",
      duration: "Jan 2024 - Current",
      location: "Noida, UP",
      projects: [
        {
          name: "Gambling App",
          description: "Developed a casino-style web application using ReactJS and Tailwind CSS, focusing on responsive design and user engagement. Integrated lazy loading and dynamic routing using React Router DOM for optimized performance and seamless navigation. Enhanced version control proficiency by mastering Git commands for efficient collaboration and project management.",
          technologies: ["ReactJS", "Tailwind CSS", "React Router DOM", "Git"],
          icon: "🎰"
        },
        {
          name: "Medical App",
          description: "Built a medical web application to generate and manage reports, leveraging TypeScript for robust and scalable development. Utilized AWS Lambda for creating serverless functions and AWS Amplify for app modifications and seamless deployment. Designed a responsive interface using SCSS and implemented data storage solutions with DynamoDB for efficient data management.",
          technologies: ["TypeScript", "AWS Lambda", "AWS Amplify", "SCSS", "DynamoDB"],
          icon: "🏥"
        },
        {
          name: "Chat App",
          description: "Developed a chat-based support system similar to Zomato, allowing users to fill in details before connecting with an executive, using ReactJS and functional components. Designed and implemented the entire front-end structure and user interface, ensuring an intuitive and seamless user experience. Received appreciation for exceptional work as a front-end developer.",
          technologies: ["ReactJS", "Functional Components", "UI/UX Design"],
          icon: "💬"
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey building innovative solutions and delivering exceptional results
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <PremiumCard key={index} gradient className="overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="space-y-2">
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-blue-600" />
                      <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end space-y-3">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-700 dark:text-blue-300">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-purple-700 dark:text-purple-300">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {exp.projects.map((project, projectIndex) => (
                    <PremiumCard key={projectIndex} className="h-full">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-3xl">{project.icon}</span>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.name}
                          </h4>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-0 hover:scale-105 transition-transform"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </PremiumCard>
                  ))}
                </div>
              </CardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
