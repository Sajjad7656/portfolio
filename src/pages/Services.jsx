import React from 'react'

export default function Services() {
  const bannerServices = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Business Webistes',
    'Automation & QA Tools',
    'Backend Development',
    'API Integration'
  ]

  const services = [
    {
      title: 'Web Development',
      desc: 'I build custom websites and web apps using the MERN Stack, optimized for speed, security, and scalability.',
      icon: '🌐',
      image: '/pictures/7.avif',
      features: [
        'MERN Stack Development (MongoDB, Express, React, Node.js)',
        'Custom Web Applications',
        'Performance Optimization',
        'Security Implementation',
        'Scalable Architecture',
        'API Integration'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      price: 'Starting at $999',
      popular: true
    },
    {
      title: 'Frontend Design',
      desc: 'Crafting responsive UI/UX with Tailwind, React, and Next.js that look good on any screen.',
      icon: '🎨',
      image: '/pictures/9.avif',
      features: [
        'Responsive Design',
        'Modern UI/UX Principles',
        'Tailwind CSS Expertise',
        'React & Next.js Development',
        'Component-Based Architecture',
        'Cross-Browser Compatibility'
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
      price: 'Starting at $799'
    },
    {
      title: 'Backend Development',
      desc: 'Building strong backend APIs and database systems with Node.js and MongoDB.',
      icon: '⚙️',
      image: '/pictures/10.avif',
      features: [
        'RESTful API Development',
        'Database Design & Management',
        'Authentication & Authorization',
        'Server-Side Logic',
        'Microservices Architecture',
        'Cloud Integration'
      ],
      tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT'],
      price: 'Starting at $899'
    },
    {
      title: 'Business Websites',
      desc: 'From branding to deployment — full setup for startups, agencies, and companies.',
      icon: '🏢',
      image: '/pictures/12.avif',
      features: [
        'Complete Brand Integration',
        'CMS Development',
        'E-commerce Solutions',
        'SEO Optimization',
        'Analytics Integration',
        'Maintenance & Support'
      ],
      tech: ['WordPress', 'React', 'Node.js', 'SEO Tools', 'Analytics'],
      price: 'Starting at $1,299'
    },
    {
      title: 'Automation & QA Tools',
      desc: 'Automating manual QA reporting and compliance systems using AI-powered solutions.',
      icon: '🤖',
      image: '/pictures/11.avif',
      features: [
        'Automated Testing Systems',
        'QA Report Generation',
        'Compliance Management',
        'AI-Powered Solutions',
        'Process Automation',
        'Custom Tool Development'
      ],
      tech: ['Python', 'AI/ML', 'Automation Tools', 'Testing Frameworks', 'Cloud'],
      price: 'Starting at $1,599'
    },
    {
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile applications with native performance and modern UI.',
      icon: '📱',
      image: '/pictures/8.avif',
      features: [
        'React Native Development',
        'Cross-Platform Apps',
        'Mobile UI/UX Design',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      tech: ['React Native', 'Firebase', 'Redux', 'Mobile APIs', 'iOS/Android'],
      price: 'Starting at $1,999'
    }
  ]


  return (
    <>
      {/* SVG Filter for blob effect */}
      <svg style={{position: 'absolute', width: 0, height: 0}}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <section id="services" className="pt-20 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative group inline-block">
            <span className="relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#32C9B5] hover:drop-shadow-lg hover:drop-shadow-[#32C9B5]/50">My</span>{' '}
            <span className="font-bold text-[#32C9B5] relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#32C9B5] hover:drop-shadow-lg hover:drop-shadow-[#32C9B5]/50">Services</span>
            
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#32C9B5] to-[#20a89a] transition-all duration-700 group-hover:w-full rounded-full"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#32C9B5]/10 via-transparent to-[#20a89a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-[#32C9B5]/0 rounded-full transition-all duration-1000 group-hover:bg-[#32C9B5]/60 group-hover:animate-ping"></div>
            <div className="absolute -top-2 -right-6 w-1 h-1 bg-[#20a89a]/0 rounded-full transition-all duration-1200 group-hover:bg-[#20a89a]/50 group-hover:animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/4 w-1.5 h-1.5 bg-[#32C9B5]/0 rounded-full transition-all duration-900 group-hover:bg-[#32C9B5]/40 group-hover:animate-bounce"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* Moving Banner - Full Width */}
      <div className="relative w-full py-6 overflow-hidden mb-12" style={{backgroundColor: '#32C9B5'}}>
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {bannerServices.map((service, idx) => (
                <React.Fragment key={`${i}-${idx}`}>
                  <span className="text-xl md:text-2xl font-bold text-black px-8">
                    {service}
                  </span>
                  <span className="text-2xl text-black px-4">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border transition-all duration-700 hover:shadow-2xl hover:shadow-[#32C9B5]/30 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-1 ${
                service.popular 
                  ? 'border-[#32C9B5]/50 ring-2 ring-[#32C9B5]/20 hover:border-[#32C9B5] hover:ring-[#32C9B5]/60 hover:ring-4' 
                  : 'border-gray-800 hover:border-[#32C9B5]/60'
              }`}
            >
              {/* Service Image Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-all duration-700 group-hover:from-black/95 group-hover:via-black/40"></div>
                {service.image && (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-125 group-hover:brightness-125 group-hover:contrast-110 group-hover:saturate-120 ${
                      service.title === 'Backend Development' ? 'object-top translate-y-2' : 'object-cover'
                    }`}
                  />
                )}
                {!service.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#32C9B5]/20 to-[#20a89a]/20 flex items-center justify-center text-4xl border border-[#32C9B5]/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {service.icon}
                    </div>
                  </div>
                )}
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-black z-20 shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-2xl group-hover:rotate-3"
                       style={{backgroundColor: '#32C9B5'}}>
                    MOST POPULAR
                  </div>
                )}
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/80 transition-all duration-700 rounded-tl-2xl group-hover:scale-110"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-3 border-r-3 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/80 transition-all duration-700 rounded-tr-2xl group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-3 border-l-3 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/80 transition-all duration-700 rounded-bl-2xl group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/80 transition-all duration-700 rounded-br-2xl group-hover:scale-110"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#32C9B5]/0 rounded-full group-hover:bg-[#32C9B5]/60 group-hover:scale-150 transition-all duration-1000 group-hover:animate-bounce"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-[#32C9B5]/0 rounded-full group-hover:bg-[#32C9B5]/40 group-hover:scale-200 transition-all duration-1200 group-hover:animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#32C9B5]/0 rounded-full group-hover:bg-[#32C9B5]/50 group-hover:scale-175 transition-all duration-900 group-hover:animate-pulse"></div>
              </div>

              {/* Service Content */}
              <div className="p-6 relative transition-all duration-700 group-hover:bg-gradient-to-b group-hover:from-gray-900/98 group-hover:to-black/98 group-hover:backdrop-blur-sm">
                {/* Decorative top line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#32C9B5]/50 to-transparent transition-all duration-700 group-hover:via-[#32C9B5] group-hover:h-0.5"></div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#32C9B5] transition-all duration-400 group-hover:scale-110 group-hover:tracking-wide transform origin-left">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-all duration-400 group-hover:leading-relaxed group-hover:tracking-tight">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-400 group-hover:translate-x-2 group-hover:scale-105">
                      <svg className="w-5 h-5 mr-3 text-[#32C9B5] flex-shrink-0 group-hover:scale-125 group-hover:rotate-45 group-hover:text-[#20a89a] transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="leading-relaxed group-hover:font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50 group-hover:border-[#32C9B5]/60 group-hover:bg-[#32C9B5]/15 group-hover:text-[#32C9B5] group-hover:shadow-md group-hover:shadow-[#32C9B5]/20 transition-all duration-400 group-hover:scale-110 group-hover:font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-gray-800/50 group-hover:border-[#32C9B5]/40 transition-all duration-400 group-hover:backdrop-blur-sm">
                  <p className="text-[#32C9B5] font-bold text-lg mb-4 group-hover:text-[#20a89a] transition-all duration-400 text-center group-hover:scale-110 group-hover:tracking-wider transform group-hover:drop-shadow-lg">
                    {service.price}
                  </p>
                  <button 
                    className="blob-btn relative w-full group"
                    style={{
                      zIndex: 1,
                      position: 'relative',
                      padding: '12px 16px',
                      textAlign: 'center',
                      color: '#32C9B5',
                      fontSize: '14px',
                      fontWeight: '500',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      border: 'none',
                      transition: 'color 0.7s',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      display: 'block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                      const after = e.currentTarget.querySelector('.blob-btn-after');
                      if (after) {
                        after.style.transition = 'all 0.4s';
                        after.style.left = '0';
                        after.style.top = '0';
                      }
                      const blobs = e.currentTarget.querySelectorAll('.blob-btn__blob');
                      blobs.forEach(blob => {
                        blob.style.transform = 'translateZ(0) scale(1.6)';
                      });
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#32C9B5';
                      const after = e.currentTarget.querySelector('.blob-btn-after');
                      if (after) {
                        after.style.transition = 'all 0.4s 0.3s';
                        after.style.left = '3px';
                        after.style.top = '3px';
                      }
                      const blobs = e.currentTarget.querySelectorAll('.blob-btn__blob');
                      blobs.forEach(blob => {
                        blob.style.transform = 'translate3d(0,150%,0) scale(1.6)';
                      });
                    }}
                  >
                    Get Started
                    {/* Border */}
                    <div style={{
                      zIndex: 1,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      border: '2px solid #32C9B5',
                      borderRadius: '8px',
                      pointerEvents: 'none'
                    }}/>
                    {/* After element */}
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
                        transition: 'all 0.4s 0.3s',
                        borderRadius: '8px',
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
                      borderRadius: '8px',
                      background: '#0D0D0D',
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
                          transform: 'translate3d(0,150%,0) scale(1.6)',
                          transition: 'transform 0.55s',
                          left: '0%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.6)',
                          transition: 'transform 0.55s 0.1s',
                          left: '30%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.6)',
                          transition: 'transform 0.55s 0.2s',
                          left: '60%'
                        }}/>
                        <span className="blob-btn__blob" style={{
                          position: 'absolute',
                          top: '2px',
                          width: '25%',
                          height: '100%',
                          background: '#32C9B5',
                          borderRadius: '100%',
                          transform: 'translate3d(0,150%,0) scale(1.6)',
                          transition: 'transform 0.55s 0.3s',
                          left: '90%'
                        }}/>
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Enhanced hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#32C9B5]/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Multiple shimmer effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -skew-x-12 group-hover:animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#32C9B5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1200 pointer-events-none skew-x-12 group-hover:animate-ping"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#20a89a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose My <span style={{color: '#32C9B5'}}>Services?</span></h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#32C9B5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div>
                  <h4 className="font-semibold mb-1">Expert MERN Stack Development</h4>
                  <p className="text-gray-400 text-sm">Specialized in MongoDB, Express, React, and Node.js with years of hands-on experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#32C9B5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-gray-400 text-sm">Rigorous testing and code review processes to ensure bug-free delivery</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#32C9B5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div>
                  <h4 className="font-semibold mb-1">On-Time Delivery</h4>
                  <p className="text-gray-400 text-sm">Committed to meeting deadlines without compromising on quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#32C9B5] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div>
                  <h4 className="font-semibold mb-1">Ongoing Support</h4>
                  <p className="text-gray-400 text-sm">Post-launch support and maintenance to ensure your project runs smoothly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
            <h4 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h4>
            <p className="text-gray-400 mb-6">
              Let's discuss your requirements and create a solution that drives your business forward.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-4 rounded-xl font-bold text-lg transition-all duration-500 relative overflow-hidden group"
                style={{backgroundColor: '#32C9B5', color: '#000'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(50, 201, 181, 0.4)';
                  e.currentTarget.style.backgroundColor = '#20a89a';
                  const shine = e.currentTarget.querySelector('.shine-effect');
                  if (shine) {
                    shine.style.transform = 'translateX(0)';
                  }
                  const glow = e.currentTarget.querySelector('.glow-effect');
                  if (glow) {
                    glow.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#32C9B5';
                  const shine = e.currentTarget.querySelector('.shine-effect');
                  if (shine) {
                    shine.style.transform = 'translateX(-100%)';
                  }
                  const glow = e.currentTarget.querySelector('.glow-effect');
                  if (glow) {
                    glow.style.opacity = '0';
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get a Free Quote
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Shine effect */}
                <div 
                  className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  style={{
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 2
                  }}
                />
                
                {/* Glow effect */}
                <div 
                  className="glow-effect absolute inset-0 bg-gradient-to-r from-[#32C9B5]/20 to-[#20a89a]/20 blur-md"
                  style={{
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    zIndex: 1
                  }}
                />
                
                {/* Border highlight */}
                <div 
                  className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500"
                  style={{zIndex: 3}}
                />
              </button>
              <button 
                className="blob-btn relative w-full"
                style={{
                  zIndex: 1,
                  position: 'relative',
                  padding: '12px 24px',
                  textAlign: 'center',
                  color: '#32C9B5',
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  border: 'none',
                  transition: 'color 0.5s',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#000000';
                  const after = e.currentTarget.querySelector('.blob-btn-after');
                  if (after) {
                    after.style.transition = 'all 0.3s';
                    after.style.left = '0';
                    after.style.top = '0';
                  }
                  const blobs = e.currentTarget.querySelectorAll('.blob-btn__blob');
                  blobs.forEach(blob => {
                    blob.style.transform = 'translateZ(0) scale(1.4)';
                  });
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#32C9B5';
                  const after = e.currentTarget.querySelector('.blob-btn-after');
                  if (after) {
                    after.style.transition = 'all 0.3s 0.2s';
                    after.style.left = '3px';
                    after.style.top = '3px';
                  }
                  const blobs = e.currentTarget.querySelectorAll('.blob-btn__blob');
                  blobs.forEach(blob => {
                    blob.style.transform = 'translate3d(0,150%,0) scale(1.4)';
                  });
                }}
              >
                View Portfolio
                {/* Border */}
                <div style={{
                  zIndex: 1,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  border: '2px solid #32C9B5',
                  borderRadius: '12px',
                  pointerEvents: 'none'
                }}/>
                {/* After element */}
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
                    borderRadius: '12px',
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
                  borderRadius: '12px',
                  background: '#0D0D0D',
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
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500 text-center">
                Average response time: Less than 24 hours
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
