import React, { useDebugValue, useState } from "react";
import Header from "./Component/Header";
import CartComponent from "./Component/Cart";
import Footer from "./Component/Footer";

const App = () => {
  //State To Manage The Product
  const [Product, setProduct] = useState([
    {
      id: 0,
      Img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/z/z/o/-original-imagfdeu9rmugapt.jpeg?q=70",
      Title: "APPLE 2022 MacBook Pro M2",
      Qty: 0,
      Price:"PRICE: 89999",
      button: "ADD TO CART",
    },
    {
      id: 1,
      Img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70",
      Title: "DELL Inspiron Core i3 11th",
      Qty: 0,
      Price:"PRICE: 50000",
      button: "ADD TO CART",
    },
    {
      id: 2,
      Img: "https://rukminim2.flixcart.com/image/416/416/khdqnbk0/computer/f/y/t/apple-original-imafxfyqydgvrkzv.jpeg?q=70",
      Title: "APPLE 2020 Macbook Air M1",
      Qty: 0,
      Price:"PRICE: 64000",
      button: "ADD TO CART",
    },
    {
      id: 3,
      Img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/1/n/p/-original-imagfdfew8gszzhk.jpeg?q=70",
      Title: "APPLE 2022 MacBook AIR M2",
      Qty: 0,
      Price:"PRICE: 92000",
      button: "ADD TO CART",
    },
    {
      id: 4,
      Img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/v/c/a/-original-imagfdfpnjjpdhq2.jpeg?q=70",
      Title: "APPLE 2022 MacBook AIR",
      Qty: 0,
      Price:"PRICE: 120000",
      button: "ADD TO CART",
    },
    {
      id: 5,
      Img: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/i/y/mphg3hn-a-thin-and-light-laptop-apple-original-imagmfhepavqyfyy.jpeg?q=70",
      Title: "APPLE 2023 MacBook Pro M2 Pro",
      Qty: 0,
      Price:"PRICE: 230000",
      button: "ADD TO CART",
    }
  ]);
  
  const OnButtonChange = (id) => {
    let Item =  Product.map(FinalData => {
      if(FinalData.id === id && FinalData.button !== "REMOVE FROM CART" ) {
        return {...FinalData, button:"REMOVE FROM CART", IsAdd:true,Qty:1}
      }
      else if(FinalData.id === id && FinalData.button !== "ADD TO CART") {
        return {...FinalData, button:"ADD TO CART", Qty:0}
      }
        return FinalData
     }) 
      setProduct(Item)
  }
  return (
    <>
      <Header Product={Product} />
      <div className="container-fluid">
        <div className="row">
          {Product.map((NewData) => (
            <CartComponent NewData={NewData} OnButtonChange={OnButtonChange} />
          ))}
        </div>  
      </div>
      <Footer />
    </>
  );
};

export default App;
