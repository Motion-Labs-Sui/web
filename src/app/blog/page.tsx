'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  Search,
  Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PhysicsBackground from '@/components/PhysicsBackground';

export default function BlogPage() {
  const featuredPost = {
    id: 'sui-mcp-v2-launch',
    title: 'Introducing Sui MCP v2.0: The Future of AI-Powered Blockchain Development',
    excerpt: 'Our biggest update yet brings advanced AI capabilities, improved performance, and seamless integration with popular development tools.',
    content: 'Today marks a significant milestone in our journey to revolutionize blockchain development. Sui MCP v2.0 introduces groundbreaking features that will transform how developers build on the Sui blockchain...',
    author: {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      avatar: '/images/team/alex.jpg'
    },
    category: 'Product Updates',
    publishDate: '2025-12-01',
    readTime: '8 min read',
    image: '/images/blog/sui-mcp-v2.jpg',
    tags: ['Sui MCP', 'AI', 'Product Launch', 'Developer Tools']
  };

  const blogPosts = [
    {
      id: 'ai-code-review-best-practices',
      title: 'Best Practices for AI-Powered Code Reviews in Blockchain Development',
      excerpt: 'Learn how to leverage AI for more effective code reviews while maintaining security and code quality standards.',
      author: {
        name: 'Sarah Kim',
        role: 'CTO',
        avatar: '/images/team/sarah.jpg'
      },
      category: 'Development',
      publishDate: '2025-11-28',
      readTime: '6 min read',
      image: '/images/blog/ai-code-review.jpg',
      tags: ['AI', 'Code Review', 'Best Practices']
    },
    {
      id: 'sui-move-optimization-tips',
      title: 'Performance Optimization Tips for Sui Move Smart Contracts',
      excerpt: 'Discover advanced techniques to optimize your Sui Move contracts for better performance and lower gas costs.',
      author: {
        name: 'Marcus Johnson',
        role: 'Lead Developer',
        avatar: '/images/team/marcus.jpg'
      },
      category: 'Tutorial',
      publishDate: '2025-11-25',
      readTime: '10 min read',
      image: '/images/blog/move-optimization.jpg',
      tags: ['Sui Move', 'Performance', 'Smart Contracts']
    },
    {
      id: 'building-scalable-dapps-sui',
      title: 'Building Scalable dApps on Sui: Architecture Patterns and Best Practices',
      excerpt: 'A comprehensive guide to designing and building scalable decentralized applications on the Sui blockchain.',
      author: {
        name: 'Elena Rodriguez',
        role: 'Head of Product',
        avatar: '/images/team/elena.jpg'
      },
      category: 'Architecture',
      publishDate: '2025-11-22',
      readTime: '12 min read',
      image: '/images/blog/scalable-dapps.jpg',
      tags: ['dApps', 'Architecture', 'Scalability']
    },
    {
      id: 'motion-labs-series-a',
      title: 'Motion Labs Raises $15M Series A to Accelerate AI-Powered Blockchain Development',
      excerpt: 'We are excited to announce our Series A funding round led by top-tier investors to expand our AI development platform.',
      author: {
        name: 'Alex Chen',
        role: 'CEO & Founder',
        avatar: '/images/team/alex.jpg'
      },
      category: 'Company News',
      publishDate: '2025-11-20',
      readTime: '5 min read',
      image: '/images/blog/series-a.jpg',
      tags: ['Funding', 'Company News', 'Growth']
    },
    {
      id: 'debugging-sui-smart-contracts',
      title: 'Advanced Debugging Techniques for Sui Smart Contracts',
      excerpt: 'Master the art of debugging Sui Move contracts with advanced tools and techniques for faster development.',
      author: {
        name: 'Marcus Johnson',
        role: 'Lead Developer',
        avatar: '/images/team/marcus.jpg'
      },
      category: 'Tutorial',
      publishDate: '2025-11-18',
      readTime: '8 min read',
      image: '/images/blog/debugging-contracts.jpg',
      tags: ['Debugging', 'Smart Contracts', 'Development']
    },
    {
      id: 'future-of-blockchain-development',
      title: 'The Future of Blockchain Development: AI, Automation, and Developer Experience',
      excerpt: 'Exploring how AI and automation are reshaping blockchain development and what it means for developers.',
      author: {
        name: 'Sarah Kim',
        role: 'CTO',
        avatar: '/images/team/sarah.jpg'
      },
      category: 'Industry Insights',
      publishDate: '2025-11-15',
      readTime: '7 min read',
      image: '/images/blog/future-blockchain.jpg',
      tags: ['AI', 'Automation', 'Future', 'Industry']
    }
  ];

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Product Updates', count: 3 },
    { name: 'Development', count: 4 },
    { name: 'Tutorial', count: 2 },
    { name: 'Company News', count: 2 },
    { name: 'Industry Insights', count: 1 }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              <BookOpen className="w-16 h-16 text-primary mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Motion Labs{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Motion Labs team. 
              Stay up-to-date with the latest in AI-powered blockchain development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-secondary/30 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-foreground">Featured Post</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover-lift motion-transition">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 motion-transition"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary motion-transition">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{featuredPost.author.name}</p>
                          <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-primary group-hover:text-primary/80 motion-transition">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 motion-transition" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="bg-card border border-border rounded-2xl overflow-hidden hover-lift motion-transition">
                        <div className="relative h-48">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 motion-transition"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(post.publishDate)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary motion-transition line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {post.author.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="text-xs text-muted-foreground">{post.author.name}</span>
                            </div>
                            
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 motion-transition" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-8">
              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </motion.div>
              
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <button className="text-muted-foreground hover:text-primary motion-transition">
                        {category.name}
                      </button>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Sui Move', 'Development', 'Smart Contracts', 'Blockchain', 'Tutorial', 'Best Practices', 'Performance'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground motion-transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 