
import { useEffect, useRef } from 'react';
import { ExternalLink, Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.achievement-animate').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-scale-in');
            }, i * 100);
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

  const competitiveAchievements = [
    {
      title: "ICPC Asia Dhaka Regional Contest 2024",
      position: "11th Place",
      url: "https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings",
      icon: <Trophy className="text-yellow-500" size={20} />
    },
    {
      title: "BUET Inter University Programming Contest 2024",
      position: "6th Place",
      url: "https://toph.co/c/inter-university-buet-cse-fest-2024/standings",
      icon: <Trophy className="text-amber-500" size={20} />
    },
    {
      title: "IUT Inter University Programming Contest 2024",
      position: "8th Place",
      url: "https://toph.co/c/iut-11th-national-ict-fest-2024/standings",
      icon: <Trophy className="text-amber-500" size={20} />
    },
    {
      title: "UIU Inter University Programming Contest 2025",
      position: "11th Place",
      url: "https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings",
      icon: <Trophy className="text-yellow-500" size={20} />
    },
    {
      title: "Honorable mention in The 2022 ICPC Asia West Continent Final Contest",
      position: "",
      url: "https://drive.google.com/file/d/1AiPMXPHqD_7BD0nsCXX9r9qbB_gqIo8-/view?usp=sharing",
      icon: <Award className="text-blue-500" size={20} />
    },
    {
      title: "Codeforces",
      position: "Max Rating: 1910 (Candidate Master)",
      url: "https://codeforces.com/profile/Nafis_Ahmed_174",
      icon: <Star className="text-purple-500" size={20} />
    },
    {
      title: "CodeChef",
      position: "Max Rating: 2107 (5 Stars)",
      url: "https://www.codechef.com/users/hacker174",
      icon: <Star className="text-red-500" size={20} />
    },
    {
      title: "Meta Hacker Cup 2023",
      position: "Top 7% out of 20K participants",
      url: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/484429990219579",
      icon: <Award className="text-blue-500" size={20} />
    }
  ];

  return (
    <section id="achievements" ref={sectionRef} className="section-padding px-6 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 achievement-animate opacity-0">Accomplishments</span>
          <h2 className="mb-4 achievement-animate opacity-0" style={{ animationDelay: '100ms' }}>
            Competitive Programming Achievements
          </h2>
          <p className="text-foreground/70 text-lg achievement-animate opacity-0" style={{ animationDelay: '200ms' }}>
            I've participated in numerous competitive programming contests and achieved significant results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitiveAchievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card achievement-animate opacity-0 hover:-translate-y-1"
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{achievement.title}</h3>
                  {achievement.position && (
                    <p className="text-foreground/70 text-sm mb-2">{achievement.position}</p>
                  )}
                  <a 
                    href={achievement.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-primary hover:underline"
                  >
                    View Certificate/Standings <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center achievement-animate opacity-0" style={{ animationDelay: '1200ms' }}>
          <p className="text-foreground/70 mb-4">
            I'm constantly participating in competitive programming contests to improve my skills.
          </p>
          <a 
            href="https://icpc.global/ICPCID/AEBLMBK4GAGM" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline"
          >
            View ICPC Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
