import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const form = useRef()
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required'
    } else if (formData.user_name.length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters'
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('sending')
    /* 
      Replace the serviceId, templateId and userId below with your EmailJS credentials.
      1. Go to https://www.emailjs.com/ and create an account.
      2. Create an email service (e.g., Gmail) — you'll get a SERVICE ID.
      3. Create a template and note its TEMPLATE ID.
      4. In Settings, find USER ID (or Public Key) and copy.
    */
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID'
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'
    const userId = 'YOUR_EMAILJS_USER_ID'

    if (serviceId.includes('YOUR')){
      setStatus('error')
      alert('Please replace EmailJS placeholders in src/pages/Contact.jsx with your EmailJS credentials.')
      return
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
          setStatus('sent')
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          })
          setTimeout(() => setStatus(''), 5000)
      }, (error) => {
          setStatus('error')
          setTimeout(() => setStatus(''), 5000)
      })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'sajjad.shahid@example.com',
      link: 'mailto:sajjad.shahid@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      title: 'WhatsApp',
      content: '+92 312 3456789',
      link: 'https://wa.me/923123456789',
      description: 'Chat with me on WhatsApp',
      external: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Islamabad, Pakistan',
      link: '#',
      description: 'Available for remote work worldwide'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: '#',
      description: 'Response time within 24 hours'
    }
  ]

  return (
    <section id="contact" className="pt-20 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent pointer-events-none"></div>
      
      {/* Floating Decorative Image - Left Side */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:-left-10 -top-8 sm:-top-4 z-0 opacity-20 sm:opacity-30">
        <img 
          src="/pictures/5.avif" 
          alt="Decorative" 
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain animate-rotate-180"
          style={{transform: 'rotate(180deg)'}}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span style={{color: '#32C9B5'}}>Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.external ? '_blank' : '_self'}
                  rel={info.external ? 'noopener noreferrer' : ''}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-[#32C9B5]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#32C9B5]/20 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#32C9B5]/20 to-[#20a89a]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-[#32C9B5]/40 text-[#32C9B5]">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#32C9B5] transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-white text-sm mb-2 font-medium">{info.content}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{info.description}</p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-[#32C9B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold mb-8">Follow Me</h4>
              <div className="flex gap-8">
                <a href="https://wa.me/923123456789" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-8 h-8 bg-white text-gray-800 transition-all duration-500" style={{transform:'rotate(-30deg) skew(25deg)',boxShadow:'-10px 10px 5px rgba(0,0,0,0.5)'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg) translate(8px,-5px)';e.currentTarget.style.boxShadow='-20px 20px 20px rgba(0,0,0,0.5)';e.currentTarget.style.background='#25D366';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg)';e.currentTarget.style.boxShadow='-10px 10px 5px rgba(0,0,0,0.5)';e.currentTarget.style.background='white';}}><div className="absolute top-1 -left-2 h-full w-2 bg-gray-400 transition-all duration-500 group-hover:bg-[#1ea952]" style={{transform:'skewY(-45deg)'}}></div><div className="absolute -bottom-2 -left-1 h-2 w-full bg-gray-400 transition-all duration-500 group-hover:bg-[#34e577]" style={{transform:'skewX(-45deg)'}}></div><svg className="w-4 h-4 transition-colors duration-500 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-8 h-8 bg-white text-gray-800 transition-all duration-500" style={{transform:'rotate(-30deg) skew(25deg)',boxShadow:'-10px 10px 5px rgba(0,0,0,0.5)'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg) translate(8px,-5px)';e.currentTarget.style.boxShadow='-20px 20px 20px rgba(0,0,0,0.5)';e.currentTarget.style.background='linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg)';e.currentTarget.style.boxShadow='-10px 10px 5px rgba(0,0,0,0.5)';e.currentTarget.style.background='white';}}><div className="absolute top-1 -left-2 h-full w-2 bg-gray-400 transition-all duration-500 group-hover:bg-[#a8156b]" style={{transform:'skewY(-45deg)'}}></div><div className="absolute -bottom-2 -left-1 h-2 w-full bg-gray-400 transition-all duration-500 group-hover:bg-[#e95f8a]" style={{transform:'skewX(-45deg)'}}></div><svg className="w-4 h-4 transition-colors duration-500 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-8 h-8 bg-white text-gray-800 transition-all duration-500" style={{transform:'rotate(-30deg) skew(25deg)',boxShadow:'-10px 10px 5px rgba(0,0,0,0.5)'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg) translate(8px,-5px)';e.currentTarget.style.boxShadow='-20px 20px 20px rgba(0,0,0,0.5)';e.currentTarget.style.background='#3b5998';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg)';e.currentTarget.style.boxShadow='-10px 10px 5px rgba(0,0,0,0.5)';e.currentTarget.style.background='white';}}><div className="absolute top-1 -left-2 h-full w-2 bg-gray-400 transition-all duration-500 group-hover:bg-[#2d4373]" style={{transform:'skewY(-45deg)'}}></div><div className="absolute -bottom-2 -left-1 h-2 w-full bg-gray-400 transition-all duration-500 group-hover:bg-[#4e69a2]" style={{transform:'skewX(-45deg)'}}></div><svg className="w-4 h-4 transition-colors duration-500 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-8 h-8 bg-white text-gray-800 transition-all duration-500" style={{transform:'rotate(-30deg) skew(25deg)',boxShadow:'-10px 10px 5px rgba(0,0,0,0.5)'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg) translate(8px,-5px)';e.currentTarget.style.boxShadow='-20px 20px 20px rgba(0,0,0,0.5)';e.currentTarget.style.background='#0077b5';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg)';e.currentTarget.style.boxShadow='-10px 10px 5px rgba(0,0,0,0.5)';e.currentTarget.style.background='white';}}><div className="absolute top-1 -left-2 h-full w-2 bg-gray-400 transition-all duration-500 group-hover:bg-[#005582]" style={{transform:'skewY(-45deg)'}}></div><div className="absolute -bottom-2 -left-1 h-2 w-full bg-gray-400 transition-all duration-500 group-hover:bg-[#0e8cc4]" style={{transform:'skewX(-45deg)'}}></div><svg className="w-4 h-4 transition-colors duration-500 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-8 h-8 bg-white text-gray-800 transition-all duration-500" style={{transform:'rotate(-30deg) skew(25deg)',boxShadow:'-10px 10px 5px rgba(0,0,0,0.5)'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg) translate(8px,-5px)';e.currentTarget.style.boxShadow='-20px 20px 20px rgba(0,0,0,0.5)';e.currentTarget.style.background='#333';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='rotate(-30deg) skew(25deg)';e.currentTarget.style.boxShadow='-10px 10px 5px rgba(0,0,0,0.5)';e.currentTarget.style.background='white';}}><div className="absolute top-1 -left-2 h-full w-2 bg-gray-400 transition-all duration-500 group-hover:bg-[#1a1a1a]" style={{transform:'skewY(-45deg)'}}></div><div className="absolute -bottom-2 -left-1 h-2 w-full bg-gray-400 transition-all duration-500 group-hover:bg-[#4d4d4d]" style={{transform:'skewX(-45deg)'}}></div><svg className="w-4 h-4 transition-colors duration-500 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="user_name" 
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required 
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-800 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#32C9B5]/50 ${
                      errors.user_name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-[#32C9B5]'
                    }`}
                  />
                  {errors.user_name && (
                    <p className="mt-1 text-xs text-red-500">{errors.user_name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="user_email" 
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required 
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-800 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#32C9B5]/50 ${
                      errors.user_email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-700 focus:border-[#32C9B5]'
                    }`}
                  />
                  {errors.user_email && (
                    <p className="mt-1 text-xs text-red-500">{errors.user_email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Subject *
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  placeholder="Project Discussion"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-800 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#32C9B5]/50 ${
                    errors.subject 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-700 focus:border-[#32C9B5]'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message *
                </label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  placeholder="Tell me about your project..."
                  rows="6"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-800 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#32C9B5]/50 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-700 focus:border-[#32C9B5]'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <div className="buttons" style={{ textAlign: 'center' }}>
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="blob-btn relative"
                    style={{
                      zIndex: 1,
                      position: 'relative',
                      padding: '20px 46px',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      color: '#32C9B5',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      border: 'none',
                      transition: 'color 0.5s',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      borderRadius: '30px',
                      opacity: status === 'sending' ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'sending') {
                        e.target.style.color = '#000000';
                        const after = e.target.querySelector('.blob-btn-after');
                        if (after) {
                          after.style.transition = 'all 0.3s';
                          after.style.left = '0';
                          after.style.top = '0';
                        }
                        const blobs = e.target.querySelectorAll('.blob-btn__blob');
                        blobs.forEach(blob => {
                          blob.style.transform = 'translateZ(0) scale(1.4)';
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (status !== 'sending') {
                        e.target.style.color = '#32C9B5';
                        const after = e.target.querySelector('.blob-btn-after');
                        if (after) {
                          after.style.transition = 'all 0.3s 0.2s';
                          after.style.left = '3px';
                          after.style.top = '3px';
                        }
                        const blobs = e.target.querySelectorAll('.blob-btn__blob');
                        blobs.forEach(blob => {
                          blob.style.transform = 'translate3d(0,150%,0) scale(1.4)';
                        });
                      }
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    {/* Before pseudo-element replacement */}
                    <div style={{
                      zIndex: 1,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      border: '2px solid #32C9B5',
                      borderRadius: '30px',
                      pointerEvents: 'none'
                    }}/>
                    {/* After pseudo-element replacement */}
                    <div 
                      className="blob-btn-after"
                      style={{
                        zIndex: -2,
                        position: 'absolute',
                        left: '3px',
                        top: '3px',
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        transition: 'all 0.3s 0.2s',
                        borderRadius: '30px',
                        pointerEvents: 'none'
                      }}
                    />
                    {/* Inner container */}
                    <span className="blob-btn__inner" style={{
                      zIndex: -1,
                      overflow: 'hidden',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '30px',
                      background: '#090D15',
                      pointerEvents: 'none'
                    }}>
                      {/* Blobs container */}
                      <span className="blob-btn__blobs" style={{
                        position: 'relative',
                        display: 'block',
                        height: '100%',
                        filter: 'url("#goo")'
                      }}>
                        {/* Individual blobs */}
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.4)',
                          transition: 'transform 0.45s',
                          left: '0%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.4)',
                          transition: 'transform 0.45s 0.08s',
                          left: '30%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.4)',
                          transition: 'transform 0.45s 0.16s',
                          left: '60%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.4)',
                          transition: 'transform 0.45s 0.24s',
                          left: '90%'
                        }}/>
                      </span>
                    </span>
                  </button>
                </div>
                
                <div className="text-sm">
                  {status === 'sent' && (
                    <span className="text-green-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      Message sent successfully!
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                      Failed to send message
                    </span>
                  )}
                </div>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 text-center">
                I'll respond to your message within 24 hours. For urgent matters, please call or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}