import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-previw/categories-preview.compoent';
import Category from '../category/category.compoent';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;