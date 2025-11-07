import React from 'react'

const projects = [
  {
    title: 'Blaster News',
    desc: 'A modern news web app that brings real-time global headlines through integrated APIs.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'News API'],
    link: 'https://blaster.news/',
    github: '#',
    image: '/pictures/7.avif'
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    link: '#',
    github: '#',
    image: '/projects/taskapp.jpg'
  },
  {
    title: 'Weather Dashboard',
    desc: 'Modern weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
    tech: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
    link: '#',
    github: '#',
    image: '/projects/weather.jpg'
  },
  {
    title: 'Social Media Analytics',
    desc: 'Analytics dashboard for social media performance tracking with data visualization and reporting capabilities.',
    tech: ['React', 'Python', 'PostgreSQL', 'D3.js'],
    link: '#',
    github: '#',
    image: '/projects/analytics.jpg'
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio with dynamic content management, blog functionality, and optimized performance.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel', 'Framer Motion'],
    link: '#',
    github: '#',
    image: '/projects/portfolio.jpg'
  },
  {
    title: 'Real Estate Platform',
    desc: 'Property listing platform with advanced search filters, virtual tours, and agent-client communication system.',
    tech: ['Vue.js', 'Express', 'MySQL', 'Mapbox API'],
    link: '#',
    github: '#',
    image: '/projects/realestate.jpg'
  }
]

export default function Projects(){
  return (
    <section id="projects" className=" pt-20 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Let's Work Together Section */}
       
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span style={{color: '#32C9B5'}}>Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my recent work and see how I turn ideas into functional, beautiful web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-[#32C9B5]/40 transition-all duration-600 hover:shadow-2xl hover:shadow-[#32C9B5]/25 hover:-translate-y-2 hover:scale-[1.02] hover:rotate-x-1"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 transition-all duration-600 group-hover:from-black/80 group-hover:via-black/10"></div>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-800 ease-out group-hover:scale-115 group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-110"
                  />
                )}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#32C9B5]/80 to-[#20a89a]/80 flex items-center justify-center backdrop-blur-sm border border-[#32C9B5]/30 group-hover:scale-110 group-hover:rotate-180 transition-all duration-600">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Project number with enhanced effect */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white z-20 backdrop-blur-md border-2 border-white/20 transition-all duration-600 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-[#32C9B5]/30" 
                     style={{backgroundColor: 'rgba(50, 201, 181, 0.9)'}}>
                  {index + 1}
                </div>
                
                {/* Sliding info panel */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full transition-transform duration-600 group-hover:translate-y-0 z-15">
                </div>
                
                {/* Animated grid overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/10 via-transparent to-[#20a89a]/10"></div>
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(50, 201, 181, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 201, 181, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative">
                {/* Glass morphism background effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#32C9B5] transition-all duration-400 group-hover:scale-105 group-hover:tracking-wide transform origin-left relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-400 relative z-10">
                  {project.desc}
                </p>
                
                {/* Technologies with enhanced effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/60 text-gray-300 border border-gray-700/50 backdrop-blur-sm group-hover:bg-[#32C9B5]/20 group-hover:text-[#32C9B5] group-hover:border-[#32C9B5]/40 group-hover:shadow-md group-hover:shadow-[#32C9B5]/20 transition-all duration-400 group-hover:scale-110 relative z-10"
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 relative z-10">
                  <a 
                    href={project.link} 
                    className="flex-1 px-4 py-2.5 rounded-lg text-center font-medium transition-all relative overflow-hidden group/btn"
                    style={{
                      backgroundColor: 'rgba(50, 201, 181, 0.9)', 
                      color: '#000',
                      zIndex: 1,
                      transform: 'translateZ(0)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(50, 201, 181, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(50, 201, 181, 1)';
                      const icon = e.currentTarget.querySelector('.demo-icon');
                      if (icon) {
                        icon.style.transform = 'translateX(4px) rotateY(360deg)';
                      }
                      const shine = e.currentTarget.querySelector('.shine-effect');
                      if (shine) {
                        shine.style.transform = 'translateX(0)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(50, 201, 181, 0.9)';
                      const icon = e.currentTarget.querySelector('.demo-icon');
                      if (icon) {
                        icon.style.transform = 'translateX(0) rotateY(0)';
                      }
                      const shine = e.currentTarget.querySelector('.shine-effect');
                      if (shine) {
                        shine.style.transform = 'translateX(-100%)';
                      }
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Live Demo
                      <svg 
                        className="demo-icon w-4 h-4 transition-all duration-500" 
                        style={{transform: 'translateX(0) rotateY(0)', transformStyle: 'preserve-3d'}}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    {/* Enhanced shine effect */}
                    <div 
                      className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 2
                      }}
                    />
                    {/* Hover overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      style={{zIndex: 1}}
                    />
                  </a>
                  <a 
                    href={project.github}
                    className="blob-btn relative flex-1 text-center font-medium"
                    style={{
                      zIndex: 1,
                      position: 'relative',
                      padding: '10px 16px',
                      textAlign: 'center',
                      color: '#32C9B5',
                      fontSize: '14px',
                      fontWeight: '500',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      border: 'none',
                      transition: 'color 0.6s',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      display: 'block',
                      backdropFilter: 'blur(10px)'
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
                    GitHub
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
                          transition: 'transform 0.55s 0.12s',
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
                          transition: 'transform 0.55s 0.24s',
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
                          transition: 'transform 0.55s 0.36s',
                          left: '90%'
                        }}/>
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Unique hover effects for projects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#32C9B5]/8 via-transparent to-[#20a89a]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"></div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#32C9B5]/20 transition-all duration-600 pointer-events-none"></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-8 left-8 w-1 h-1 bg-[#32C9B5]/0 rounded-full group-hover:bg-[#32C9B5]/60 group-hover:animate-ping transition-all duration-800"></div>
              <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-[#20a89a]/0 rounded-full group-hover:bg-[#20a89a]/50 group-hover:animate-pulse transition-all duration-1000"></div>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none transform -skew-y-6"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button 
            className="blob-btn relative"
            style={{
              zIndex: 1,
              position: 'relative',
              padding: '15px 40px',
              textAlign: 'center',
              color: '#32C9B5',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              transition: 'color 0.5s',
              cursor: 'pointer',
              borderRadius: '30px'
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
            View All Projects
            {/* Border */}
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
      </div>
    </section>
  )
}