
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.contact-animate').forEach((el) => {
            el.classList.add('animate-blur-in');
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

  return (
    <section id="contact" ref={sectionRef} className="section-padding px-6 relative">
      <div className="container mx-auto">
        <div className="glass gradient-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 contact-animate opacity-0">Contact</span>
              <h2 className="mb-4 contact-animate opacity-0" style={{ animationDelay: '100ms' }}>
                Let's connect
              </h2>
              <p className="text-foreground/70 text-lg mb-8 contact-animate opacity-0" style={{ animationDelay: '200ms' }}>
                I'm interested in software development opportunities, competitive programming collaborations,
                and interesting projects. Feel free to reach out!
              </p>
              
              <div className="space-y-6 contact-animate opacity-0" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Phone</div>
                    <a href="tel:+8801902311989" className="hover:text-primary">+880 1902311989</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Email</div>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:nafisahmed947@gmail.com" className="hover:text-primary">nafisahmed947@gmail.com</a>
                      <a href="mailto:2003174@student.ruet.ac.bd" className="hover:text-primary">2003174@student.ruet.ac.bd</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Location</div>
                    <div>Rajshahi, Bangladesh</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 contact-animate opacity-0" style={{ animationDelay: '400ms' }}>
                <div className="uppercase text-sm tracking-widest opacity-60 mb-4">Find Me Online</div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/NafisAhmed174" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary/20"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github size={20} className="opacity-70" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nafis-ahmed-220757275/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary/20"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin size={20} className="opacity-70" />
                  </a>
                  <a 
                    href="https://codeforces.com/profile/Nafis_Ahmed_174" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary/20"
                  >
                    <span className="sr-only">Codeforces</span>
                    <div className="text-xs font-bold opacity-70">CF</div>
                  </a>
                  <a 
                    href="https://www.codechef.com/users/hacker174" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary/20"
                  >
                    <span className="sr-only">CodeChef</span>
                    <div className="text-xs font-bold opacity-70">CC</div>
                  </a>
                  <a 
                    href="https://www.stopstalk.com/user/profile/Nafis_Ahmed_174" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary/20"
                  >
                    <span className="sr-only">StopStalk</span>
                    <ExternalLink size={18} className="opacity-70" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16 bg-secondary/20">
              <h3 className="text-xl font-medium mb-6 contact-animate opacity-0" style={{ animationDelay: '200ms' }}>
                Send a Message
              </h3>
              
              <form className="space-y-4">
                <div className="contact-animate opacity-0" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="name" className="block text-sm mb-2 opacity-70">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="contact-animate opacity-0" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="email" className="block text-sm mb-2 opacity-70">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="contact-animate opacity-0" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="message" className="block text-sm mb-2 opacity-70">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all resize-none"
                    placeholder="Hello, I'd like to discuss..."
                  ></textarea>
                </div>
                
                <div className="contact-animate opacity-0" style={{ animationDelay: '600ms' }}>
                  <button 
                    type="submit" 
                    className="button-fancy w-full justify-center"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
