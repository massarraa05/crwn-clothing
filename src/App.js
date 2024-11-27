import { Routes, Route } from 'react-router-dom';


//import Home from './compoents/routes/home/home.compoent';  // Make sure this path is correct
import Home from './compoents/routes/home//home.compoent';
import Navigation from './compoents/routes/navigation/navigation.compoent';
import Authentication from './compoents/routes/authentication/authentication.compoent.jsx';
import Shop from './compoents/routes/shop/shop.compoent.jsx';
import Checkout from './compoents/routes/checkout/checkout.compoent.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />

      </Route>
    </Routes>
  );
};
export default App;
