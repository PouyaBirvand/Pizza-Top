import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';
import NotFound from '../ui/NotFound';
import { appRoutes } from './appRoutes';
import { orderRoutes } from './orderRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      ...appRoutes,
      ...orderRoutes,
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
