'use client';

import { motion } from 'framer-motion';
import { 
  Network, 
  Zap, 
  Code, 
  Users, 
  Globe, 
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  Layers,
  Database,
  Shield,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhysicsBackground from '@/components/PhysicsBackground';

export default function EcosystemPage() {
  const ecosystemStats = [
    { label: 'Active Developers', value: '12K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Projects Built', value: '450+', icon: <Code className="w-6 h-6" /> },
    { label: 'GitHub Stars', value: '8.5K+', icon: <Star className="w-6 h-6" /> },
    { label: 'Community Members', value: '25K+', icon: <Globe className="w-6 h-6" /> },
  ];

  const coreProducts = [
    {
      name: 'Sui MCP',
      description: 'AI-powered development protocol for Sui blockchain',
      category: 'Core Platform',
      status: 'Active',
      icon: <Brain className="w-8 h-8" />,
      features: ['AI Code Completion', 'Smart Debugging', 'Security Analysis'],
      link: '/projects/sui-mcp'
    },
    {
      name: 'Motion SDK',
      description: 'Comprehensive development kit for Sui applications',
      category: 'Developer Tools',
      status: 'Beta',
      icon: <Code className="w-8 h-8" />,
      features: ['Type-safe APIs', 'Testing Framework', 'Deployment Tools'],
      link: '/projects/motion-sdk'
    },
    {
      name: 'Analytics Platform',
      description: 'Real-time insights and monitoring for Sui dApps',
      category: 'Analytics',
      status: 'Coming Soon',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance Monitoring', 'User Analytics', 'Custom Dashboards'],
      link: '/projects/analytics'
    }
  ];

  const integrations = [
    {
      name: 'VS Code Extension',
      description: 'Native integration with Visual Studio Code',
      category: 'IDE',
      icon: '/images/integrations/vscode.svg',
      status: 'Available'
    },
    {
      name: 'JetBrains Plugin',
      description: 'Support for IntelliJ IDEA and WebStorm',
      category: 'IDE',
      icon: '/images/integrations/jetbrains.svg',
      status: 'Available'
    },
    {
      name: 'GitHub Actions',
      description: 'CI/CD workflows for Sui projects',
      category: 'DevOps',
      icon: '/images/integrations/github.svg',
      status: 'Available'
    },
    {
      name: 'Docker Integration',
      description: 'Containerized development environments',
      category: 'DevOps',
      icon: '/images/integrations/docker.svg',
      status: 'Available'
    },
    {
      name: 'Sui Wallet',
      description: 'Direct wallet integration for testing',
      category: 'Wallet',
      icon: '/images/integrations/sui-wallet.svg',
      status: 'Available'
    },
    {
      name: 'Vercel Deploy',
      description: 'One-click deployment to Vercel',
      category: 'Hosting',
      icon: '/images/integrations/vercel.svg',
      status: 'Beta'
    }
  ];

  const partners = [
    {
      name: 'Sui Foundation',
      description: 'Official partnership for ecosystem development',
      logo: '/images/partners/sui-foundation.svg',
      type: 'Strategic Partner'
    },
    {
      name: 'Move Language',
      description: 'Core contributor to Move language tooling',
      logo: '/images/partners/move.svg',
      type: 'Technology Partner'
    },
    {
      name: 'Mysten Labs',
      description: 'Collaboration on developer experience',
      logo: '/images/partners/mysten.svg',
      type: 'Technology Partner'
    },
    {
      name: 'OpenAI',
      description: 'AI model integration and optimization',
      logo: '/images/partners/openai.svg',
      type: 'Technology Partner'
    }
  ];

  const developmentLayers = [
    {
      title: 'AI Layer',
      description: 'Intelligent code assistance and automation',
      icon: <Brain className="w-10 h-10" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization']
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive development environment',
      icon: <Code className="w-10 h-10" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['IDE Integration', 'Testing Framework', 'Debugging Tools']
    },
    {
      title: 'Platform Services',
      description: 'Cloud-native development platform',
      icon: <Layers className="w-10 h-10" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Deployment Pipeline', 'Monitoring', 'Analytics']
    },
    {
      title: 'Sui Blockchain',
      description: 'High-performance blockchain infrastructure',
      icon: <Network className="w-10 h-10" />,
      color: 'from-orange-500 to-red-500',
      features: ['Smart Contracts', 'Consensus', 'Storage']
    }
  ];

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
              <Network className="w-16 h-16 text-primary mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Motion{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform of interconnected tools, services, and partnerships 
              designed to accelerate Sui blockchain development and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-16 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ecosystemStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover-lift motion-transition">
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stack */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Development Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our layered approach to Sui development, from AI-powered assistance to blockchain infrastructure
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {developmentLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover-lift motion-transition">
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${layer.color} text-white`}>
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground text-lg mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < developmentLayers.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Core Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundational tools that power the Motion ecosystem
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={product.link}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover-lift motion-transition h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-primary">
                        {product.icon}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : product.status === 'Beta'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{product.category}</p>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center text-primary group-hover:text-primary/80 motion-transition">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 motion-transition" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with your existing development workflow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover-lift motion-transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      integration.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{integration.category}</p>
                  <p className="text-muted-foreground text-sm">{integration.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to build the future of Sui development
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover-lift motion-transition">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{partner.name}</h3>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {partner.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join the Motion Ecosystem</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the revolution in Sui blockchain development. Connect with thousands of developers, 
              contribute to open-source projects, and help shape the future of decentralized applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition glow-blue hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </motion.a>
              
              <motion.a
                href="https://discord.gg/motionlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-border rounded-full hover:bg-accent motion-transition hover-lift flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 