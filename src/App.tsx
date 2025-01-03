import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from "@/components/main-layout";
import HomePage from '@/pages/home-page';
import ListingsPage from './pages/listings-page';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<MainLayout><HomePage/></MainLayout>}/>
    <Route path='/listings' element={<MainLayout><ListingsPage/></MainLayout>}/>
    <Route path='*' element={<Navigate to="/"/>}/>
   </Routes>
  );
};

export default App;
