
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Palette, Cloud, Users, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front End",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Back End",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Styling",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Bootstrap", "Tailwind CSS", "SCSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & Misc",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS Amplify", "AWS Cognito", "AWS Lambda", "DynamoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Deliver Results", "Resilience", "Attentiveness", "Problem Solving"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: ["English (Advanced)", "Spanish (Beginner)"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const interests = [
    "Learning Languages",
    "Fitness",
    "Self Improvement",
    "Travelling"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and competencies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <span>Personal Interests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
