'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChevronRight,
  Zap,
  Code,
  Layers,
  Atom,
  Orbit,
  Waves
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhysicsBackground from '@/components/PhysicsBackground';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 'sui-mcp',
      title: 'Sui MCP',
      description: 'AI-powered development tools and model context protocol for the Sui blockchain ecosystem.',
      image: '/images/i-00.png',
      status: 'Active',
      features: ['AI Code Generation', 'Smart Debugging', 'Automated Testing'],
      link: '/projects/sui-mcp'
    },
    {
      id: 'project-alpha',
      title: 'Project Alpha',
      description: 'Next-generation developer experience platform with integrated AI assistance.',
      image: '/images/i-01.png',
      status: 'Coming Soon',
      features: ['Real-time Collaboration', 'AI-powered Insights', 'Seamless Integration'],
      link: '/projects/project-alpha'
    },
    {
      id: 'project-beta',
      title: 'Project Beta',
      description: 'Advanced blockchain analytics and monitoring tools for Sui developers.',
      image: '/images/i-02.png',
      status: 'Coming Soon',
      features: ['Performance Monitoring', 'Analytics Dashboard', 'Smart Alerts'],
      link: '/projects/project-beta'
    }
  ];

  const PhysicsElement = ({ children, className = "", delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => (
    <motion.div
      className={`${className} float`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );

  const ParticleField = () => {
    if (!mounted) return null;

    // Generate deterministic positions based on index
    const particles = Array.from({ length: 20 }, (_, i) => {
      // Use a simple seeded random function based on index
      const seed = i * 123.456;
      const left = ((seed * 9301 + 49297) % 233280) / 2332.8;
      const top = ((seed * 9301 + 49297 + 1000) % 233280) / 2332.8;
      const xOffset = ((seed * 7 + 13) % 50) - 25;
      const duration = 8 + ((seed * 11) % 4);
      const delay = (seed * 17) % 5;
      
      return {
        left: left % 100,
        top: top % 100,
        xOffset,
        duration,
        delay
      };
    });

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    );
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background noise-bg">
      {/* Physics Background */}
      <PhysicsBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl float" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg float-delayed" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-600/10 rounded-full blur-md float" />
        </motion.div>
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <PhysicsElement className="inline-block mb-6">
              <Atom className="w-16 h-16 text-primary mx-auto mb-4" />
            </PhysicsElement>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Motion ecosystem on{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Sui
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Build faster, debug smarter, and deploy with confidence using AI-powered development tools for the Sui blockchain ecosystem.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => smoothScrollTo('ecosystem')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition glow-blue hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Explore Ecosystem</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
              
              <motion.a
                href="https://github.com/motion-labs"
            target="_blank"
            rel="noopener noreferrer"
                className="px-8 py-4 border border-border rounded-full hover:bg-accent motion-transition hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-5 h-5" />
                <span>View on GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <PhysicsElement delay={0.2}>
              <Layers className="w-12 h-12 text-primary mx-auto mb-6" />
            </PhysicsElement>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Developer-First Approach
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Motion Labs is building the next generation of developer tools for the Sui blockchain. 
              Our AI-powered ecosystem focuses on enhancing developer experience, reducing complexity, 
              and accelerating innovation in the Sui ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <PhysicsElement delay={0.4} className="text-center">
                <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-muted-foreground">
                    Leverage artificial intelligence to accelerate development and reduce bugs
                  </p>
                </div>
              </PhysicsElement>
              
              <PhysicsElement delay={0.6} className="text-center">
                <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
                  <Code className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Developer-Centric</h3>
                  <p className="text-muted-foreground">
                    Tools designed by developers, for developers, with focus on UX
                  </p>
                </div>
              </PhysicsElement>
              
              <PhysicsElement delay={0.8} className="text-center">
                <div className="p-6 rounded-2xl bg-card border border-border hover-lift">
                  <Orbit className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ecosystem Native</h3>
                  <p className="text-muted-foreground">
                    Built specifically for Sui, understanding its unique capabilities
                  </p>
                </div>
              </PhysicsElement>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="ecosystem" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <PhysicsElement delay={0.2}>
              <Waves className="w-12 h-12 text-primary mx-auto mb-6" />
            </PhysicsElement>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Ecosystem
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our suite of tools and platforms designed to enhance your Sui development experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover-lift motion-transition">
                  <div className="relative mb-4 rounded-xl overflow-hidden">
          <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 motion-transition"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 motion-transition"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
