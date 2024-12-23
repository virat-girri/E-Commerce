import { useEffect, useState } from "react";
import "./App.css";
import Items from "./Items";
import { Card } from "flowbite-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Magnifier from "react-magnifier";
function App() {
  let [product, setProduct] = useState([]);
  console.log(product);

  let [item,setItem]=useState([])
  //console.log(item)
let [Change,setChange]=useState('')
console.log(setChange)
let [cat,setCat]=useState('')

let itemList=()=>{
return(
axios.get('https://dummyjson.com/products/categories')
.then((v)=>{
return(
setItem(v.data)

)

})
.catch(()=>{
  console.log("error")
})


)}


useEffect(()=>{
  //console.log(cat)
  if(cat!==""){
    axios.get(`https://dummyjson.com/products/category/${cat}`)
    .then((v)=>{
    return(
    setProduct(v.data.products)
    //console.log(v.data.product)
    
    )
    
    })
    .catch(()=>{
      console.log("error")
    })
   
  }
},[cat])


  let ProductItem = () => {
    return axios.get("https://dummyjson.com/products")
      .then((v) => {
        setProduct(v.data.products);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    ProductItem();
    itemList()
  }, []);



  return (
    <>
    <Header/>
    
      <h1 className="text-[50px] text-center font-[sans_bold]  ">
        Our Product
      </h1>
      <input type="text" className="w-[500px] h-[30px] ml-[450px] my-[20px]"/>
      <div className="w-[1200px] grid grid-cols-[30%_auto] m-[auto] gap-2">
        <div className="">
       
          <Items dataI={item} setCat={setCat}  />
        </div>

        <div className="grid grid-cols-3 gap-[10px]">
          {  product.length >=1 ?
                   product.map((v ,i)=>{
                    return(

                      <ProductItems key={i} data={v}/>  

                    )
                   })
                   :
                  <Animation/>
                  

          }


        
        </div>
      </div>
    </>
  );
}
//'https://dummyjson.com/products'
//'https://dummyjson.com/products/1'
//'https://dummyjson.com/products/categories'
//'https://dummyjson.com/products/category/smartphones'
export default App;
let ProductItems = ({data}) => {
 
  return (
    <>
  
      <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={data.thumbnail}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         {data.title}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
        <Link
          to={`/singlePage/${data.id}`}
          className="rounded-lg bg-cyan-700 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >  Add to cart
          
       
        </Link>
      </div>
    </Card>
    </>
  );
};
let Animation=()=>{

return(

  <div className="border border-blue-300 shadow rounded-md p-4  w-[600px] h-[200px] mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
)


}