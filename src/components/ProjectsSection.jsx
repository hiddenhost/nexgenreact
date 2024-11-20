import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const projects = [
        {
            title: "Deal360",
         //   description: "Full-featured online shopping platform with modern UI/UX",
            image: "src/assets/commerce.jpeg",
            previewLink: "https://deal360.in/",
            //technologies: ["React", "Node.js", "MongoDB", "Stripe"]
        },
        
        {
            title: "Skywings",
         //   description: "Travel booking and tour management platform",
            image: "src/assets/Travel.jpeg",
            previewLink: "https://skywings-khaki.vercel.app/",
            //technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"]
        },
        {
          title: "Grilli",
          //description: "Restaurant showcase with online ordering system",
          image: "src/assets/food.jpg",
          previewLink: "https://yourrestraunt.netlify.app/",
          //technologies: ["React", "Express", "MongoDB"]
        },
        {
          title: "Garbs.in",
         // description: "Full-featured online shopping platform with modern UI/UX",
          image: "src/assets/payment.jpeg",
          previewLink: "https://garbs.in/",
          //technologies: ["React", "Node.js", "MongoDB", "Stripe"]
      },
      {
        title: "Kaizen INC",
        //description: "Corporate website with team collaboration features",
        image: "src/assets/company.jpeg",
        previewLink: "https://www.kaizeninc.org/",
        //technologies: ["React", "Firebase", "Tailwind"]
    },
        {
          title: "Parv's Academy",
          //description: "Educational institution management system",
          image: "src/assets/school.jpeg",
          previewLink: "https://www.theparvsacademy.com/",
          //technologies: ["React", "Node.js", "MySQL"]
      },
        
        
        {
            title: "PropertyDekho",
         //   description: "Property listing and virtual tour platform",
            image: "src/assets/real state.jpeg",
            previewLink: "https://propertydekhoo.netlify.app/",
           // technologies: ["Next.js", "MongoDB", "Google Maps API"]
        },
       
        {
            title: "Hotel Miranda",
         //   description: "Hotel booking and management system",
            image: "src/assets/hotel.png",
            previewLink: "https://hotel-miranda-beta.vercel.app/",
           // technologies: ["Next.js", "Prisma", "PostgreSQL"]
        },
        {
          title: "Desinic",
         // description: "Hotel booking and management system",
          image: "src/assets/company.jpeg",
          previewLink: "https://websitedemogrill.netlify.app/",
         // technologies: ["Next.js", "Prisma", "PostgreSQL"]
      },
        {
            title: "Furniture Shop",
         //   description: "E-commerce platform for furniture retail",
            image: "src/assets/furniture.png",
            previewLink: "https://furniture-shop-lac.vercel.app/",
         //   technologies: ["React", "Shopify", "Tailwind CSS"]
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setCurrentSlide(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const maxSlides = projects.length - getVisibleCards();
                return prev >= maxSlides ? 0 : prev + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 1024) return 2; // tablet
        return 3; // desktop
    };

    const nextSlide = () => {
        const maxSlides = projects.length - getVisibleCards();
        setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const maxSlides = projects.length - getVisibleCards();
        setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
    };

    return (
        <div id="projects" className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-white tracking-wider">
                        OUR PROJECTS
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of successful digital solutions across various industries
                    </p>
                </div>
                
                <div className="relative">
                    {/* Carousel Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 p-3 rounded-full text-white z-10 hover:bg-blue-700 transition-colors hidden lg:block"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 p-3 rounded-full text-white z-10 hover:bg-blue-700 transition-colors hidden lg:block"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / getVisibleCards())}%)`,
                            }}
                        >
                            {projects.map((project, index) => (
                                <div 
                                    key={index}
                                    className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
                                >
                                    <div className="group relative overflow-hidden rounded-xl h-[300px]">
                                        {/* Project Image with Overlay */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70" />
                                        
                                        {/* Project Content Overlay */}
                                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {project.description}
                                                </p>
                                            </div>
                                            
                                            {/* Action Buttons */}
                                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                
                                                <a 
                                                    href={project.previewLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                    Visit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: projects.length - getVisibleCards() + 1 }).map((_, index) => (
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

export default Projects;