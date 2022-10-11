import "./App.css";
import IncDecCounter from "./components/IncDecCounter";
import Header from "./components/Header";
import UserComponent from "./components/UserComponent";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user-app" element={<UserComponent />} />
          <Route exact path="/counter-app" element={<IncDecCounter />} />
          <Route exact path="/todo-app" element={<TodoList />} />
          <Route exact path="/product-app" element={<ProductListing />} />
          <Route exact path="/product-app/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
