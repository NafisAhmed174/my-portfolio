
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#top" className="text-xl font-medium tracking-tighter gradient-text">
              Nafis Ahmed
            </a>
          </div>
          
          <div className="mb-4 md:mb-0 flex items-center">
            <a 
              href="/Nafis_Ahmed_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
          
          <div className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Nafis Ahmed. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a 
              href="mailto:nafisahmed947@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/NafisAhmed174" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nafis-ahmed-220757275/" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="tel:+8801902311989" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
