function FooterBottom() {
    const policyLinks = [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" }
    ];
  
    return (
      <div className="border-t border-slate-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 Pizza Top. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            {policyLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default FooterBottom;
  