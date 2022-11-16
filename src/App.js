import "./App.css";
import IncDecCounter from "./components/IncDecCounter";
import Header from "./components/Header";
import UserComponent from "./components/UserComponent";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Quiz from './components/Quiz';
import PaginationListing from "./components/PaginationListing";
import FormComponent from "./components/FormComponent";
import SignIn from "./components/SignIn";
import {Layout} from "./components/Layout";
import MiniDrawer from "./components/MiniDrawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const eventbriteRoutes=[
  {
    path:'/',
    element:<SignIn />
  },
  {
    path:'/home',
    element:<Home />
  },
  {
    path:'/user-app',
    element:<UserComponent />
  },
  {
    path:'/counter-app',
    element:<IncDecCounter />
  },
  {
    path:'/todo-app',
    element:<TodoList />
  },
  {
    path:'/product-app',
    element:<ProductListing />
  },
  {
    path:'/product-app/:productId',
    element:<ProductDetails />
  },
  {
    path:'/quiz',
    element:<Quiz />
  },
  {
    path:'/pagination-listing',
    element:<PaginationListing />
  },
  {
    path:'/form',
    element:<FormComponent />
  },
  {
    path:'/test',
    element:<MiniDrawer />
  }
];
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout hideHeaderPaths={["/"]} />}>
            {eventbriteRoutes.map((RouteItem) => (
              <Route
                key={RouteItem.path}
                path={RouteItem.path}
                element={RouteItem.element}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
