import React from "react";
import Feature from "./components/Feature";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { productData, productDataTwo } from "./components/Products/data";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <GlobalStyle />

      <Hero />
      <Products id="Iced" heading="Iced" data={productData} />
      <Feature />
      <Products id="Glazed" heading="Glazed" data={productDataTwo} />
      <Feature />
      <Products id="Filled" heading="Filled" data={productDataTwo} />
      <Feature />
      <Products id="Cake" heading="Cake" data={productDataTwo} />
      <Feature />
      <Products id="Chocolate" heading="Chocolate" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
