'use client'

import { useLanguage } from '@/i18n'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Project data from README files
const projects = [
  {
    id: 'secure-lab',
    title: 'Secure Lab Environment',
    description: 'This project implements a secure laboratory environment with isolated networks, featuring a web server, database server, and proper security controls through a bastion host. The implementation includes PAM (Pluggable Authentication Modules) for enhanced security and access control.',
    image: '/images/projects/secure-lab-placeholder.jpg',
    technologies: ['PAM', 'Network Security', 'VMware', 'Ubuntu Server'],
    category: 'security',
    github: 'https://github.com/dominguesh/secure-lab-environment',
  },
  {
    id: 'veganeiro',
    title: 'Veganeiro Web App 🌱',
    description: 'Veganeiro is a comprehensive vegan lifestyle platform providing tools, resources, and community features to support people at different stages of their vegan journey. This project aims to make the transition to veganism accessible and enjoyable for everyone.',
    image: '/images/projects/veganeiro-placeholder.jpg',
    technologies: ['Next.js 13', 'TypeScript', 'TailwindCSS', 'Shadcn UI', 'Zustand'],
    category: 'web',
    github: 'https://github.com/dominguesh/veganeiro',
  },
]

export default function PortfolioSection() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium text-primary sm:text-4xl">
            {t('portfolio.title')}
          </h2>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="text-sm"
          >
            {t('portfolio.filters.all')}
          </Button>
          <Button 
            variant={filter === 'security' ? 'default' : 'outline'}
            onClick={() => setFilter('security')}
            className="text-sm"
          >
            {t('portfolio.filters.security')}
          </Button>
          <Button 
            variant={filter === 'web' ? 'default' : 'outline'}
            onClick={() => setFilter('web')}
            className="text-sm"
          >
            {t('portfolio.filters.web')}
          </Button>
          <Button 
            variant={filter === 'ai' ? 'default' : 'outline'}
            onClick={() => setFilter('ai')}
            className="text-sm"
          >
            {t('portfolio.filters.ai')}
          </Button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-background rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent/50">{project.title}</span>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-primary/80 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary mb-2">{t('portfolio.technologies')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action button */}
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      {t('portfolio.viewProject')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
