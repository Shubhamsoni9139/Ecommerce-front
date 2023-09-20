import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Signup from './features/auth/components/Signup';
import { createRoot } from "react-dom/client";
import Cart from './features/cart/Cart';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';






const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home>

      </Home>
    ),
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/Signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
]);





function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
