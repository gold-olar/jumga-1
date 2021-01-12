import React from "react";
import NavbarCustom from "../../components/NavbarCustom";
import IndexPage from "../home";
import RidersHomePage from "../riders";
import { Switch, Route, Router } from "../../util/router.js";
import NotFoundPage from "../not-found/index.js";
import ProductsPage from "../products";
import Footer from "../../components/Footer";
import CartPage from "../cart";
import SingleProduct from "../single-product";
import PaymentPage from "../pay";

import logoBlue from "../../assets/img/logo-blue.png";
import "../../util/analytics.js";
import "../../styles/global.scss";
import ContextProvider from "../../contexts/ContextProviders";

import { toast } from "react-toastify";

toast.configure({
  autoClose: 3000,
  hideProgressBar: true,
});

function App(props) {
  return (
    <ContextProvider>
      <Router>
        <>
          <NavbarCustom
            bg="light"
            variant="light"
            expand="md"
            logo={logoBlue}
          />
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/rider" component={RidersHomePage} />

            <Route path="/products" component={ProductsPage} />

            <Route path="/cart" component={CartPage} />

            <Route path="/pay/:orderId" component={PaymentPage} />

            <Route path="/product/:productId" component={SingleProduct} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} Jumga`}
            logo={logoBlue}
          />
        </>
      </Router>
    </ContextProvider>
  );
}

export default App;
