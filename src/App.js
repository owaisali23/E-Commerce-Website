import "./App.css";
import { Provider } from "react-redux";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { History } from "./Pages/SellHistory";
import { ProductDetails } from "./Pages/ProductDetails";
import { Navbarr } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import store from "./Store/store";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="main-cont">
            <Navbarr />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route
                exact
                path="/products/:id"
                element={<ProductDetails />}
              ></Route>
              <Route exact path="/history" element={<History />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
