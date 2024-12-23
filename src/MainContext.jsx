import React, { createContext, useState } from 'react'
export const ECommContext=createContext()
function MainContext({children}) {
    const [cart,setCart]=useState([])
  let [wishlist,setWishlist]=useState([])
  return (
    <ECommContext.Provider value={{cart,setCart,wishlist,setWishlist}} >
      {children}
    </ECommContext.Provider>
  )
}

export default MainContext
