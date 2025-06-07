
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My academic background
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-l-4 border-l-blue-600 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Bachelor of Technology - Computer Science Engineering</CardTitle>
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      MRIIRS University
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>Faridabad, Haryana</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Completed Bachelor of Technology in Computer Science Engineering, building a strong foundation 
                in software development, algorithms, data structures, and modern programming practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
