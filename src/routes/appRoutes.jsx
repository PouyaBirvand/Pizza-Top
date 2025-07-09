import Home from '../ui/Home/Home';
import About from '../features/about/About';
import Contact from '../features/contact/Contact';
import Reviews from '../features/reviews/Reviews';
import FAQ from '../features/faq/FAQ';

export const appRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
];
