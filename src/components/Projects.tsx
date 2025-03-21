
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.project-animate').forEach((el) => {
            el.classList.add('animate-scale-in');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Minimal E-commerce Platform",
      category: "Web Design",
      description: "A clean, intuitive shopping experience focused on visual hierarchy and user experience"
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX",
      description: "Complex data visualization simplified through thoughtful information architecture"
    },
    {
      title: "Portfolio Template",
      category: "Development",
      description: "A developer-friendly, customizable portfolio system built with modern technologies"
    },
    {
      title: "Mobile App Design System",
      category: "Design System",
      description: "Comprehensive component library ensuring consistent user experience across platforms"
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      description: "Streamlined reservation process with real-time availability and notifications"
    },
    {
      title: "Photography Showcase",
      category: "Web Design",
      description: "Visually striking portfolio highlighting artistic photography with minimal interference"
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="section-padding px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(230, 230, 230, 0.3) 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 project-animate opacity-0">My Work</span>
          <h2 className="mb-4 project-animate opacity-0" style={{ animationDelay: '100ms' }}>
            Selected Projects
          </h2>
          <p className="text-foreground/70 text-lg project-animate opacity-0" style={{ animationDelay: '200ms' }}>
            A curated collection of my work across various domains,
            each project reflecting my commitment to excellence and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card project-animate opacity-0"
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-foreground/20 font-light">
                  Project Image
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-6">
                  <button className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full">{project.category}</span>
                </div>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 project-animate opacity-0" style={{ animationDelay: '1000ms' }}>
          <a href="#contact" className="button-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
