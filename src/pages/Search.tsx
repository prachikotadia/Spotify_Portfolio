import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Clock, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockCertificates } from '@/data/mockData';
import SpotifyLogo from '@/components/SpotifyLogo';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Use certificate names as recent searches with their IDs
  const recentSearches = mockCertificates.map(cert => ({
    title: cert.title,
    id: cert.id
  }));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCertificateClick = (certificateId: string) => {
    navigate(`/certificate/${certificateId}`);
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <SpotifyLogo size="md" />
            <div>
              <h1 className="text-xl font-bold text-white">Search</h1>
              <p className="text-sm text-gray-400">Find your next project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search projects, skills, or experience"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#181818] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:bg-[#282828] focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Recent Searches */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-white">Recent searches</h2>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center justify-between p-3 bg-[#181818] rounded-lg hover:bg-[#282828] transition-colors cursor-pointer"
                  onClick={() => handleCertificateClick(search.id)}
                >
                  <span className="text-white">{search.title}</span>
                  <SearchIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              Search results for "{searchQuery}"
            </h2>
            <div className="text-gray-400">
              <p>Search functionality will be implemented here.</p>
              <p>You can search for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Certificates</li>
                <li>Education</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Search;