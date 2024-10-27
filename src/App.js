import { Routes, Route,Navigate  } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";


//import Home from './compoents/routes/home/home.compoent';  // Make sure this path is correct
import Home from './compoents/routes/home//home.compoent';
import Navigation from './compoents/routes/navigation/navigation.compoent';
import Authentication from './compoents/routes/authentication/authentication.compoent.jsx';

const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  );
};

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
    </Route>
  </Routes>
  );
};

export default App;
