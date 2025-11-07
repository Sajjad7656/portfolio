import React from 'react'

export default function Home(){
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      {/* Floating Animated Image */}
      <div className="absolute left-1 sm:-left-10 top-1/3 z-0 opacity-20 sm:opacity-30">
        <img 
          src="/pictures/1.avif" 
          alt="Decorative" 
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain animate-rotate-180"
        />
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-center w-full px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              Hi, I'm <span style={{color: '#32C9B5'}}>Sajjad Shahid</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8">
              Full Stack Developer | MERN Stack Specialist
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Building modern web applications with React, Node.js, and MongoDB
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-xl">
              I'm a passionate Software Engineer from NUML, currently working on real-world projects and helping businesses grow online. From front-end magic to powerful backend logic, I craft solutions that perform and impress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <div className="buttons" style={{ textAlign: 'center' }}>
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
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
                View My Work
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
              <div className="buttons" style={{ textAlign: 'center' }}>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
                Contact Me
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
        </div>
        <div className="flex justify-end items-center">
          <div className="relative">
            <img 
              src="/pictures/6.avif" 
              alt="Sajjad Shahid - Full Stack Developer" 
              className="object-cover transition-all duration-300 cursor-pointer"
              style={{
                '--s': '450px',
                '--b': '8px',
                '--g': '14px',
                '--c': '#4ECDC4',
                width: 'var(--s)',
                aspectRatio: '1',
                outline: 'calc(var(--s)/2) solid rgba(0, 0, 0, 0.08)',
                outlineOffset: 'calc(var(--s)/-2)',
                borderRadius: '50%'
              }}
              onMouseEnter={(e) => {
                e.target.style.outline = 'var(--b) solid var(--c)'
                e.target.style.outlineOffset = 'var(--g)'
              }}
              onMouseLeave={(e) => {
                e.target.style.outline = 'calc(var(--s)/2) solid rgba(0, 0, 0, 0.08)'
                e.target.style.outlineOffset = 'calc(var(--s)/-2)'
              }}
            />
           
          </div>
        </div>
      </div>
    </section>
    
    {/* SVG Filter for Gooey Effect */}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
    </>
  )
}