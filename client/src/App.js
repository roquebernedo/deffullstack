import './App.css';
import Entrance from './Entrance';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home';
import Favorites from './Favorites';
import Auth from './Auth.jsx';
import CreateRecipe from './CreateRecipe';
import SavedRecipes from './SavedRecipes';
import Register from './Register';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
console.log("Width: " + window.innerWidth);
  console.log("Height: " + window.innerHeight);
const router = createBrowserRouter([
  {
    path: "/about",
    element: <Entrance/>
  },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/createRecipe",
        element: <CreateRecipe/>
      },
      {
        path: "/save",
        element: <Favorites/>
      },
      {
        path: "/auth",
        element: <Auth/>
      },
      {
        path: "/profile",
        element: <SavedRecipes/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
])

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}



export default App;
