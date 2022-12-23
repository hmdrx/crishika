import { Box, Button, Container, Stack } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/images/logo-512.png';
// import { colors } from '../../constants/colors';

const tabsNameAndLink = [
  { tabName: 'Pricing', link: 'pricing' },
  { tabName: 'About Us', link: 'about_us' },
  { tabName: 'Contact', link: 'contact' },
];

const Header = () => {
  return (
    <Box sx={{ bgcolor: '#25bf7770', display: { xs: 'none', md: 'block' } }}>
      <Container>
        <Stack
          sx={{ pt: 2 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Link to="/">
              <Box
                sx={{ maxWidth: '5rem' }}
                component="img"
                src={logo}
                alt="logo"
              />
            </Link>
            {tabsNameAndLink.map(el => {
              return (
                <NavLink
                  to={el.link}
                  key={el.link + Math.random()}
                  className={({ isActive }) =>
                    isActive ? classes['navlink-active'] : classes.navlink
                  }
                >
                  {el.tabName}
                </NavLink>
              );
            })}
          </Stack>
          <Link to="login">
            <Button variant="outlined">Login</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
