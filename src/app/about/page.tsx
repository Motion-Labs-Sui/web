'use client';

import { motion } from 'framer-motion';
import { 
  Atom, 
  Code, 
  Users, 
  Target, 
  Rocket,
  Brain,
  Shield,
  Globe,
  CheckCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhysicsBackground from '@/components/PhysicsBackground';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Sui Labs engineer with 8+ years in blockchain development",
      image: "/images/team/alex.jpg",
      social: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "AI/ML expert with experience at OpenAI and Google DeepMind",
      image: "/images/team/sarah.jpg",
      social: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in developer tools and UX",
      image: "/images/team/marcus.jpg",
      social: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      bio: "Product strategist with focus on developer experience",
      image: "/images/team/elena.jpg",
      social: { twitter: "#", github: "#", linkedin: "#" }
    }
  ];

  const milestones = [
    {
      quarter: "Q1 2024",
      title: "Foundation",
      status: "completed",
      items: [
        "Team formation and initial funding",
        "Market research and user interviews",
        "Technical architecture design"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Sui MCP Alpha",
      status: "completed",
      items: [
        "Core MCP protocol implementation",
        "Basic AI code generation features",
        "Developer preview release"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Public Beta",
      status: "current",
      items: [
        "Enhanced AI debugging capabilities",
        "Community feedback integration",
        "Performance optimizations"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Production Release",
      status: "upcoming",
      items: [
        "Sui MCP v1.0 launch",
        "Advanced analytics dashboard",
        "Enterprise features"
      ]
    },
    {
      quarter: "Q1 2025",
      title: "Ecosystem Expansion",
      status: "planned",
      items: [
        "Project Alpha launch",
        "Third-party integrations",
        "Mobile development tools"
      ]
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-First Approach",
      description: "We believe artificial intelligence should augment human creativity, not replace it."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer-Centric",
      description: "Every decision we make prioritizes developer experience and productivity."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security by Design",
      description: "Security isn't an afterthought—it's built into every layer of our products."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Open Ecosystem",
      description: "We build tools that integrate seamlessly with existing workflows and platforms."
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
              <Atom className="w-16 h-16 text-primary mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Sui Development
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Motion Labs is on a mission to democratize blockchain development through 
              AI-powered tools that make building on Sui faster, safer, and more accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower developers worldwide with intelligent tools that eliminate the complexity 
                of blockchain development while maintaining the security and decentralization that 
                makes Sui unique.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where building on blockchain is as intuitive as traditional 
                web development, where AI assists developers at every step, and where innovation 
                isn&apos;t limited by technical barriers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A thriving Sui ecosystem where developers can focus on building innovative 
                applications rather than wrestling with infrastructure complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re creating the developer experience that will onboard the next million 
                blockchain developers, making Sui the platform of choice for the next 
                generation of decentralized applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover-lift motion-transition">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse group of builders, thinkers, and innovators united by our passion for developer tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover-lift motion-transition">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our journey to revolutionize Sui development, one milestone at a time
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    milestone.status === 'completed' 
                      ? 'bg-green-500 border-green-500' 
                      : milestone.status === 'current'
                      ? 'bg-blue-500 border-blue-500 animate-pulse'
                      : 'bg-background border-border'
                  }`} />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mx-auto mt-4" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <span className="text-sm text-muted-foreground">{milestone.quarter}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            milestone.status === 'completed' 
                              ? 'text-green-500' 
                              : 'text-muted-foreground'
                          }`} />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 