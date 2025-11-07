import React from 'react'

export default function Skills(){
  const services = [
    'Technology Strategy',
    'Business Solutions',
    'Analytics & Reporting',
    'Cloud Solutions',
    'IT Consulting',
    'Technology Strategy',
    'Business Solutions'
  ]

  const skills = {
    frontend: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'HTML5 / CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'JavaScript (ES6+)', icon: '📜' },
      { name: 'Next.js', icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'MongoDB / Mongoose', icon: '🍃' }
    ],
    other: [
      { name: 'Git & GitHub', icon: '📦' },
      { name: 'Deployment (Vercel, Netlify)', icon: '🚀' },
      { name: 'Stripe Integration', icon: '💳' },
      { name: 'API Integration', icon: '🔗' },
      { name: 'QA Testing Systems', icon: '✅' }
    ],
    soft: [
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Communication', icon: '💬' },
      { name: 'Creativity', icon: '💡' },
      { name: 'Team Collaboration', icon: '🤝' }
    ]
  }

  return (
    <section id="skills" className="relative py-20">
      {/* Hero Section */}
      <div className="relative min-h-[25vh] flex items-center justify-center px-6 mb-12">
        {/* Floating Animated Image */}
        <div className="absolute left-4 sm:left-8 md:left-12 lg:-left-10 top-1/2 -translate-y-1/2 z-0 opacity-20 sm:opacity-30">
          <img 
            src="/pictures/3.avif" 
            alt="Decorative" 
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain animate-rotate-180"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 relative group">
            <span className="relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#32C9B5] hover:drop-shadow-lg hover:drop-shadow-[#32C9B5]/50">My</span>{' '}
            <span className="font-bold text-[#32C9B5] relative inline-block transition-all duration-500 hover:scale-110 hover:text-[#20a89a] hover:drop-shadow-lg hover:drop-shadow-[#20a89a]/50">Skills</span>
            
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

      {/* Skills Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Frontend Skills */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{backgroundColor: '#32C9B5'}}>
              💻
            </div>
            <h2 className="text-3xl font-bold text-white">Frontend</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.frontend.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#32C9B5] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                style={{perspective: '1000px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(50, 201, 181, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-4">
                  <div className="text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg">
                    {skill.icon}
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5', transform: 'scale(1.2)'}}>
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="relative z-10 text-base font-semibold text-gray-300 group-hover:text-[#32C9B5] transition-colors duration-500 group-hover:translate-y-1">
                  {skill.name}
                </h3>
                
                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-bl-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{backgroundColor: '#32C9B5'}}>
              ⚙️
            </div>
            <h2 className="text-3xl font-bold text-white">Backend</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.backend.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#32C9B5] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                style={{perspective: '1000px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(50, 201, 181, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-4">
                  <div className="text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg">
                    {skill.icon}
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5', transform: 'scale(1.2)'}}>
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="relative z-10 text-base font-semibold text-gray-300 group-hover:text-[#32C9B5] transition-colors duration-500 group-hover:translate-y-1">
                  {skill.name}
                </h3>
                
                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-bl-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{backgroundColor: '#32C9B5'}}>
              🛠️
            </div>
            <h2 className="text-3xl font-bold text-white">Other Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.other.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#32C9B5] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                style={{perspective: '1000px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(50, 201, 181, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-4">
                  <div className="text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg">
                    {skill.icon}
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5', transform: 'scale(1.2)'}}>
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="relative z-10 text-base font-semibold text-gray-300 group-hover:text-[#32C9B5] transition-colors duration-500 group-hover:translate-y-1">
                  {skill.name}
                </h3>
                
                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-bl-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{backgroundColor: '#32C9B5'}}>
              🌟
            </div>
            <h2 className="text-3xl font-bold text-white">Soft Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.soft.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#32C9B5] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                style={{perspective: '1000px'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(50, 201, 181, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32C9B5]/5 via-transparent to-[#32C9B5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-4">
                  <div className="text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg">
                    {skill.icon}
                  </div>
                  {/* Icon glow */}
                  <div className="absolute inset-0 text-4xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{color: '#32C9B5', transform: 'scale(1.2)'}}>
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="relative z-10 text-base font-semibold text-gray-300 group-hover:text-[#32C9B5] transition-colors duration-500 group-hover:translate-y-1">
                  {skill.name}
                </h3>
                
                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#32C9B5]/0 group-hover:border-[#32C9B5]/60 transition-all duration-500 rounded-bl-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative text-center mt-20">
          {/* Floating Animated Image - Right Side */}
          <div className="absolute -right-12 sm:-right-10 md:-right-8 lg:-right-15 top-2/3 -translate-y-1/2 z-0 opacity-20 sm:opacity-30">
            <img 
              src="/pictures/4.avif" 
              alt="Decorative" 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-rotate-90"
            />
          </div>
 <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8">
            Ready to bring your ideas to life?
          </h2>
          <button 
            className="blob-btn relative"
            style={{
              zIndex: 1,
              position: 'relative',
              padding: '15px 40px',
              textAlign: 'center',
              color: '#32C9B5',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              transition: 'color 0.5s',
              cursor: 'pointer',
              borderRadius: '30px'
            }}
            onMouseEnter={(e) => {
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
            }}
            onMouseLeave={(e) => {
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
            }}
          >
            Let's Work Together
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
      </div>
    </section>
  )
}
