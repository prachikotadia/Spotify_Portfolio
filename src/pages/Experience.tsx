import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { workExperience } from '@/data/mockData';
import type { WorkExperience } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';
import SpotifyLogo from '@/components/SpotifyLogo';

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SpotifyLogo size="sm" />
            <h1 className="text-4xl font-bold">Work Experience</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            My professional journey and career milestones
          </p>
        </motion.div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/experience/${job.id}`)}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Timeline indicator */}
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        {index < workExperience.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mt-4"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          {job.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Job details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{job.position}</h3>
                        <p className="text-lg text-primary font-semibold">{job.company}</p>
                        <p className="text-muted-foreground mt-2">{job.description}</p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.techStack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;
