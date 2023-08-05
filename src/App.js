import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import ContactUs from "./pages/contact/index";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <footer>
            <div className="footerdiv">
              <div className="name">
                <p>Ege Bartu ACAR</p>
                  <div className="links">
                    <a href="https://www.linkedin.com/in/ege-bartu-acar-55b160256/">
                    <img className="linkedin-logo" src="linkedin-logo.png" alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/nasperva">
                    <img className="github-logo" src="github-logo.png" alt="GitHub logo" />
                    </a>
              </div>
              </div>
            </div>
          </footer>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

