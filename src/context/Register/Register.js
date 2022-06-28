import React from 'react'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 420, margin: '40px auto', elevation: '20px' };
    const headerStyle = { margin: 0, fontSize: '19px' };
    const avatarStyle = { backgroundColor: '#3751FF' };
    const typeFont = { fontFamily : 'arial' };
    const sizeFont = { fontSize : '19px' };
    const sizeFontSecondary = { fontSize : '12px' };
    const colorFont = { color : '#A4A6B3' };
    const opacityFont = { opacity : '0.7'};
    const borderLabel = { borderRadius : '8px'};

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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
                <form style = {{margin: '20px', ...typeFont}}>
                    <InputLabel htmlFor = 'standard-adornment-email' style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>EMAIL</InputLabel>
                    <OutlinedInput id = 'outlined-basic' fullWidth label = 'Email' size = 'small' variant = 'outlined' placeholder = 'Email address' style={{height: '40px', fontSize: '14px', ...borderLabel}} />
                    <br /><br />
                    <InputLabel htmlFor='standard-adornment-password' style={{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>PASSWORD</InputLabel>
                    <OutlinedInput
                        fullWidth
                        placeholder='Password'
                        style={{height: '40px', borderRadius: '8px'}}
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
                        style={{height: '40px', borderRadius: '8px'}}
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
                    <Button fullWidth type='submit' variant='contained' color='primary' style={{background: '#3751FF', ...typeFont, ...sizeFontSecondary, ...borderLabel}}>Sign in</Button>   
                    <center>
                    <p  style={{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>You do not have an account?  <a href='/' >Login</a> </p>
                    </center>                              
                </form>
            </Paper>
        </Grid>
    )
}