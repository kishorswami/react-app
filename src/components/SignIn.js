import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid,Paper,Box,Avatar,Typography,TextField,FormControlLabel,Checkbox,Link,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Navigate } from 'react-router-dom';
const theme  = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const SignIn = () => {
	const[islogged,setIsLogin] = useState(false);
	const[email,setEmail] = useState('');
	const[password,setPassword] = useState('');

	const handleSubmit = (event) => {
	    event.preventDefault();

	    if (email === '' || password === '') {
	    	alert('Email & password can not  be empty.');
	    	return false;
	    }

	    const data = new FormData(event.currentTarget);
	    console.log({
	      email: data.get('email'),
	      password: data.get('password'),
	    });

	    setIsLogin(true);
	};

	if (islogged) {
	    return <Navigate to="/home"/>;
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{height:"100vh"}}>
				<Grid 
				item 
				xs={false} 
				sm={4} 
				md={7}
				sx={{
					backgroundImage:"url(https://source.unsplash.com/random)",
					backgroundReapeat:"no-repeat",
					backgroundPosition:"center",
					backgroundSize: 'cover',
					backgroundColor: (t) =>
              			t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
				}}
				/>

				<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component="Paper"
				elevation={6} 
				square
				>
					<Box sx={{display:"flex",flexDirection:"column",alignItems:"center",my:8,mx:4}}>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			              <LockOutlinedIcon />
			            </Avatar>
			            <Typography component="h1" variant="h5">
			              Sign in
			            </Typography>
			            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			              <TextField
			                value={email}
			                margin="normal"
			                required
			                fullWidth
			                id="email"
			                label="Email Address"
			                name="email"
			                autoComplete="email"
			                autoFocus
			                onChange={(e) =>{setEmail(e.target.value)}}
			              />
			              <TextField
			                value={password}
			                margin="normal"
			                required
			                fullWidth
			                name="password"
			                label="Password"
			                type="password"
			                id="password"
			                autoComplete="current-password"
			                onChange={(e) =>{setPassword(e.target.value)}}
			              />
			              <FormControlLabel
			                control={<Checkbox value="remember" color="primary" />}
			                label="Remember me"
			              />
			              <Button
			                type="submit"
			                fullWidth
			                variant="contained"
			                sx={{ mt: 3, mb: 2 }}
			              >
			                Sign In
			              </Button>
			              <Grid container>
			                <Grid item xs>
			                  <Link href="#" variant="body2">
			                    Forgot password?
			                  </Link>
			                </Grid>
			                <Grid item>
			                  <Link href="#" variant="body2">
			                    {"Don't have an account? Sign Up"}
			                  </Link>
			                </Grid>
			              </Grid>
			              <Copyright sx={{ mt: 5 }} />
			            </Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default SignIn;