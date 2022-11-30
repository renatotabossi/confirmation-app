import * as React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// import from MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <a color="inherit" href="github.com/renatotabossi">
          Renato Tabossi
        </a>{' '}
        {new Date().getFullYear()}
        .
      </Typography>
    );
  }

const theme = createTheme();


export default function SignUp() {
  

  const navigate = useNavigate()
  const [formValidate, setformValidate] = React.useState<string[]>([])
  const [userExists, setuserExists] = React.useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formArray = []
    if (!formData.get('email')) {
      formArray.push('Email')
    }
    if (!formData.get('firstName')) {
      formArray.push('Nome')
    }
    if (!formData.get('lastName')) {
      formArray.push('Sobrenome')
    }
    if (!formData.get('password')) {
      formArray.push('Senha')
    }
    setformValidate(formArray)

    if (formValidate.length === 0 && formData.get('password') && formData.get('email')) {
      axios({
        method: 'POST',
        url: 'http://localhost:3333/users',
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
      })
      .then( 
        (response) => {
          console.log(response)
         if (response.status === 201) {
          navigate('/', { replace: true })
        }})
        .catch((error) => {
          setuserExists('Email esta em uso')
        })
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {formValidate.length > 0 &&
            <strong id="title-error" role="alert"> Faltando {formValidate.map(x =>` ${x}  `)}</strong>
          }
          {userExists.length > 0 &&
            <strong id="title-error" role="alert"> {userExists}</strong>
          }
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}