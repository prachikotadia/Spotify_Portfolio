import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/mockData';
import type { Testimonial } from '@/data/mockData';

const Testimonials = () => {
  const stats = [
    { label: 'Happy Clients', value: '30+', icon: Users },
    { label: 'Average Rating', value: '5.0', icon: Star },
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Recommendation Rate', value: '100%', icon: ThumbsUp }
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
          <h1 className="text-4xl font-bold mb-4">Testimonials & Reviews</h1>
          <p className="text-xl text-muted-foreground">
            What clients and colleagues say about my work
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
              <h2 className="text-2xl font-bold mb-6 text-center">Client Satisfaction</h2>
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

        {/* Featured Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Featured Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-primary font-medium mb-2">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                          <p className="text-muted-foreground italic pl-4">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">All Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.rating}/5
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Client Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Startups</h3>
                <p className="text-sm text-muted-foreground">
                  Helping early-stage companies build their MVP and scale
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground">
                  Working with large organizations on complex projects
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Agencies</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborating with design agencies on client projects
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and see how I can help bring your ideas to life
              </p>
              <div className="flex gap-3 justify-center">
                <Badge variant="secondary" className="px-4 py-2">
                  Available for new projects
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Quick response time
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
