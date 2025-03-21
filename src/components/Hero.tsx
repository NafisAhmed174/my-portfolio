
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ExternalLink, Download} from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-0 gradient-bg"
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-3 opacity-0 animate-slide-in">
            Computer Science & Engineering
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6 opacity-0 animate-slide-in animate-delay-100">
            Hi, I'm 
            <span className="gradient-text ml-2">Nafis Ahmed</span>
          </h1>
          
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-slide-in animate-delay-200">
            I'm a passionate competitive programmer and aspiring software developer, currently pursuing my Bachelor's degree in Computer Science & Engineering at Rajshahi University of Engineering & Technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 opacity-0 animate-slide-in animate-delay-300 mb-8">
            <a 
              href="https://github.com/NafisAhmed174" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 button-fancy"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nafis-ahmed-220757275/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 button-outline"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="mailto:nafisahmed947@gmail.com" 
              className="flex items-center gap-2 button-outline"
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-in animate-delay-400">
            <div className="flex items-center gap-1 bg-secondary/80 px-4 py-2 rounded-full">
              <span className="font-medium">Codeforces:</span>
              <a 
                href="https://codeforces.com/profile/Nafis_Ahmed_174" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary gap-1 hover:underline"
              >
                1910 (Candidate Master) <ExternalLink size={14} />
              </a>
            </div>
            <div className="flex items-center gap-1 bg-secondary/80 px-4 py-2 rounded-full">
              <span className="font-medium">CodeChef:</span>
              <a 
                href="https://www.codechef.com/users/hacker174" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary gap-1 hover:underline"
              >
                2107 (5 Stars) <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div className="mt-6 mb-8 flex justify-center achievement-animate opacity-0" style={{ animationDelay: '300ms' }}>
            <a 
              href="/Nafis_Ahmed_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-fancy flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-800 cursor-pointer hover:translate-y-1 transition-transform duration-300"
        aria-label="Scroll to next section"
      >
        <div className="animate-float">
          <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="42" rx="11" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
            <circle cx="12" cy="12" r="6" fill="currentColor" fillOpacity="0.3" className="animate-slide-in opacity-0"/>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;
