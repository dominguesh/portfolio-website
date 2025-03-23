'use client'

import { useLanguage } from '@/i18n'
import { useState } from 'react'

// Placeholder for certification badges
const certifications = {
  active: [
    { id: 1, name: 'AWS Certified Solutions Architect', image: '/images/active-badges/placeholder1.svg' },
    { id: 2, name: 'Microsoft Azure Administrator', image: '/images/active-badges/placeholder2.svg' },
    { id: 3, name: 'Google Cloud Professional', image: '/images/active-badges/placeholder3.svg' },
    { id: 4, name: 'Certified Kubernetes Administrator', image: '/images/active-badges/placeholder4.svg' },
  ],
  expired: [
    { id: 5, name: 'CompTIA Security+', image: '/images/expired-badges/placeholder5.svg' },
    { id: 6, name: 'Cisco CCNA', image: '/images/expired-badges/placeholder6.svg' },
    { id: 7, name: 'ITIL Foundation', image: '/images/expired-badges/placeholder7.svg' },
  ]
}

export default function CertificationsBadges() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'active' | 'expired'>('active')
  
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium text-primary sm:text-4xl">
            {t('certifications.title')}
          </h2>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                activeTab === 'active'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-primary hover:bg-muted/80'
              }`}
              onClick={() => setActiveTab('active')}
            >
              {t('certifications.active')}
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                activeTab === 'expired'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-primary hover:bg-muted/80'
              }`}
              onClick={() => setActiveTab('expired')}
            >
              {t('certifications.expired')}
            </button>
          </div>
        </div>
        
        {/* Badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications[activeTab].map((cert) => (
            <div 
              key={cert.id} 
              className={`flex flex-col items-center p-4 rounded-lg ${
                activeTab === 'active' ? 'bg-muted/30' : 'bg-muted/10'
              }`}
            >
              {/* Badge placeholder */}
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                activeTab === 'active' ? 'bg-accent/20' : 'bg-primary/10'
              }`}>
                <span className="text-3xl font-bold text-primary/50">
                  {cert.name.substring(0, 2)}
                </span>
              </div>
              
              {/* Badge name */}
              <h3 className="text-sm text-center font-medium text-primary">
                {cert.name}
              </h3>
              
              {/* Status indicator */}
              <span className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-xs ${
                activeTab === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {activeTab === 'active' ? 'Active' : 'Expired'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
