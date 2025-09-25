import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches] = useState([
    'React projects',
    'Full stack',
    'AI/ML projects',
    'Mobile apps',
  ]);

  const categories = [
    { name: 'Frontend', color: 'bg-purple-500', items: '12 projects' },
    { name: 'Backend', color: 'bg-blue-500', items: '8 projects' },
    { name: 'Full Stack', color: 'bg-green-500', items: '15 projects' },
    { name: 'Mobile Dev', color: 'bg-orange-500', items: '6 projects' },
    { name: 'AI/ML', color: 'bg-pink-500', items: '4 projects' },
    { name: 'DevOps', color: 'bg-yellow-500', items: '5 projects' },
    { name: 'Web Design', color: 'bg-indigo-500', items: '10 projects' },
    { name: 'Data Science', color: 'bg-red-500', items: '3 projects' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Search
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-6"
        >
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 py-4 text-lg bg-white/10 border-none rounded-lg backdrop-blur-sm"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </motion.div>

        {/* Recent Searches */}
        {!searchQuery && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-lg font-semibold mb-4">Recent searches</h2>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <motion.div
                    key={search}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
                  >
                    <SearchIcon className="w-5 h-5 text-muted-foreground" />
                    <span>{search}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Browse All */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold mb-4">Browse all</h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`${category.color} rounded-lg p-4 h-24 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
                  >
                    <div className="relative z-10">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">{category.items}</p>
                    </div>
                    <div className="absolute -right-4 -bottom-2 w-16 h-16 bg-white/20 rounded-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* Search Results */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Searching for "{searchQuery}"...
            </p>
            {/* Add search results here */}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Search;