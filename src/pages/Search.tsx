import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockCertificates } from '@/data/mockData';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Use certificate names as recent searches
  const recentSearches = mockCertificates.map(cert => cert.title);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/src/assets/Add_a_subheading__1_-removebg-preview-removebg-preview.png"
                alt="Prachi Kotadia"
                className="w-full h-full object-cover"
              />
            </div>
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
                  onClick={() => handleSearch(search)}
                >
                  <span className="text-white">{search}</span>
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