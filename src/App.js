import React from "react";
import Feature from "./components/Feature";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Hero />
      <Products heading="Iced" data={productData} />
      <Feature />
      <Products heading="Glazed" data={productDataTwo} />
      <Feature />
      <Products heading="Filled" data={productDataTwo} />
      <Feature />
      <Products heading="Cake" data={productDataTwo} />
      <Feature />
      <Products heading="Chocolate" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
