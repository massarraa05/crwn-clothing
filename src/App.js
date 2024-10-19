import { Routes, Route } from 'react-router-dom';

//import Home from './compoents/routes/home/home.compoent';  // Make sure this path is correct
import Home from './compoents/routes/home//home.compoent';
import Navigation from './compoents/routes/navigation/navigation.compoent';
import SignIn from './compoents/routes/sign-in/sign-in.compoent';
const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  );
};

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
  );
};

export default App;
