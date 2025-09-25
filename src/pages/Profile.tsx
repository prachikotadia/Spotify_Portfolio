import { motion } from 'framer-motion';
import { Settings, Bell, Download, Share, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const stats = [
    { label: 'Following', value: '25' },
    { label: 'Followers', value: '38' },
    { label: 'Projects', value: '10' },
  ];

  const recentProjects = [
    { name: 'E-commerce Platform', artist: 'React, Node.js', image: '' },
    { name: 'AI Chat App', artist: 'Python, OpenAI', image: '' },
    { name: 'Weather Dashboard', artist: 'Vue.js, Express', image: '' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Profile
          </motion.h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block mb-4">
            <Avatar className="w-32 h-32 border-4 border-primary">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="text-2xl bg-primary text-white">
                SJ
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Sebastian John</h2>
          <p className="text-muted-foreground mb-6">Full Stack Developer</p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center mb-8">
            <Button className="rounded-full px-6">
              Following
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{link.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {link.href.replace('https://', '').replace('mailto:', '')}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Recently Played */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recently Played</h3>
            <Button variant="ghost" className="text-sm text-primary">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{project.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {project.artist}
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                  </svg>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;