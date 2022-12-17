import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BeforeQuiz from './pages/Dashboard/BeforeQuiz';
import Layout from './pages/Dashboard/Layout';
import Performance from './pages/Dashboard/Performance/Index';
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
import { createTheme, ThemeProvider } from '@mui/material';
import SignUp from './pages/Auth/SignUp';
import ResponsiveDrawer from './test/Drawer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#25bf77',
      contrastText: '#fff',
    },
    secondary: {
      main: '#da4088',
      contrastText: '#fff',
    }
  },
  typography: {
    htmlFontSize: 10,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="register" element={<SignUp />} />
          <Route path="drawer" element={<ResponsiveDrawer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
