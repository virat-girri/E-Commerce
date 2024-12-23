import React, { useContext, useEffect, useState } from "react";
import { ECommContext } from "./MainContext";

function Cart() {
  let { cart, setCart } = useContext(ECommContext);

  //console.log(cart)

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div>

              {cart.length >= 0
                ? cart.map((item, i) => {
                    return <RepeatItems item={item} index={i} />;
                  })
                : "No data Add "}
            </div>

            <DataAMount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

let DataAMount = () => {
  let { cart, setCart } = useContext(ECommContext);
 
  const [totalAmount, setTotalAmount] = useState(0);

  let findaTotal = () => {
    let sum = 0;
    cart.forEach((v, i) => {
      //console.log(v)
      sum += v.price * v.quantity;
    });

    setTotalAmount(sum);
  };

  useEffect(() => {
    findaTotal();
  }, [cart]);

  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items {cart.length}
        </span>
        <span className="font-semibold text-sm">
          {" "}
          {totalAmount.toFixed(2)} $
        </span>
      </div>
      <div className="flex justify-between ">
        <div className=""> GST </div>
        <div className=""> 18 % </div>
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$ {((totalAmount * 18) / 100 + totalAmount).toFixed(2)} </span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

let RepeatItems = ({ item, index }) => {
  const [valuess, setValuess] = useState(1);
  let { cart, setCart } = useContext(ECommContext);
  let Add = () => {
    if (valuess > 1) {
      setValuess(valuess - 1);

    }
  };
  let updateObjValue=()=>{
    const valueUpdate=cart.filter((v,i)=>{
      if(i==index){
        return v.quantity=valuess
      }
      return v

    })
    setCart(valueUpdate)
}

useEffect(()=>{
  updateObjValue()
},[valuess])

  return (
    <div
      key={index}
      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
    >
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={item.img} alt={item.title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{item.brand}</span>
          <span className="text-red-500 text-xs">{item.brand}</span>
          <a
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button className="text-gray-600" onClick={() => Add()}>
          -
        </button>
        <input
          className="mx-2 border text-center w-20"
          type="text"
          value={valuess}
          readOnly
        />
        <button
          className="text-gray-600"
          onClick={() => setValuess(valuess + 1)}
        >
          +
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${(item.price * valuess).toFixed(2)}
      </span>
    </div>
  );
};
