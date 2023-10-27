import { useRoutes  } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";


export default function AppRoutes() {
    const user = false;

    const routes = useRoutes([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
         element: user ? <Home /> : <Register />
      },
      { 
        path: '/login',
        element: user ? <Home/> : <Login />
      },
      { 
        path: '/write',
        element: user ? <Write /> : <Register />
      },
      { 
        path: '/settings',
        element: user ? <Settings /> : <Register />
      },
      { 
        path: '/post/:postId',
        element: <Single />
      },
    ]);
  
    return routes;
  
  }