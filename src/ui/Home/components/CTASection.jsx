import CreateUser from '../../../features/user/CreateUser';
import WelcomeBack from './WelcomeBack';

function CTASection({ username }) {
  return (
    <section className="mb-16">
      <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl shadow-emerald-500/10">
        {username === '' ? (
          <CreateUser />
        ) : (
          <WelcomeBack username={username} />
        )}
      </div>
    </section>
  );
}

export default CTASection;
