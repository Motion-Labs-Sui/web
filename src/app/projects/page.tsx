'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Code, 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Star,
  GitBranch,
  Download,
  CheckCircle,
  Clock,
  Rocket
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhysicsBackground from '@/components/PhysicsBackground';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'sui-mcp',
      title: 'Sui MCP',
      subtitle: 'AI-Powered Development Protocol',
      description: 'Revolutionary Model Context Protocol specifically designed for Sui blockchain development. Integrates seamlessly with popular IDEs and provides intelligent code completion, debugging, and optimization suggestions.',
      longDescription: 'Sui MCP is our flagship product that transforms how developers interact with the Sui blockchain. By leveraging advanced AI models trained specifically on Sui Move code and documentation, it provides contextual assistance that understands the nuances of Sui development patterns.',
      image: '/images/i-00.png',
      status: 'Active',
      version: 'v1.2.0',
      category: 'AI Development Tools',
      technologies: ['TypeScript', 'Rust', 'AI/ML', 'Sui Move'],
      features: [
        'AI-powered code completion',
        'Intelligent debugging assistance',
        'Automated testing generation',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Real-time documentation lookup'
      ],
      metrics: {
        downloads: '50K+',
        stars: '2.3K',
        contributors: '45',
        issues: '12'
      },
      links: {
        github: 'https://github.com/motion-labs/sui-mcp',
        docs: '/docs/sui-mcp',
        demo: '/demo/sui-mcp',
        download: '/download/sui-mcp'
      },
      releaseDate: '2024-03-15',
      lastUpdate: '2024-12-01'
    },
    {
      id: 'project-alpha',
      title: 'Project Alpha',
      subtitle: 'Next-Gen Developer Platform',
      description: 'Comprehensive development environment that combines AI assistance with collaborative features. Built for teams working on complex Sui applications.',
      longDescription: 'Project Alpha represents the next evolution in blockchain development environments. It combines the power of AI with collaborative features that make team development on Sui more efficient and enjoyable.',
      image: '/images/i-01.png',
      status: 'Beta',
      version: 'v0.8.0',
      category: 'Development Platform',
      technologies: ['Next.js', 'WebAssembly', 'GraphQL', 'Docker'],
      features: [
        'Real-time collaboration',
        'AI-powered code reviews',
        'Integrated testing environment',
        'Deployment automation',
        'Team analytics dashboard',
        'Version control integration'
      ],
      metrics: {
        downloads: '15K+',
        stars: '890',
        contributors: '23',
        issues: '8'
      },
      links: {
        github: 'https://github.com/motion-labs/project-alpha',
        docs: '/docs/project-alpha',
        demo: '/demo/project-alpha',
        download: '/download/project-alpha'
      },
      releaseDate: '2024-06-20',
      lastUpdate: '2024-11-28'
    },
    {
      id: 'project-beta',
      title: 'Project Beta',
      subtitle: 'Blockchain Analytics & Monitoring',
      description: 'Advanced analytics platform for Sui blockchain applications. Provides real-time insights, performance monitoring, and predictive analytics for dApps.',
      longDescription: 'Project Beta is our comprehensive analytics solution that gives developers deep insights into their Sui applications. From performance metrics to user behavior analysis, it provides the data needed to optimize and scale applications.',
      image: '/images/i-02.png',
      status: 'Coming Soon',
      version: 'v0.3.0',
      category: 'Analytics & Monitoring',
      technologies: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL'],
      features: [
        'Real-time performance monitoring',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated alerting system',
        'Historical data analysis',
        'Integration with popular tools'
      ],
      metrics: {
        downloads: '0',
        stars: '340',
        contributors: '12',
        issues: '3'
      },
      links: {
        github: 'https://github.com/motion-labs/project-beta',
        docs: '/docs/project-beta',
        demo: '/demo/project-beta',
        download: '/download/project-beta'
      },
      releaseDate: '2025-02-15',
      lastUpdate: '2024-11-30'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Coming Soon':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="w-4 h-4" />;
      case 'Beta':
        return <Clock className="w-4 h-4" />;
      case 'Coming Soon':
        return <Rocket className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background noise-bg">
      <PhysicsBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-16 h-16 text-primary mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the cutting-edge tools and platforms we're building to revolutionize 
              Sui blockchain development. From AI-powered coding assistants to comprehensive 
              analytics platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover-lift motion-transition">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 motion-transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 text-sm font-medium rounded-full border flex items-center space-x-2 ${
                            getStatusColor(project.status)
                          }`}>
                            {getStatusIcon(project.status)}
                            <span>{project.status}</span>
                          </span>
                          <span className="text-white text-sm font-medium">
                            {project.version}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-lg text-primary font-medium mb-4">{project.subtitle}</p>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.metrics.downloads}</div>
                        <div className="text-xs text-muted-foreground">Downloads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.metrics.stars}</div>
                        <div className="text-xs text-muted-foreground">Stars</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.metrics.contributors}</div>
                        <div className="text-xs text-muted-foreground">Contributors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{project.metrics.issues}</div>
                        <div className="text-xs text-muted-foreground">Open Issues</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.links.docs}
                        className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-full hover:bg-accent motion-transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Documentation</span>
                      </motion.a>
                      
                      {project.status === 'Active' && (
                        <motion.a
                          href={project.links.download}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 motion-transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who are already using our tools to build the future of Sui applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition glow-blue hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/motion-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border rounded-full hover:bg-accent motion-transition hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 