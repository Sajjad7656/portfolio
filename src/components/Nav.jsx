import React, { useState, useEffect } from 'react'

const Nav = ()=>{
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const scrollTo = (id)=> {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4 pl-0 sm:pl-2">
          <div className="relative group flex items-center">
            {/* Professional SVG Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl bg-transparent">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer ring with gradient */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#32C9B5'}} />
                    <stop offset="100%" style={{stopColor: '#20a89a'}} />
                  </linearGradient>
                </defs>
                
                {/* Background circle ring */}
                <circle 
                  cx="24" 
                  cy="24" 
                  r="22" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="2"
                  opacity="0.8"
                />
                
                {/* Inner decorative circle */}
                <circle 
                  cx="24" 
                  cy="24" 
                  r="18" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="1"
                  opacity="0.4"
                />
                
                {/* SS Letters - Professional styling */}
                <text 
                  x="24" 
                  y="30" 
                  font-family="Arial, sans-serif" 
                  font-size="16" 
                  font-weight="bold" 
                  text-anchor="middle" 
                  fill="white"
                  style={{ letterSpacing: '1px' }}
                >
                  SS
                </text>
                
                {/* Top accent dot */}
                <circle 
                  cx="24" 
                  cy="10" 
                  r="2" 
                  fill="url(#logoGradient)"
                  className="animate-pulse"
                />
                
                {/* Bottom accent dots */}
                <circle 
                  cx="18" 
                  cy="38" 
                  r="1.5" 
                  fill="url(#logoGradient)"
                  opacity="0.7"
                />
                <circle 
                  cx="30" 
                  cy="38" 
                  r="1.5" 
                  fill="url(#logoGradient)"
                  opacity="0.7"
                />
              </svg>
            </div>
            
            {/* Sliding Name */}
            <span className="ml-3 font-bold text-base sm:text-lg lg:text-xl tracking-tight text-white/90 opacity-0 max-w-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-w-xs whitespace-nowrap">
              Sajjad Shahid
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-xs lg:text-sm font-medium">
          <button onClick={()=>scrollTo('home')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">Home</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                Main page
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
          <button onClick={()=>scrollTo('about')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">About Us</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                About me
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
          <button onClick={()=>scrollTo('skills')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">Skills</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                My expertise
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
          <button onClick={()=>scrollTo('services')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">Services</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                What I offer
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
          <button onClick={()=>scrollTo('projects')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">Projects</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                My work
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
          <button onClick={()=>scrollTo('contact')} className="nav-link relative px-1 py-1 text-white/90 font-medium transition-all duration-500 group hover:text-[#32C9B5]">
            <span className="relative z-10 tracking-wide">Contact Us</span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32C9B5] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#32C9B5]/0 via-[#32C9B5]/10 to-[#32C9B5]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 bg-gradient-to-br from-gray-900 to-gray-800 text-[#32C9B5] text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-[#32C9B5]/20 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#32C9B5] rounded-full animate-pulse"></div>
                Get in touch
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-900 to-gray-800 rotate-45 border-l border-t border-[#32C9B5]/20"></div>
            </div>
          </button>
        </nav>
        <div className="hidden md:flex items-center gap-4 pr-0 sm:pr-2">
          <style jsx>{`
            .social-icon {
              position: relative;
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              border-radius: 50%;
              background: transparent;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              perspective: 1000px;
            }
            
            .social-icon::before {
              content: '';
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              height: 100%;
              background: #25D366;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              z-index: 1;
            }
            
            .social-icon:hover::before {
              top: 0;
            }
            
            .social-icon svg {
              position: relative;
              z-index: 2;
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform-style: preserve-3d;
            }
            
            .social-icon:hover svg {
              color: white;
              transform: rotateY(360deg);
            }
            
            .social-icon.linkedin::before {
              background: #0077b5;
            }
            
            .social-icon.github::before {
              background: #333;
            }
            
            .social-icon.facebook::before {
              background: #3b5998;
            }
            
            .social-icon.instagram::before {
              background: #D52553;
            }
            
            .social-icon:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            }
          `}</style>
          
          <a href="https://wa.me/923123456789" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 flex items-center justify-center transition-all hover:text-[#32C9B5] hover:scale-110 relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Info Popup Menu */}
      <div className={`fixed top-20 right-4 lg:right-8 w-72 sm:w-80 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl transition-all duration-300 z-50 ${
        isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4">
          {/* Phone Section */}
          <div className="mb-3 pb-3 border-b border-gray-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#32C9B5]/20 to-[#20a89a]/20 flex items-center justify-center mb-2 border border-[#32C9B5]/40">
                <svg className="w-6 h-6 text-[#32C9B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-1">Phone</h3>
              <a href="tel:+923123456789" className="text-[#32C9B5] hover:underline text-sm font-medium">
                +123 456 789
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="mb-3 pb-3 border-b border-gray-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#32C9B5]/20 to-[#20a89a]/20 flex items-center justify-center mb-2 border border-[#32C9B5]/40">
                <svg className="w-6 h-6 text-[#32C9B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-1">Email</h3>
              <a href="mailto:info@domainname.com" className="text-[#32C9B5] hover:underline text-xs font-medium break-all">
                info@domainname.com
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-3 pb-3 border-b border-gray-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#32C9B5]/20 to-[#20a89a]/20 flex items-center justify-center mb-2 border border-[#32C9B5]/40">
                <svg className="w-6 h-6 text-[#32C9B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold mb-1">Address</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                123 Creative Lane London, SW1A 1AA<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-base font-bold text-center mb-2">Stay Connected</h3>
            <div className="flex justify-center gap-2 flex-wrap">
              <a 
                href="https://wa.me/923123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#32C9B5] flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
                title="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#32C9B5] flex items-center justify-center hover:bg-[#3b5998] hover:border-[#3b5998] hover:text-white transition-all duration-300"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#32C9B5] flex items-center justify-center hover:text-white transition-all duration-300"
                title="Instagram"
                style={{
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                  e.currentTarget.style.borderColor = '#bc1888';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = '#32C9B5';
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#32C9B5] flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#32C9B5] flex items-center justify-center hover:bg-[#333] hover:border-[#333] hover:text-white transition-all duration-300"
                title="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay - Click to close */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
          onTouchEnd={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Nav