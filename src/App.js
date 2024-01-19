import React,{useState}from 'react';
import Header from './Components/Layout/Header';
import TshirtForm from './Components/Tshirts/TshirtForm';
import AvailableTshirts from './Components/Tshirts/AvailableTshirts';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/store/CartProvider';

function App() {
  const[tshirtList,updateTshirtList]=useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };
  const tshirtListHandler=(newTshirt)=>{
    updateTshirtList((prevList)=>{
      return [...prevList,newTshirt];
    });
  };
  console.log(tshirtList);
  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <TshirtForm onSubmit={tshirtListHandler}/>
      <AvailableTshirts items={tshirtList}/>
    </CartProvider>
  );
}

export default App;
