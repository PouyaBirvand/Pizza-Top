import Button from "../../Button";

function WelcomeBack({ username }) {
  return (
    <div className="space-y-4">
      <p className="text-lg text-slate-600 dark:text-slate-300">
        Welcome back, {' '}
        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
          {username}
        </span>
        !
      </p>
      <Button to="/menu" type="primary">
        <lord-icon
          src="https://cdn.lordicon.com/jnikqyih.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        Continue Ordering
      </Button>
    </div>
  );
}

export default WelcomeBack;
