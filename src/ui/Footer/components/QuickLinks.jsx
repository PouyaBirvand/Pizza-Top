import { Link } from 'react-router-dom';

function QuickLinks() {
  const links = [
    { to: "/menu", label: "Our Menu" },
    { to: "/about", label: "About Us" },
    { to: "/reviews", label: "Reviews" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <lord-icon
          src="https://cdn.lordicon.com/oqdmuxru.json"
          trigger="hover"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        Quick Links
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link 
              to={link.to} 
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
