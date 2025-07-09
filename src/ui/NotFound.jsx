import { Link } from 'react-router-dom';
import Button from './Button';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <lord-icon
          src="https://cdn.lordicon.com/usownftb.json"
          trigger="loop"
          delay="2000"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '120px', height: '120px', margin: '0 auto 32px' }}
        />
        
        <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
          Oops! Page Not Found
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button type="primary">
              <lord-icon
                src="https://cdn.lordicon.com/wmjqgedo.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Go Home
            </Button>
          </Link>
          
          <Link to="/menu">
            <Button type="secondary">
              <lord-icon
                src="https://cdn.lordicon.com/wloilxuq.json"
                trigger="hover"
                colors="primary:#10b981,secondary:#065f46"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
