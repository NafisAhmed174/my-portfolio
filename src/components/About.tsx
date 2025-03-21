
import { useEffect, useRef } from 'react';

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
                  {/* Profile image placeholder - replace with your actual image */}
                  <div className="w-full h-full flex items-center justify-center text-foreground/20 font-light">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <div className="w-full h-full about-animate opacity-0" style={{ animationDelay: '100ms' }}>
                        <img
                          src="/profile.png" // Use the correct path to your image
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

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
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Education</span>
                  <span className="text-xs text-foreground/70">CSE, RUET</span>
                  <span className="text-xs text-foreground/70">CGPA: 3.28/4.00</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 about-animate opacity-0">About Me</span>
            <h2 className="mb-6 about-animate opacity-0" style={{ animationDelay: '100ms' }}>
              I solve complex problems with code and algorithms
            </h2>

            <p className="text-foreground/70 text-lg mb-6 about-animate opacity-0" style={{ animationDelay: '200ms' }}>
              I'm a dedicated competitive programmer with a passion for algorithmic problem-solving.
              Currently pursuing my Bachelor's degree in Computer Science & Engineering at Rajshahi
              University of Engineering & Technology.
            </p>

            <p className="text-foreground/70 text-lg mb-8 about-animate opacity-0" style={{ animationDelay: '300ms' }}>
              I've solved over 2000 algorithmic problems across various online platforms and
              participated in numerous competitive programming contests. My experience has
              honed my analytical thinking and problem-solving skills.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Codeforces', value: 'Candidate Master' },
                { label: 'CodeChef', value: '5 Stars' },
                { label: 'Problems Solved', value: '2000+' },
                { label: 'Onsite Contests', value: '20+' }
              ].map((item, index) => (
                <div key={index} className="about-animate opacity-0" style={{ animationDelay: `${400 + (index * 100)}ms` }}>
                  <div className="text-xl font-medium">{item.value}</div>
                  <div className="text-foreground/60 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="about-animate opacity-0" style={{ animationDelay: '800ms' }}>
              <a href="#contact" className="button-fancy">
                Let's connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
