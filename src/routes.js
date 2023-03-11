import AllDrinks from "./views/AllDrinks.jsx";
import Allmemes from "./views/AllMemes.jsx";
import AllProducts from "./views/AllProducts.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Tools from "./views/Tools.jsx";
import UserPage from "./views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tools",
    name: "Tools",
    component: Tools,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/all-memes",
    name: "Memes",
    component: Allmemes,
    layout: "/admin",
  },
  {
    path: "/all-drinks",
    name: "Drinks",
    component: AllDrinks,
    layout: "/admin",
  },
  {
    path: "/all-products",
    name: "Products",
    component: AllProducts,
    layout: "/admin",
  },
];

export default routes;
