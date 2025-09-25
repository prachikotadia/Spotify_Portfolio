import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar, Code, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const personalInfo = {
    name: 'Your Name',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    email: 'your.email@example.com',
    experience: '5+ years',
    availability: 'Available for opportunities',
    bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating innovative solutions and contributing to open source projects. When I\'m not coding, you can find me exploring new technologies, writing technical blogs, or hiking in the mountains.',
    values: [
      'Continuous Learning',
      'Clean Code',
      'User Experience',
      'Collaboration',
      'Innovation'
    ],
    interests: [
      'Open Source',
      'Machine Learning',
      'Photography',
      'Hiking',
      'Coffee',
      'Reading'
    ]
  };

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '30+' }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient pt-12 pb-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
            <Code className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {personalInfo.experience}
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Button className="bg-white text-black hover:bg-white/90">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values & Interests */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  My Values
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.values.map((value, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-600">{personalInfo.availability}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to new opportunities and collaborations
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
