import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
      title: "E-Commerce Platform for Small Businesses",
      category: "Web Development",
      description: "A 3rd-year academic project that develops a user-friendly e-commerce platform for small businesses. Features include secure user authentication, product management, shopping cart and checkout, and responsive design.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/NafisAhmed174/CSE-3100-Project",
      live: null,
      status: "Complete",
      image: "/project.png"
    },
    {
      title: "Problem Solving Repository",
      category: "Competitive Programming",
      description: "A collection of solutions to algorithmic problems from various competitive programming platforms including Codeforces, CodeChef, and others.",
      technologies: ["C++", "Algorithms", "Data Structures"],
      github: "https://github.com/NafisAhmed174",
      live: null,
      status: "Ongoing",
      image: null
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
            Projects
          </h2>
          <p className="text-foreground/70 text-lg project-animate opacity-0" style={{ animationDelay: '200ms' }}>
            Here are some of the projects I've been working on, showcasing my skills in web development and problem solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card project-animate opacity-0 overflow-visible"
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/20 font-light">
                    Project Image
                  </div>
                )}
                {project.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                    {project.status}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full">{project.category}</span>
                </div>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 bg-secondary/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 project-animate opacity-0" style={{ animationDelay: '1000ms' }}>
          <p className="text-foreground/70 mb-4">
            I'm always working on new projects and improving my skills.
          </p>
          <a 
            href="https://github.com/NafisAhmed174" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-fancy"
          >
            <Github size={18} className="mr-2" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
