import { Routes, Route } from 'react-router-dom';

//import Home from './compoents/routes/home/home.compoent';  // Make sure this path is correct
import Home from './compoents/routes/home//home.compoent';
import Navigation from './compoents/routes/navigation/navigation.compoent';

const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/home' index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
