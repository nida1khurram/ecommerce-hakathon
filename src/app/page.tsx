
// import Demo from "@/components/demo";
import Categories from "@/components/categories/categories";
import FlashSales from "@/components/flashSales/flashSales";
import Hero from "@/components/hero/hero";
import Products from "@/components/product/product";
import BestSellingProduct from "@/components/hero/bestSelling/bestSelling";
import Music from "@/components/hero/music/music";
import NewArrival from "@/components/hero/newArrival/newArrival";
import Delivery from "@/components/hero/delivery/delivery";
import ProductList from "@/components/productCard/data";
import Slider from "@/components/flashSales/slider";
import Slider2 from "@/components/flashSales/slider2";

export default function Home() {
  return (
   <>
  
   <Hero />
   <FlashSales />
   <Categories />
   <BestSellingProduct />
 <Music/>
<Products />
<NewArrival />
<Delivery />
<ProductList />



{/* <Slider />
<Slider2 /> */}
   </>
  );
}
