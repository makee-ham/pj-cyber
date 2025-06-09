import AppRouter from './router';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet></Helmet>
      <AppRouter />
    </>
  );
}
