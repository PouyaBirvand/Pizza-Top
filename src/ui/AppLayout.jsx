import Header from './Header/Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/components/CartOverview';
import Footer from './Footer/Footer';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100 transition-all duration-300 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950">
      {isLoading && <Loader />}

      <Header />

      <div className="relative">
        <main className="min-h-screen pb-20">
          <Outlet />
        </main>
      </div>

      <CartOverview />
      <Footer />
    </div>
  );
}

export default AppLayout;
