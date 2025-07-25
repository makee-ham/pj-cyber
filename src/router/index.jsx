import { Route, Routes } from 'react-router-dom';
import MainLayout from '~layouts/MainLayout';
import Home from '~pages/Home';
import Products from '~pages/Products';
import NotFound from '~pages/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
