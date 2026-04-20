import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  //Fetch products (using dummy data here, replace with API call if needed)
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(dummyProducts);
    };
    fetchProducts();
  }, []);

  //Add Product to Cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  //Update Cart item Quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  //Remove Product from Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]) {
        cartData[itemId] -= 1;
        if(cartData[itemId] ===0 ){
            delete cartData[itemId];
        }
    }
    toast.success("Removed from Cart");
    setCartItems(cartData);
  }

  return (
    <AppContext.Provider
      value={{
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
