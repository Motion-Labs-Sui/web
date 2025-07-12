'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Sui MCP', href: '/projects/sui-mcp' },
      { name: 'Ecosystem', href: '/ecosystem' },
      { name: 'Projects', href: '/projects' },
      { name: 'Roadmap', href: '/about#roadmap' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'GitHub', href: 'https://github.com/motion-labs' },
      { name: 'Discord', href: 'https://discord.gg/motionlabs' },
      { name: 'Twitter', href: 'https://twitter.com/motionlabs' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'License', href: '/license' },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border relative z-10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Image
                src="/brand/logo.svg"
                alt="Motion Labs"
                width={32}
                height={32}
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold">Motion Labs</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building the future of AI-powered development tools for the Sui blockchain ecosystem. 
              Empowering developers to build faster, debug smarter, and deploy with confidence.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/motion-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent motion-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/motionlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent motion-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@motionlabs.dev"
                className="p-2 rounded-full hover:bg-accent motion-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground motion-transition inline-flex items-center space-x-1"
                        whileHover={{ x: 2 }}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground motion-transition block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on our AI-powered development tools and Sui ecosystem innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <motion.button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 Motion Labs. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://discord.gg/motionlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 motion-transition text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
} 