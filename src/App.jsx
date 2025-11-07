import React from 'react'
import Nav from './components/Nav'
import ServicesBanner from './components/ServicesBanner'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen font-sans relative">
      {/* Global Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10">
        <Nav />
      <main className=" ">
        <Home />
        <ServicesBanner />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-gray-400">© {new Date().getFullYear()} Sajjad Shahid — Built with ❤️</footer>
      </div>
    </div>
  )
}