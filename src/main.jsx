import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import MainPage from './pages/Main/MainPage';
import ErrorPage from './utils/ErrorPage/ErrorPage';
import EditDatabase from './pages/EditDatabase/EditDatabase.jsx';
import SelectTopics from './pages/SelectTopics/SelectTopics.jsx';
import Topics from './pages/SelectTopics/Topics.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* User routes */}
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route path='' element={<MainPage />} />
        <Route path='edit-database' element={<EditDatabase />} />
        <Route path='select-topics' element={<SelectTopics />} />
        <Route path='subject/:id' element={<Topics />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <RouterProvider router={router} />
  </Suspense>
)
