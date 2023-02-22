import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '180px',
          '& .MuiTextField-root': { width: '396px' },
        }}
        autoComplete="off"
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: '600',
            color: 'rgba(15, 190, 233, 1)',
            marginBottom: '12px',
          }}
        >
          Phonebook
        </Typography>
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="dense"
          size="small"
          
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth={true}
          sx={{
            marginTop: '8px',
            borderColor: 'rgba(15, 190, 233, 1)',
            color: 'rgba(15, 190, 233, 1)',
          }}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};
