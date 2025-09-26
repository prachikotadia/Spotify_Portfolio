import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Shuffle, Clock, Bell, Heart, Star, TrendingUp, Award, MessageSquare, Plus, MoreHorizontal, Briefcase, Code, GraduationCap, BookOpen } from 'lucide-react';

// Spotify-style icons as SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20 6h-2l-2-2H8L6 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
  </svg>
);

const SkillIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import SpotifyLogo from '@/components/SpotifyLogo';
import { 
  featuredProjects, 
  recentProjects, 
  workExperience, 
  blogPosts, 
  testimonials, 
  awards,
  skills 
} from '@/data/mockData';
import type { Project } from '@/data/mockData';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const categories = [
    { name: 'Frontend', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Backend', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Full Stack', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Mobile', gradient: 'from-orange-500 to-red-500' },
    { name: 'AI/ML', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'DevOps', gradient: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-20">

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Featured Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/src/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png"
                  alt="Prachi Kotadia - Full Stack Developer"
                  className="w-full h-auto object-cover"
                />
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-12 pr-12 py-4 bg-[#181818] border-none rounded-xl text-white placeholder-gray-400 focus:bg-[#282828] focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
            />
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#282828] hover:bg-[#3a3a3a] rounded-lg">
              <MoreHorizontal className="w-4 h-4 text-white" />
            </Button>
          </div>
        </motion.div>

        {/* Browse All Section - First Priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Browse all</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { 
                name: 'AI/ML Projects', 
                gradient: 'from-purple-500 to-pink-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/projects/ai-ml'
              },
              { 
                name: 'Full Stack Apps', 
                gradient: 'from-blue-500 to-cyan-500',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop&crop=center',
                link: '/projects/fullstack'
              },
              { 
                name: 'Mobile Apps', 
                gradient: 'from-green-500 to-emerald-500',
                image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop&crop=center',
                link: '/projects/mobile'
              },
              { 
                name: 'System Programming', 
                gradient: 'from-orange-500 to-red-500',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center',
                link: '/projects/systems'
              },
              { 
                name: 'Data Engineering', 
                gradient: 'from-indigo-500 to-purple-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/projects/data'
              },
              { 
                name: 'Certificates', 
                gradient: 'from-yellow-500 to-orange-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/certificates'
              },
              { 
                name: 'Work Experience', 
                gradient: 'from-teal-500 to-cyan-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/experience'
              },
              { 
                name: 'Skills', 
                gradient: 'from-violet-500 to-purple-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/skills'
              },
              { 
                name: 'Education', 
                gradient: 'from-emerald-500 to-green-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/education'
              },
              { 
                name: 'Blog', 
                gradient: 'from-rose-500 to-pink-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/blog'
              },
              { 
                name: 'Testimonials', 
                gradient: 'from-amber-500 to-yellow-500',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center',
                link: '/testimonials'
              },
              { 
                name: 'About Me', 
                gradient: 'from-pink-500 to-rose-500',
                image: '/src/assets/2025-09-25_21-10-04.jpg',
                link: '/lyrics'
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`bg-gradient-to-br ${category.gradient} rounded-lg p-4 h-24 relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group`}
                onClick={() => category.link && navigate(category.link)}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <h3 className="text-white font-bold text-sm">{category.name}</h3>
                </div>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/20 rounded-full group-hover:scale-110 transition-transform" />
                <div className="absolute -right-1 -top-1 w-8 h-8 bg-white/10 rounded-full group-hover:scale-110 transition-transform" />
                <div className="absolute -left-1 -bottom-1 w-6 h-6 bg-white/5 rounded-full group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recently Played - Like Spotify's Recently Played */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { title: "AI Chat Application", artist: "React, OpenAI", image: "/src/assets/ai-chat-project.jpg" },
              { title: "E-commerce Platform", artist: "Next.js, Stripe", image: "/src/assets/ecommerce-project.jpg" },
              { title: "Weather Dashboard", artist: "Vue.js, APIs", image: "/src/assets/weather-dashboard-project.jpg" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex-shrink-0 w-32 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{item.artist}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Playlists Section - Like Spotify's Playlists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Playlists</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              See more
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { title: "Work Projects", image: "/src/assets/task-management-project.jpg" },
              { title: "Personal Projects", image: "/src/assets/fitness-tracker-project.jpg" },
              { title: "Open Source", image: "/src/assets/social-analytics-project.jpg" }
            ].map((playlist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex-shrink-0 w-32 bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{playlist.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section - Like Spotify's Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Certificates</h2>
            <Button variant="ghost" className="text-gray-400 hover:text-white text-sm font-bold">
              See all
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                title: "AWS Certified Developer", 
                issuer: "Amazon Web Services",
                year: "2024",
                gradient: "from-orange-500 to-red-500"
              },
              { 
                title: "React Developer Certification", 
                issuer: "Meta",
                year: "2023",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Full Stack Web Development", 
                issuer: "freeCodeCamp",
                year: "2023",
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                title: "JavaScript Algorithms", 
                issuer: "freeCodeCamp",
                year: "2023",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex-shrink-0 w-40 bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-all duration-300 cursor-pointer group"
              >
                <div className="relative mb-3">
                  <div className={`w-full aspect-square bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* New Release Section - Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-white">New Release</h2>
            </div>
            <Button variant="ghost" className="text-green-500 hover:text-green-400 text-sm font-bold hover:bg-white/10 px-3 py-2 rounded-full">
              View All
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                title: "Master's in Computer Science", 
                subtitle: "Illinois Institute of Technology",
                location: "Chicago, IL",
                year: "2023-2025",
                gradient: "from-purple-600 to-pink-500",
                image: "/src/assets/2025-09-25_21-10-04.jpg"
              },
              { 
                title: "Bachelor of Technology", 
                subtitle: "Electronics and Communication",
                location: "Gujarat, India",
                year: "2019-2023",
                gradient: "from-blue-600 to-green-800",
                image: "/src/assets/ai-chat-project.jpg"
              },
              { 
                title: "AWS Certified Developer", 
                subtitle: "Amazon Web Services",
                location: "Online",
                year: "2024",
                gradient: "from-orange-500 to-red-500",
                image: "/src/assets/ecommerce-project.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="flex-shrink-0 w-52 bg-gradient-to-br rounded-2xl p-5 cursor-pointer hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${item.gradient.includes('purple') ? '#9333ea' : item.gradient.includes('blue') ? '#2563eb' : '#ea580c'}, ${item.gradient.includes('pink') ? '#ec4899' : item.gradient.includes('green') ? '#16a34a' : '#dc2626'})` }}
                onClick={() => navigate('/education')}
              >
                {/* Background Blur Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-4">
                    <div className="w-full aspect-square bg-white/20 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-white/90 text-sm mb-1">{item.subtitle}</p>
                  <p className="text-white/70 text-xs">{item.location} • {item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Artist Section - Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-black" />
              </div>
              <h2 className="text-2xl font-bold text-white">Popular Artist</h2>
            </div>
            <Button variant="ghost" className="text-green-500 hover:text-green-400 text-sm font-bold hover:bg-white/10 px-3 py-2 rounded-full">
              View All
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { 
                name: "React Developer", 
                color: "text-green-500",
                image: "/src/assets/2025-09-25_21-10-04.jpg"
              },
              { 
                name: "Full Stack Engineer", 
                color: "text-white",
                image: "/src/assets/ai-chat-project.jpg"
              },
              { 
                name: "AWS Certified", 
                color: "text-white",
                image: "/src/assets/ecommerce-project.jpg"
              },
              { 
                name: "Mobile Developer", 
                color: "text-white",
                image: "/src/assets/weather-dashboard-project.jpg"
              }
            ].map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex-shrink-0 text-center cursor-pointer hover:scale-105 transition-all duration-300 group"
                onClick={() => navigate('/skills')}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 mx-auto ring-2 ring-white/10 group-hover:ring-green-500/50 transition-all duration-300">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className={`text-sm font-semibold ${artist.color} group-hover:text-green-400 transition-colors`}>{artist.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>






      </div>

    </div>
  );
};

export default Home;