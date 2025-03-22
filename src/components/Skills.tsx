import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skills-animate').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, i * 50);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "MERN Stack"]
    },
    {
      title: "Problem Solving",
      skills: ["Data Structures", "Algorithms", "Competitive Programming", "Dynamic Programming", "Graph Algorithms", "String Algorithms"]
    },
    {
      title: "Coursework",
      skills: ["Structured Programming", "Object Oriented Programming", "Data Structures", "Algorithm Analysis and Design", "Database Systems", "Operating Systems"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding px-6 relative">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center right, rgba(var(--primary), 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 skills-animate opacity-0">Expertise</span>
          <h2 className="mb-4 skills-animate opacity-0">Technical Skills</h2>
          <p className="text-foreground/70 text-lg skills-animate opacity-0">
            I've developed a diverse set of skills through academic coursework, personal projects, and competitive programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skills-animate opacity-0 p-6 rounded-xl gradient-border border border-border/50 bg-card/30"
            >
              <h3 className="text-xl font-medium mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge skills-animate opacity-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center skills-animate opacity-0">
          <p className="text-foreground/70 mb-4">
            I've solved over <span className="font-medium text-primary text-lg">2000+</span> algorithmic problems on platforms like Codeforces, CodeChef, and others.
          </p>
          <a 
            href="https://www.stopstalk.com/user/profile/Nafis_Ahmed_174" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-fancy"
          >
            View Problem Solving Profiles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
