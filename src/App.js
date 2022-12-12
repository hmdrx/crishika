import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BeforeQuiz from './pages/Dashboard/BeforeQuiz';
import Layout from './pages/Dashboard/Layout';
import Performance from './pages/Dashboard/Performance';
import AccountDetails from './pages/Dashboard/AccountDetails';
import PasswordSettings from './pages/Dashboard/PasswordSettings';
import Home from './pages/LandingPage/Home';
import Base from './pages/LandingPage/Base';
import Pricing from './pages/LandingPage/Pricing';
import ContactUs from './pages/LandingPage/ContactUs';
import AboutUs from './pages/LandingPage/AboutUs';

import Login from './pages/Auth/Login';
import UpdatePassword from './components/UpdatePassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about_us" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Performance />} />
          <Route path="exam_exercise" element={<BeforeQuiz />} />
          <Route path="account_details" element={<AccountDetails />} />
          <Route path="password_settings" element={<PasswordSettings />}>
            <Route index element={<UpdatePassword />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="logout" element={<AccountDetails />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
