import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
      <lord-icon
        src="https://cdn.lordicon.com/hrjifpbq.json"
        trigger="hover"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '20px', height: '20px' }}
      />
      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
        {username}
      </span>
    </div>
  );
}

export default Username;