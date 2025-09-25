import { motion } from 'framer-motion';
import { Award, Trophy, Star, Calendar, Building, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { awards } from '@/data/mockData';
import type { Award as AwardType } from '@/data/mockData';

const Awards = () => {
  const awardCategories = [
    { name: 'Web Development', count: 3, color: 'from-blue-500 to-purple-500' },
    { name: 'Competition', count: 2, color: 'from-green-500 to-teal-500' },
    { name: 'Community', count: 1, color: 'from-orange-500 to-red-500' }
  ];

  const stats = [
    { label: 'Awards Won', value: '6+', icon: Trophy },
    { label: 'Hackathons', value: '3', icon: Target },
    { label: 'Years Active', value: '5+', icon: Calendar },
    { label: 'Organizations', value: '4+', icon: Building }
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
          <h1 className="text-4xl font-bold mb-4">Awards & Achievements</h1>
          <p className="text-xl text-muted-foreground">
            Recognition for excellence in development and innovation
          </p>
        </motion.div>
      </div>

      <div className="px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Achievement Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Award Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Award Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awardCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${category.color}/10 border-${category.color.split('-')[1]}-500/20`}>
                  <CardContent className="pt-6 text-center">
                    <Award className={`w-12 h-12 text-${category.color.split('-')[1]}-500 mx-auto mb-4`} />
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <div className="text-3xl font-bold mb-2">{category.count}</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Featured Awards</h2>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{award.title}</h3>
                            <p className="text-primary font-semibold">{award.organization}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {new Date(award.date).getFullYear()}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{award.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(award.date).toLocaleDateString()}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {award.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Additional Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Open Source Contributor',
                description: 'Active contributor to popular open source projects',
                icon: Star,
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Tech Speaker',
                description: 'Presented at 5+ tech conferences and meetups',
                icon: Target,
                color: 'from-green-500 to-teal-500'
              },
              {
                title: 'Mentor',
                description: 'Mentored 10+ junior developers in their career growth',
                icon: Award,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Community Leader',
                description: 'Organized and led developer community events',
                icon: Building,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Recognition Timeline</h2>
              <div className="space-y-4">
                {[
                  { year: '2023', event: 'Best Web Application Award', organization: 'Tech Innovation Awards' },
                  { year: '2023', event: 'Hackathon Winner', organization: 'CodeFest' },
                  { year: '2023', event: 'Open Source Contributor', organization: 'GitHub' },
                  { year: '2022', event: 'Developer of the Year', organization: 'TechCorp Solutions' },
                  { year: '2021', event: 'Innovation Award', organization: 'StartupXYZ' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.event}</h3>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                    </div>
                    <Badge variant="outline">{item.year}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
