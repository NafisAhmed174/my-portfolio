
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Trophy, Award, Star, Download, User, Users } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'team' | 'individual'>('team');
  
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
      // Reset animations when switching tabs
      document.querySelectorAll('.achievement-animate').forEach((el) => {
        el.classList.remove('animate-scale-in');
      });
    };
  }, [activeTab]); // 👈 Now it re-runs when switching tabs
  
  
  const teamAchievements = [
    {
      title: "ICPC Asia West Continent Finalist",
      position: "2022 and 2025",
      url: "https://icpc.global/ICPCID/AEBLMBK4GAGM",
      icon: <Award className="text-blue-500" size={20} />
    },
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
      title: "AUST Inter University Programming Contest 2025",
      position: "8th Place",
      url: "https://toph.co/c/mtb-presents-aust-inter-university-2025/standings",
      icon: <Trophy className="text-amber-500" size={20} />
    },
    {
      title: "UIU Inter University Programming Contest 2025",
      position: "11th Place",
      url: "https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings",
      icon: <Trophy className="text-yellow-500" size={20} />
    },
    {
      title: "Breaking Code'23 - Programming Contest by CSE, MBSTU",
      position: "3rd Place",
      url: "https://toph.co/c/mbstu-cse-inter-department-2023/standings",
      icon: <Trophy className="text-amber-600" size={20} />
    },
    {
      title: "CodeSpark 2022 - Intra RUET Freshers' Programming Contest",
      position: "2nd Place",
      url: "https://toph.co/contests/training/qrjlyhg/standings",
      icon: <Trophy className="text-silver-400" size={20} />
    },
    {
      title: "GyanJam 2024 - Intra RUET Programming Contest",
      position: "1st Place",
      url: "https://codeforces.com/spectator/ranklist/facbd55c595686550fba19801debe5f6?fbclid=IwY2xjawJKiWNleHRuA2FlbQIxMAABHR_DhYccfUu9_mOwLqe5YzenqCIZikT5vPDExQyvMpYwgHf3jbVr8hc80w_aem_Yi3njCykb2v5htYPDd6CPg",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
  ];

  const individualAchievements = [
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
    },
    {
      title: "SRBD Code Contest 2024",
      position: "Finalist",
      url: "#",
      icon: <Trophy className="text-yellow-500" size={20} />
    },
    {
      title: "CodeSmash 2021 - Intra RUET Freshers' Programming Contest",
      position: "2nd Place",
      url: "https://codeforces.com/spectator/ranklist/d79d9eb065507b73283afa14aef38398",
      icon: <Trophy className="text-silver-400" size={20} />
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="section-padding px-6 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="uppercase text-sm tracking-widest opacity-60 block mb-2 achievement-animate opacity-0">Accomplishments</span>
          <h2 className="mb-4 achievement-animate opacity-0" style={{ animationDelay: '100ms' }}>
            Competitive Programming Achievements
          </h2>
          <p className="text-foreground/70 text-lg achievement-animate opacity-0" style={{ animationDelay: '200ms' }}>
            I've participated in numerous competitive programming contests and achieved significant results.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 achievement-animate opacity-0" style={{ animationDelay: '400ms' }}>
          <div className="inline-flex rounded-md bg-secondary/50 p-1">
            <Button
              variant="ghost"
              className={cn(
                "rounded-md px-4 py-2 flex items-center gap-2",
                activeTab === 'team' ? "bg-white/90 dark:bg-primary/90 text-black dark:text-white shadow-sm" : "hover:bg-white/20 dark:hover:bg-primary/20"
              )}
              onClick={() => setActiveTab('team')}
            >
              <Users size={16} />
              <span>Team Achievements</span>
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "rounded-md px-4 py-2 flex items-center gap-2",
                activeTab === 'individual' ? "bg-white/90 dark:bg-primary/90 text-black dark:text-white shadow-sm" : "hover:bg-white/20 dark:hover:bg-primary/20"
              )}
              onClick={() => setActiveTab('individual')}
            >
              <User size={16} />
              <span>Individual Achievements</span>
            </Button>
          </div>
        </div>
        
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'team' ? teamAchievements : individualAchievements).map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card achievement-animate opacity-0 hover:-translate-y-1"
              style={{ animationDelay: `${500 + (index * 100)}ms` }}
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
