import { motion } from 'framer-motion';
import { Settings, Bell, ExternalLink, Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SpotifyLogo from '@/components/SpotifyLogo';

const Profile = () => {
  const stats = [
    { label: 'Projects', value: '12' },
    { label: 'Certificates', value: '9' },
    { label: 'Experience', value: '3+ years' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/prachikotadia', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/prachi-kotadia/', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:iprachikotadia@gmail.com', color: 'hover:text-red-400' },
    { name: 'Website', icon: ExternalLink, href: 'https://prachikotadia.netlify.app/', color: 'hover:text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Spotify App Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <SpotifyLogo size="sm" />
            <h1 className="text-xl font-bold text-green-500">Profile</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8"
        >
          {/* Profile Image */}
          <div className="relative">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-green-500">
              <AvatarImage src="/src/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png" alt="Prachi Kotadia" />
              <AvatarFallback className="text-2xl bg-green-500 text-white">
                PK
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Prachi Kotadia</h2>
            <p className="text-lg text-gray-300 mb-4">Software Engineer & Full Stack Developer</p>
            
            {/* Location */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">New Jersey, USA</span>
            </div>

            {/* About Me */}
            <div className="max-w-2xl">
              <p className="text-gray-300 leading-relaxed">
                Passionate Software Engineer with expertise in full-stack development, AI/ML, and embedded systems. 
                Currently working at GroupedIn, building scalable applications and leading innovative projects. 
                I love creating efficient solutions and exploring cutting-edge technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-4 bg-gray-800/50 rounded-lg">
              <p className="text-2xl font-bold text-green-500">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 hover:bg-gray-700/50 transition-colors ${link.color}`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;