import React, { useEffect, useState } from 'react'

export default function About(){
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])
  const services = [
    'Technology Strategy',
    'Business Solutions',
    'Analytics & Reporting',
    'Cloud Solutions',
    'IT Consulting',
    'Technology Strategy',
    'Business Solutions'
  ]

  return (
    <section id="about" className="relative pt-4 sm:pt-8 pb-0 overflow-x-hidden">
      {/* Floating Animated Image */}
      <div className="absolute right-4 sm:right-8 md:-right-3 top-1/3 z-0 opacity-20 sm:opacity-30">
        <img 
          src="/pictures/2.avif" 
          alt="Decorative" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-rotate-180"
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[10vh] sm:min-h-[12vh] flex items-center justify-center px-4 sm:px-6">
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light transition-all duration-1000 relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#32C9B5] hover:drop-shadow-lg hover:drop-shadow-[#32C9B5]/50">About</span>{' '}
            <span className="font-bold text-[#32C9B5] relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#20a89a] hover:drop-shadow-lg hover:drop-shadow-[#20a89a]/50">Me</span>
            
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#32C9B5] to-[#20a89a] transition-all duration-700 group-hover:w-full rounded-full"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#32C9B5]/10 via-transparent to-[#20a89a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-[#32C9B5]/0 rounded-full transition-all duration-1000 group-hover:bg-[#32C9B5]/60 group-hover:animate-ping"></div>
            <div className="absolute -top-2 -right-6 w-1 h-1 bg-[#20a89a]/0 rounded-full transition-all duration-1200 group-hover:bg-[#20a89a]/50 group-hover:animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/4 w-1.5 h-1.5 bg-[#32C9B5]/0 rounded-full transition-all duration-900 group-hover:bg-[#32C9B5]/40 group-hover:animate-bounce"></div>
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6">
            I'm <span className="font-semibold text-white">Sajjad Shahid</span>, a creative and forward-thinking Software Engineer specializing in <span style={{color: '#32C9B5'}}>Full Stack Web Development</span>.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            I love exploring how technology can simplify everyday challenges and transform ideas into digital realities.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            With a strong foundation in <span className="font-semibold text-white">JavaScript, React, Node.js, and MongoDB</span>, I aim to build products that don't just work — they <span style={{color: '#32C9B5'}}>wow</span>.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 -mt-8">
          {/* Education Section */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800/50 hover:border-[#32C9B5]/60 transition-all duration-500 overflow-hidden"
               style={{perspective: '1000px'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-8px) rotateX(2deg)';
                 e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(50, 201, 181, 0.2)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                 e.currentTarget.style.boxShadow = 'none';
               }}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            
            {/* Glowing orb effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#32C9B5]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <span className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🎓</span>
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5'}}>🎓</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#32C9B5] transition-colors duration-300">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Bachelor's in Software Engineering</h4>
                  <div className="h-px bg-gradient-to-r from-[#32C9B5] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="relative pl-4 border-l-2 border-gray-700 group-hover:border-[#32C9B5]/50 transition-colors duration-300">
                  <p className="text-gray-300 text-base font-medium leading-relaxed mb-1 group-hover:text-white transition-colors duration-300">
                    National University of Modern Languages (NUML)
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="w-2 h-2 bg-[#32C9B5] rounded-full animate-pulse"></span>
                    <span className="group-hover:text-gray-400 transition-colors duration-300">Currently in 7th semester</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Exploring advanced topics in <span className="font-semibold text-white group-hover:text-[#32C9B5] transition-colors duration-300">system design</span>, <span className="font-semibold text-white group-hover:text-[#32C9B5] transition-colors duration-300">AI</span>, and <span className="font-semibold text-white group-hover:text-[#32C9B5] transition-colors duration-300">scalable web architecture</span>.
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
            </div>
          </div>

          {/* Professional Goals Section */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800/50 hover:border-[#32C9B5]/60 transition-all duration-500 overflow-hidden"
               style={{perspective: '1000px'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-8px) rotateX(2deg)';
                 e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(50, 201, 181, 0.2)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                 e.currentTarget.style.boxShadow = 'none';
               }}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            
            {/* Glowing orb effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#32C9B5]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <span className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">🚀</span>
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5'}}>🚀</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#32C9B5] transition-colors duration-300">Professional Goals</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative group/item">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#32C9B5]/20 border-2 border-[#32C9B5]/50 flex items-center justify-center mt-1 group-hover/item:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#32C9B5] animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        My mission is to <span className="font-semibold text-white group-hover:text-[#32C9B5] transition-colors duration-300">innovate with code</span> — to design and develop experiences that connect people and purpose.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group/item">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#32C9B5]/20 border-2 border-[#32C9B5]/50 flex items-center justify-center mt-1 group-hover/item:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#32C9B5] animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        Building my brand <span className="font-bold bg-gradient-to-r from-[#32C9B5] to-[#20a89a] bg-clip-text text-transparent">"Sajjad Innovates with Code"</span>, a vision to help businesses, startups, and creators go digital in a smarter way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}