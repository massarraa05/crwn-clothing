import Directory from '../../directory/directory.compoent';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;