import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from "@/components/main-layout";
import HomePage from '@/pages/home-page';
import ListingsPage from '@/pages/listings-page';
import ListingDetailsPage from '@/pages/listing-details-page';
import OurServices from './pages/our-services';
import AboutUs from './pages/about-us-page';
import OurTeamPage from './pages/our-team-page';
import ContactUsPage from './pages/contact-us-page';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<MainLayout><HomePage/></MainLayout>}/>
    <Route path='/listings' element={<MainLayout><ListingsPage/></MainLayout>}/>
    <Route path='/listings/1' element={<MainLayout><ListingDetailsPage/></MainLayout>}/>
    <Route path='/services' element={<MainLayout><OurServices/></MainLayout>}/>
    <Route path='/about-us' element={<MainLayout><AboutUs/></MainLayout>}/>
    <Route path='/our-team' element={<MainLayout><OurTeamPage/></MainLayout>}/>
    <Route path='/contact-us' element={<MainLayout><ContactUsPage/></MainLayout>}/>
    <Route path='*' element={<Navigate to="/"/>}/>
   </Routes>
  );
};

export default App;
