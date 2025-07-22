import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Profilepass from './components/Profilepass';
import Viewpass from './components/Viewpass';
import Addpass from './components/Addpass';

export const ThemeContext = createContext(null);

const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register'];
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Outlet />
        {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
      </div>
    </ThemeContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/login" replace />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profilepass/:web_id/:user_id',
        element: <Profilepass />
      },
      {
        path: '/viewpass/:web_id/:user_id',
        element: <Viewpass />
      },
      {
        path: '/addpass',
        element: <Addpass />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

export default App;