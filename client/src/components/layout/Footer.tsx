'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and motto */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Heraldo Domingues</h2>
            <p className="text-sm italic">Aut Viam Inveniam Aut Faciam</p>
            <p className="text-sm">Either I will find a way or I will make one</p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-sm hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-sm hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/dominguesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Link 
                href="mailto:contact@heraldo.domingues.pro"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright and legal */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm">
              &copy; {currentYear} Heraldo Domingues. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-accent transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
