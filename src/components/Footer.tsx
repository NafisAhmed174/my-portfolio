
const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#top" className="text-xl font-medium tracking-tighter">
              Portfolio
            </a>
          </div>
          
          <div className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
