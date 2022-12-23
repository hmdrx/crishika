import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BeforeQuiz from './pages/Dashboard/Quiz/BeforeQuiz';
import Layout from './pages/Dashboard/Layout';
import Performance from './pages/Dashboard/Performance/Index';
import AccountDetails from './pages/Dashboard/Account/AccountDetails';
import PasswordSettings from './pages/Dashboard/PasswordSettings/PasswordSettings';
import Home from './pages/LandingPage/Home/Home';
import Base from './pages/LandingPage/Base';
import Pricing from './pages/LandingPage/Pricing';
import ContactUs from './pages/LandingPage/ContactUs';
import AboutUs from './pages/LandingPage/AboutUs';

import Login from './pages/Auth/Login';
import UpdatePassword from './pages/Dashboard/PasswordSettings/UpdatePassword';
import ResetPassword from './pages/Dashboard/PasswordSettings/ResetPassword';
import { createTheme, ThemeProvider } from '@mui/material';
import SignUp from './pages/Auth/SignUp';
import ResponsiveDrawer from './test/Drawer';
import Quiz from './pages/Dashboard/Quiz/Quiz';
import Report from './pages/Dashboard/Report/Report';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25bf77',
      contrastText: '#fff',
    },
    secondary: {
      main: '#da4088',
      contrastText: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
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
          <Route path="quiz" element={<Quiz />} />
          <Route path="report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
