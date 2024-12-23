import React, { useContext, useEffect, useState } from "react";
import "./singleproduct.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Magnifier from "react-magnifier";
import { ECommContext } from "./MainContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";

import { FaRegHeart } from "react-icons/fa";


export default function SingleProduct() {
  let [singlep, setSinglep] = useState([]);
  let [images, setImages] = useState([]);
  let [imghover, setImghover] = useState([]);


  //  console.log(images)

//for context
let{cart,setCart}=useContext(ECommContext)
console.log("heloo",cart)
  let linkid = useParams();
  let singlefun = () => {
    axios
      .get(`https://dummyjson.com/products/${linkid.id}`)
      .then((v) => {
        setSinglep(v.data);
        setImages(v.data.images);
        setImghover(v.data.thumbnail);
      })
      .catch(() => {});
  };
  useEffect(() => {
    singlefun();
  }, []);

  //hover Images  function
  let hoverimg = (v) => {
    //console.log(v)

    setImghover(v);
  };

let isChecked;
  let Cartwork=(Uid)=>{
    isChecked=cart.some((v)=>v.id==Uid)
  //console.log(v.target)
    let cartObj={
       id:singlep.id,
       price:singlep.price,
       title:singlep.title,
       img:singlep.thumbnail,
       quantity:"1",
       brand:singlep.brand 

    }
    if(isChecked==true){
      let filterwish=cart.filter((v)=>v.id!=Uid)
      setCart(filterwish)
      toast.success("added")
    }else{
    setCart([...cart,cartObj])
    toast.success("Item Added in Cart !!" )
  }}
//let whistlist =()=>{
//  let cartObj={
//    id:singlep.id,
//    price:singlep.price,
//    title:singlep.title,
//    img:singlep.thumbnail,
//    quantity:"1",
//    brand:singlep.brand 

// }
// setCart([...cart,cartObj])
// toast.success("Item Added in Cart !!" )
//}
//whistlist()

  return (
    <div>
        <ToastContainer />
        <Header />
      <div className="detail-container ">
        <div className="product-detail ">
          <div className="product-images">
            {/*<img
              src={imghover}
              alt="Main Product Image"
              className="main-image"
            />*/}
            <Magnifier  className="main-image" src={imghover} width={500} />;
            <div className="thumbnail-images">
              {images.map((v, i) => {
                return (
                  <img
                    key={i}
                    src={v}
                    alt="Thumbnail 1"
                    onMouseOver={() => hoverimg(v)}
                  />
                );
              })}
            </div>
          </div>

          <div className="product-info">
            <h1>{singlep.title}</h1>
          
            <p className="price">${singlep.price}</p>

            <div className="options">
              <p className="option-label">Color Options:</p>
              <div className="option-buttons">
                <button className="active">Black</button>
                <button>White</button>
              </div>
            </div>

            <div className="actions_wrraper">
             
              <div className="actions">
                <button className={cart.length>0?"activewist":"add-to-cart"} onClick={(v)=>{Cartwork(v)}}><FaRegHeart /></button>
                <h2>WhistList</h2>
              </div>
            </div>

            <div className="tab-content">
              <p>{singlep.description}</p>
            </div>
          </div>
        </div>

        <div className="tabs">
          <button className="active">Description</button>
          <button>Specifications</button>
          <button>Shipping & Returns</button>
          <button>Warranty</button>
        </div>

        <div className="tab-content">
          <p>
            Experience the perfect combination of style, comfort, and advanced
            technology with this wireless earphone. Crafted with a lightweight,
            ergonomic design, it provides a secure and comfortable fit, ensuring
            you can wear it all day without discomfort. The earphone features
            state-of-the-art sound drivers that deliver an exceptional audio
            experience, with crystal-clear highs, balanced mids, and powerful
            bass for a truly immersive soundstage. Seamless Bluetooth
            connectivity allows quick and stable pairing with your devices, so
            you can enjoy uninterrupted music, calls, and media. Its
            long-lasting battery ensures hours of continuous playtime, making it
            the ideal companion for busy workdays, intense workouts, or relaxing
            commutes. Intuitive touch controls and a built-in microphone provide
            added convenience, allowing you to manage calls and audio playback
            effortlessly. Whether you’re on the go, working out, or relaxing at
            home, this wireless earphone offers a premium blend of performance,
            practicality, and comfort, elevating your everyday listening
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
