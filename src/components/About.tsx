
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.about-animate').forEach((el) => {
            el.classList.add('animate-slide-in');
          });
        }
      },
      { threshold: 0.2 }
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

  return (
    <section id="about" ref={sectionRef} className="section-padding px-6 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-secondary/50 about-animate opacity-0" style={{ animationDelay: '100ms' }}>
                  {/* Replace with your profile image */}
                  <div className="w-full h-full flex items-center justify-center text-foreground/20 font-light">
                    Profile Image
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 about-animate opacity-0 glass rounded-xl p-4 shadow-sm" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#17C964]"></div>
                  <span className="text-sm text-foreground/80">Available for work</span>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 about-animate opacity-0 glass rounded-xl p-4 shadow-sm" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#F31260]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#F5A524]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#17C964]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 about-animate opacity-0">About Me</span>
            <h2 className="mb-6 about-animate opacity-0" style={{ animationDelay: '100ms' }}>
              I bring ideas to life through design and code
            </h2>
            
            <p className="text-foreground/70 text-lg mb-6 about-animate opacity-0" style={{ animationDelay: '200ms' }}>
              Hello! I'm a passionate designer and developer dedicated to creating 
              exceptional digital experiences. I believe in the power of clean, 
              thoughtful design and efficient, purpose-driven development.
            </p>
            
            <p className="text-foreground/70 text-lg mb-8 about-animate opacity-0" style={{ animationDelay: '300ms' }}>
              My approach combines aesthetic sensibility with technical expertise, 
              ensuring projects not only look beautiful but function flawlessly.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'UX/UI Design', value: '5+ years' },
                { label: 'Development', value: '4+ years' },
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '30+' }
              ].map((item, index) => (
                <div key={index} className="about-animate opacity-0" style={{ animationDelay: `${400 + (index * 100)}ms` }}>
                  <div className="text-2xl font-medium">{item.value}</div>
                  <div className="text-foreground/60 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="about-animate opacity-0" style={{ animationDelay: '800ms' }}>
              <a href="#contact" className="button-fancy">
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
