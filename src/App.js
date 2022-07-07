import "./App.css";
import Header from "./Common/HeaderFile/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./Pages/Pages";
import Data from "./Components/Data";
import Cart from "./Common/Cart/Cart";
import { useState } from "react";
import Sdata from "./Components/Shop/ShopData";
import Footer from "./Common/Footer/Footer";
import Contact from "./Common/ContactUs/Contact";
import Login from "./Common/Login/Login";
import AllProduct from "./Common/AllProduct/AllProduct";
import AllData from "./Components/AllProductData";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);
  const { AllproductItems } = AllData;

  const [menuItem, setMenuItem] = useState(AllproductItems);
  const filteritem = (categoryO) => {
    if (categoryO === "all") {
      setMenuItem(AllproductItems);
      return;
    }
    const fitlercate = AllproductItems.filter(
      (item) => item.category === categoryO
    );
    setMenuItem(fitlercate);
  };

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  //Decrement Items:
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route exact path="/">
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/allproduct">
            <AllProduct
              menuItem={menuItem}
              filteritem={filteritem}
              addToCart={addToCart}
            />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
