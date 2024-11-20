import React, { useState, useEffect } from 'react';

const CustomIcon = ({ children }) => (
  <div className="w-12 h-12 mx-auto">
    <svg viewBox="0 0 24 24" className="w-full h-full">
      {children}
    </svg>
  </div>
);

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const services = [
        {
            title: "Custom Software",
            description: "Build tailored software solutions that perfectly align with your business needs.",
            icon: (
              <CustomIcon>
                <path d="M8 3H6v2h2V3zm0 4H6v2h2V7zm0 4H6v2h2v-2zm0 4H6v2h2v-2zm10-2h-8v2h8v-2zm0-4h-8v2h8V9zm0-4h-8v2h8V5zm0-4h-8v2h8V1z" fill="#60A5FA"/>
              </CustomIcon>
            )
        },
        {
            title: "Web Development",
            description: "Create stunning, responsive websites that engage your audience.",
            icon: (
              <CustomIcon>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#10B981"/>
              </CustomIcon>
            )
        },
        {
            title: "IT Consulting",
            description: "Get strategic guidance to optimize your technology investments.",
            icon: (
              <CustomIcon>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="#A78BFA"/>
              </CustomIcon>
            )
        },
        {
            title: "Digital Marketing",
            description: "Boost your online presence and reach your target audience effectively.",
            icon: (
              <CustomIcon>
                <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.71 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" fill="#F87171"/>
              </CustomIcon>
            )
        },
        {
            title: "IT Support",
            description: "Keep your systems running smoothly with our comprehensive IT support.",
            icon: (
              <CustomIcon>
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#FBBF24"/>
              </CustomIcon>
            )
        },
        {
            title: "App Development",
            description: "Transform your ideas into powerful mobile applications.",
            icon: (
              <CustomIcon>
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="#F97316"/>
              </CustomIcon>
            )
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            // Reset current slide when screen size changes
            setCurrentSlide(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const maxSlides = services.length - getVisibleCards();
                return prev >= maxSlides ? 0 : prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [services.length]);

    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 4;
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        return 4; // desktop
    };

    return (
        <div id="Services"className="text-center bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-white tracking-wider">
                    OUR SERVICES
                </h1>
                <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
                    Comprehensive technology solutions to power your business growth
                </p>
                
                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / getVisibleCards())}%)`,
                            }}
                        >
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className="flex-none w-full sm:w-1/2 lg:w-1/4 px-3"
                                >
                                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-gray-600 transition-all h-full">
                                        <div className="mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: services.length - getVisibleCards() + 1 }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-600'
                                } hover:bg-blue-400`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;