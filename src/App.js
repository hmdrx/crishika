import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/LandingPage/Home/Home';
import Base from './pages/LandingPage/Base';
import Pricing from './pages/LandingPage/Pricing';
import ContactUs from './pages/LandingPage/ContactUs';
import AboutUs from './pages/LandingPage/AboutUs';

import Login from './pages/Auth/Login';
import { createTheme, ThemeProvider } from '@mui/material';
import SignUp from './pages/Auth/SignUp';
import ResponsiveDrawer from './test/Test';
import Quiz from './pages/Dashboard/Quiz/Quiz';
import Report from './pages/Dashboard/Report/Report';
import Test from './test/Test';

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="drawer" element={<ResponsiveDrawer />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="report" element={<Report />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
