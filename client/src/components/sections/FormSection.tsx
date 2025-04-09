'use client'

import { useState } from 'react'
import { useLanguage } from '@/i18n'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

interface FormData {
  firstName: string
  lastName: string
  email: string
  role: string
  company: string
  consent: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  role?: string
  company?: string
}

export default function FormSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    company: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // In a real implementation, this would send data to a server
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium text-primary sm:text-4xl">
            {t('form.title')}
          </h2>
          <p className="mt-4 text-lg text-primary/70">
            {t('form.subtitle')}
          </p>
        </div>
        
        <div className="mx-auto max-w-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="resume-gate-form space-y-6 rounded-lg border p-6 shadow-md">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">{t('form.fields.firstName')}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="lastName">{t('form.fields.lastName')}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">{t('form.fields.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="role">{t('form.fields.role')}</Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={errors.role ? 'border-red-500' : ''}
                  />
                  {errors.role && (
                    <p className="mt-1 text-xs text-red-500">{errors.role}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="company">{t('form.fields.company')}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? 'border-red-500' : ''}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500">{errors.company}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="consent" className="text-sm">
                  {t('form.consent')}
                </Label>
              </div>
              
              {submitError && (
                <p className="text-sm text-red-500">{submitError}</p>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : t('form.submit')}
              </Button>
            </form>
          ) : (
            <div className="resume-gate-form space-y-6 rounded-lg border p-6 shadow-md">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-primary mb-2">Thank you!</h3>
                <p className="text-primary/70">{t('form.success')}</p>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-md p-4 bg-muted/20">
                  <h4 className="font-medium text-primary mb-2">Resume</h4>
                  <Button className="w-full">Download PDF</Button>
                </div>
                
                <div className="border rounded-md p-4 bg-muted/20">
                  <h4 className="font-medium text-primary mb-2">Video Introduction</h4>
                  <div className="aspect-video bg-black/10 flex items-center justify-center rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary/40">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
