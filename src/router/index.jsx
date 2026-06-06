import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '@/App';
import Home from '@/pages/Home';
import CountryPage from '@/pages/CountryPage';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'country/:slug',
        Component: CountryPage,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}