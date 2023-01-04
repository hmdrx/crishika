import { createTheme, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//redux imports
import { Provider } from 'react-redux';
import store from './redux/store';

// Landing page imports
import Layout from './pages/LandingPage/Layout';
import Home from './pages/LandingPage/Home/Home';
import Pricing from './pages/LandingPage/Pricing';
import AboutUs from './pages/LandingPage/AboutUs';
import ContactUs from './pages/LandingPage/ContactUs';

// Auth imoports
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

// Dashboard imports
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/Dashboard/Report/Report';
import Quiz from './pages/Dashboard/Quiz/Quiz';


// App wide Theme
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


const router = createBrowserRouter([
  {
  // Landing page route
    path: '/',
    element: <Layout />,
    children: [
      {index: true,
    element: <Home /> },
    {
      path: 'pricing',
      element: <Pricing/>
    },
    {
      path: 'about_us',
      element: <AboutUs/>
    },
    {
      path: 'contact',
      element: <ContactUs/>
    },
   
    ]
  },

  // Auth route
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <SignUp/>
  },

  // Dashboard route
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/quiz',
    element: <Quiz/>
  },
  {
    path: '/report',
    element: <Report/>
  },

])


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store} >
      <RouterProvider router={router}/>
    </Provider>
      </ThemeProvider>

  );
}

export default App;
