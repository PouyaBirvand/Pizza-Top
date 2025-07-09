import CreateUser from '../../../features/user/CreateUser';
import WelcomeBack from './WelcomeBack';

function CTASection({ username }) {
  return (
    <section className='mb-16'>
      <div className='rounded-2xl border border-emerald-200/50 bg-white/50 p-8 shadow-xl shadow-emerald-500/10 backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/50'>
        {username === '' ? <CreateUser /> : <WelcomeBack username={username} />}
      </div>
    </section>
  );
}

export default CTASection;
