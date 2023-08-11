import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/ui/Home";
import Error from "./features/ui/Error";

import Menu, { loader as menuLoader } from "./features/menu/Menu";

import Order, { loader as orderLoader } from "./features/orders/Order";

import Cart from "./features/cart/Cart";
import Createorder, {
  action as createOrderAction,
} from "./features/orders/CreateOrder";

import AppLayout from "./features/ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <Createorder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
