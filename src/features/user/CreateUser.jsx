import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <lord-icon
          src="https://cdn.lordicon.com/hrjifpbq.json"
          trigger="loop"
          delay="2000"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '64px', height: '64px', margin: '0 auto 16px' }}
        />
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
          👋 Welcome to Pizza Top
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Please tell us your name to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-6 py-4 text-lg rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 placeholder:text-slate-400"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <lord-icon
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              colors="primary:#10b981,secondary:#065f46"
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </div>

        {username !== '' && (
          <div className="text-center">
            <Button type="primary">
              <lord-icon
                src="https://cdn.lordicon.com/jnikqyih.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Start Ordering
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateUser;