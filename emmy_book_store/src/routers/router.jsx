import { 
    createBrowserRouter, 
    RouterProvider 
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBook from "../Dashboard/ManageBook";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../priveteRoute/PrivateRoute";
import Logout from "../components/Logout";

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/about', element: <About /> },
      { path: '/blog', element: <Blog /> },
      { 
        path: "book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }, {
        path:"/sign-up",
        element:<Signup/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/logout",
        element:<Logout/>
      }
     
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", 
        element:<PrivateRoute> <Dashboard /> </PrivateRoute>
      },
      { path: "/admin/dashboard/upload", element: <UploadBook /> },
      { path: "/admin/dashboard/manage", element: <ManageBook /> },
      {
        path: "edit-book/:id", // HINDURA HANO kugira ngo ihure na ManageBooks.js
        element: <EditBooks />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
    ]
  }
]);

export default router;

