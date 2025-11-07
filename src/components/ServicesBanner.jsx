import React from 'react'

export default function ServicesBanner() {
  const services = [
    'Design That Inspires',
    'Development That Performs',
    'Delivery That Impresses',
    'Support That Lasts',
  ]

  return (
    <div className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] mt-16 sm:mt-20 md:mt-24 overflow-hidden">
      {/* Top Banner - Moving Right - Positioned to cross in middle */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-[200%] sm:w-[150%] transform -rotate-6 py-6 sm:py-8 md:py-10 px-4 sm:px-8 overflow-hidden" style={{backgroundColor: '#32C9B5'}}>
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                {services.map((service, idx) => (
                  <React.Fragment key={`${i}-${idx}`}>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black px-4 sm:px-6 md:px-8">
                      {service}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl text-black px-2 sm:px-3 md:px-4">✦</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner - Moving Left - Positioned to cross in middle */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-[200%] sm:w-[150%] transform rotate-6 py-6 sm:py-8 md:py-10 px-4 sm:px-8 overflow-hidden" style={{backgroundColor: '#32C9B5'}}>
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                {services.map((service, idx) => (
                  <React.Fragment key={`${i}-${idx}`}>
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black px-4 sm:px-6 md:px-8">
                      {service}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl text-black px-2 sm:px-3 md:px-4">✦</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
