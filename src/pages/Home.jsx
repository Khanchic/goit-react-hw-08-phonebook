import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuth } from 'hooks';
import { Animation } from 'components/Animation/Animation';
import '../components/App.module.css'



export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Animation />
      ) : (
        <Box
          sx={{
            minHeight: 'calc(100vh - 60px)',
            marginTop: '-150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <LoginForm />

          <Typography
            variant="h6"
            component="h6"
            sx={{ color: 'rgba(15, 190, 233, 1)', marginTop: '4px' }}
          >
            Don't have an account yet?
          </Typography>
          <NavLink
            to="/register"
            style={{
              marginTop: '8px',
              color: '#1976d2',
              width: '364px',
              textAlign: 'center',
              fontWeight: '400',
              
            }}
          >
            <Typography variant="h6" component="h6" style={{
              color: 'rgba(15, 190, 233, 1)', 
              border: '1px solid rgba(15, 190, 233, 1)',
              padding: '20px',
            }}>
              Registretion
            </Typography>
          </NavLink>
        </Box>
      )}
    </>
  );
}
