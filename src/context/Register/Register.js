import React from 'react'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export const Register = () => {
    const paperStyle = { padding: '1.875rem 1.25rem', width: '26.25rem', margin: '2.5rem auto', elevation: '1.25rem' };
    const headerStyle = { margin: 0, fontSize: '1.188rem' };
    const avatarStyle = { backgroundColor: '#3751FF' };
    const typeFont = { fontFamily : 'arial' };
    const sizeFont = { fontSize : '1.188rem' };
    const sizeFontSecondary = { fontSize : '0.75rem' };
    const colorFont = { color : '#A4A6B3' };
    const opacityFont = { opacity : '0.7'};
    const borderLabel = { borderRadius : '0.5rem'};

    const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });
    const [confirm, setConfirm] = React.useState({
      rePassword: '',
      showRePassword: false,
    });
    
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowRePassword = () => {
      setConfirm({ ...confirm, showRePassword: !confirm.showRePassword });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleRePasswordChange = (prop) => (event) => {
      setConfirm({ ...confirm, [prop]: event.target.value });
    };
    return (
        <Grid>
            <Paper style = {paperStyle}>
                <Grid align = 'center' >
                    <Avatar style = {avatarStyle}></Avatar>
                    <Typography variant = 'caption' gutterBottom style = {{...typeFont, ...sizeFont, ...colorFont, ...opacityFont}}>Plagio Control</Typography>
                    <br /><br />
                    <h2 style = {headerStyle}>Sign in Plagio Control</h2>
                    <Typography variant = 'caption' gutterBottom style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>Enter your email and password below</Typography>
                </Grid>
                <br/>
                <form style = {{margin: '1.25rem', ...typeFont}}>
                    <InputLabel htmlFor = 'standard-adornment-email' style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>EMAIL</InputLabel>
                    <OutlinedInput id = 'outlined-basic' fullWidth label = 'Email' size = 'small' variant = 'outlined' placeholder = 'Email address' style={{height: '2.5rem', fontSize: '0.875rem', ...borderLabel}} />
                    <br /><br />
                    <InputLabel htmlFor='standard-adornment-password' style={{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>PASSWORD</InputLabel>
                    <OutlinedInput
                        fullWidth
                        placeholder='Password'
                        style={{height: '2.5rem', borderRadius: '0.5rem'}}
                        type={values.showPassword ? "text" : 'password'}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                            <InputAdornment position = 'end'>
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                        }
                    />
                    <br /><br />
                    <InputLabel htmlFor='standard-adornment-password' style={{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>RE. PASSWORD</InputLabel>
                    <OutlinedInput
                        fullWidth
                        placeholder='Repeat password'
                        style={{height: '2.5rem', borderRadius: '0.5rem'}}
                        type={confirm.showRePassword ? "text" : 'password'}
                        onChange={handleRePasswordChange("rePassword")}
                        value={confirm.rePassword}
                        endAdornment={
                            <InputAdornment position = 'end'>
                              <IconButton
                                onClick={handleClickShowRePassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {confirm.showRePassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                        }
                    />
                    <br /><br />                                
                    <Button fullWidth type='submit' variant='contained' color='primary' style={{background: '#3751FF', ...typeFont, ...sizeFontSecondary, ...borderLabel}}>Sign in</Button>   
                    <center>
                    <p  style={{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>You do not have an account?  <a href='/' >Login</a> </p>
                    </center>                              
                </form>
            </Paper>
        </Grid>
    )
}