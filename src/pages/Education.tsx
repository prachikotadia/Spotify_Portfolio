import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education } from '@/data/mockData';
import type { Education } from '@/data/mockData';

const Education = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
          <p className="text-xl text-muted-foreground">
            My academic background and professional certifications
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Academic Background
          </h2>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Institution Logo/Icon */}
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-lg text-primary font-semibold">{edu.field}</p>
                        <p className="text-lg font-medium">{edu.institution}</p>
                        {edu.gpa && (
                          <div className="mt-2">
                            <Badge variant="secondary" className="text-sm">
                              GPA: {edu.gpa}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Achievements & Activities
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Professional Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                date: '2023',
                description: 'Demonstrates expertise in designing distributed systems on AWS'
              },
              {
                title: 'Google Cloud Professional Developer',
                issuer: 'Google Cloud',
                date: '2023',
                description: 'Validates ability to build and deploy applications on Google Cloud'
              },
              {
                title: 'Certified Kubernetes Administrator',
                issuer: 'Cloud Native Computing Foundation',
                date: '2022',
                description: 'Proves competency in Kubernetes cluster management'
              },
              {
                title: 'React Developer Certification',
                issuer: 'Meta',
                date: '2022',
                description: 'Validates React development skills and best practices'
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Continuous Learning</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Online Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Hours of Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
