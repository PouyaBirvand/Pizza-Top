function SocialLinks() {
    const socialIcons = [
      { src: "https://cdn.lordicon.com/iqagrlso.json", href: "#" },
      { src: "https://cdn.lordicon.com/ewswvzmw.json", href: "#" },
      { src: "https://cdn.lordicon.com/kthelypq.json", href: "#" }
    ];
  
    return (
      <div className="flex space-x-4">
        {socialIcons.map((icon, index) => (
          <a 
            key={index}
            href={icon.href} 
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
          >
            <lord-icon
              src={icon.src}
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        ))}
      </div>
    );
  }
  
  export default SocialLinks;
  