import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <lord-icon
            src="https://cdn.lordicon.com/akqsdstj.json"
            trigger="loop"
            delay="2000"
            colors="primary:#ef4444,secondary:#dc2626"
            style={{ width: '120px', height: '120px', margin: '0 auto' }}
          />
        </div>
        
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Something went wrong 😢
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
          {error?.data || error?.message || 'An unexpected error occurred'}
        </p>
        
        <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">
          Don't worry, our team has been notified and we're working on it!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="-1">
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              colors="primary:#10b981,secondary:#065f46"
              style={{ width: '20px', height: '20px', marginRight: '8px' }}
            />
            Go Back
          </LinkButton>
          
          <LinkButton to="/">
            <lord-icon
              src="https://cdn.lordicon.com/cnpvyndp.json"
              trigger="hover"
              colors="primary:#10b981,secondary:#065f46"
              style={{ width: '20px', height: '20px', marginRight: '8px' }}
            />
            Go Home
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Error;