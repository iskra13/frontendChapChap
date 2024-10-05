import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './Store';

import router from './Components/Root/Root.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </Provider>
);
