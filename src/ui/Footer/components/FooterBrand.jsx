import { Link } from 'react-router-dom';

function FooterBrand() {
  return (
    <div className="col-span-1 md:col-span-2">
      <div className="flex items-center space-x-2 mb-4">
        <lord-icon
          src="https://cdn.lordicon.com/wloilxuq.json"
          trigger="hover"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '32px', height: '32px' }}
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          Pizza Top
        </span>
      </div>
      <p className="text-slate-400 mb-6 max-w-md">
        Authentic Italian pizzas crafted with passion and delivered fresh to your door. 
        Experience the taste of Italy with every bite.
      </p>
    </div>
  );
}

export default FooterBrand;
