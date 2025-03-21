
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top right, rgba(230, 230, 230, 0.2) 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-3 opacity-0 animate-slide-in">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6 opacity-0 animate-slide-in animate-delay-100">
            Creating thoughtful user experiences with 
            <span className="relative inline-block">
              <span className="relative z-10">precise design</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 transform skew-x-12"></span>
            </span>
          </h1>
          
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-slide-in animate-delay-200">
            I craft digital experiences that strike the perfect balance between 
            beautiful design and thoughtful functionality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-in animate-delay-300">
            <a href="#work" className="button-fancy">
              View My Work
            </a>
            <a href="#contact" className="button-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-800">
        <div className="animate-float">
          <svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="42" rx="11" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
            <circle cx="12" cy="12" r="6" fill="currentColor" fillOpacity="0.3" className="animate-slide-in opacity-0"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
