import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../../compoents/cart-icon/cart-icon.compoent';
import CartDropdown from '../../../compoents/cart-dropdown/cart-dropdown.compoent';

import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../../assets/083 crown.svg';

import { signOutUser } from '../../../utils/firebase/utils.firebase';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;