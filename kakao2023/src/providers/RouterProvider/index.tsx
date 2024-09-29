import { RouterProvider as ReactRouterProvider, Navigate, createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts';
import ManagementPage from '@pages/[problem]/management';
import ProblemPage from '@pages/Problem';

const router = createBrowserRouter([
  {
    path: '/problem',
    element: <ProblemPage />,
  },
  {
    path: '/:problem/management',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <ManagementPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/problem" replace />,
  },
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
