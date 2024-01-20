import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Categories from "../../Components/Categories/Categories";
import { CartState } from "../../Components/Context/Context";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Header";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div>
      <Announcement />

      <Slider />
      <Categories />
      <Products products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
