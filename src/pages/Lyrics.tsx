import { motion } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Lyrics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#4A90E2]">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-white text-sm">
        <div className="text-white font-medium">11:34</div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 rounded-full"
          onClick={() => navigate('/')}
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>

      {/* Song Header */}
      <div className="px-4 py-2">
        <h1 className="text-white font-semibold text-lg">About Me</h1>
        <p className="text-white/80 text-sm">Prachi Kotadia</p>
      </div>

      {/* Lyrics Content */}
      <div className="px-4 py-6">
        <div className="space-y-6 text-white">
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm a passionate Software Engineer</div>
            <div>with a Master's in Computer Science</div>
            <div>from Illinois Institute of Technology</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Currently working as a Software Engineer</div>
            <div>at GroupedIn in New Jersey</div>
            <div>My journey in technology spans</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Across multiple domains including</div>
            <div>web development, mobile applications</div>
            <div>AI/ML, and embedded systems</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>With expertise in React, Flutter</div>
            <div>Python, C++, and cloud technologies</div>
            <div>I've built scalable applications</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Serving thousands of users</div>
            <div>I'm particularly passionate about</div>
            <div>AI-driven solutions</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Having integrated NLP and machine learning</div>
            <div>models to enhance user experiences</div>
            <div>and boost engagement by 25%</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>My work involves full-stack development</div>
            <div>from designing e-commerce systems</div>
            <div>handling 500+ daily transactions</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>To building high-performance</div>
            <div>Linux kernel modules that reduce</div>
            <div>latency by 15%</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm also experienced in IoT integration</div>
            <div>real-time data processing</div>
            <div>and automated CI/CD pipelines</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>Beyond technical skills</div>
            <div>I'm a continuous learner who stays</div>
            <div>updated with the latest technologies</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I believe in the power of</div>
            <div>open-source collaboration</div>
            <div>and have contributed to various projects</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>When I'm not coding</div>
            <div>you'll find me exploring new technologies</div>
            <div>contributing to research</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>or curating the perfect coding</div>
            <div>playlist on Spotify</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>I'm always excited to work on</div>
            <div>challenging problems, learn new technologies</div>
            <div>and contribute to innovative projects</div>
          </div>
          
          <div className="text-2xl font-bold leading-relaxed">
            <div>that make a real impact</div>
            <div>Let's connect and build</div>
            <div>something amazing together!</div>
          </div>
        </div>
      </div>

      {/* Bottom Player Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="h-1 bg-white/30 rounded-full">
              <div className="h-1 bg-white rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="text-white text-sm">-0:16</div>
          <Button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-black ml-0.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;