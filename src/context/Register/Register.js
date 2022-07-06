import React from 'react'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import useForm from '../../hooks/useForm';

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

    const [form, handlerChangeForm, handlerResetForm] = useForm({
      email: '',
      password: '',
      repassword: '',
    });

    const { email, password, repassword } = form;
    const onSubmit = data => console.log(data);

    const togglePassword = () => {
      handlerResetForm({ ...password, showPassword: !password.showPassword });
      handlerResetForm({ ...repassword, showRePassword: !repassword.showRePassword,});
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
                <form style = {{margin: '1.25rem', ...typeFont}} onSubmit = {onSubmit}>
                    <InputLabel htmlFor = 'standard-adornment-email' style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>EMAIL</InputLabel>
                    <OutlinedInput id = 'outlined-basic1' type ='text' name ='email' value = {email} onChange = {handlerChangeForm}  fullWidth label = 'Email' size = 'small' variant = 'outlined' placeholder = 'Email address' style={{height: '2.5rem', fontSize: '0.875rem', ...borderLabel}} />
                    <br /><br />
                    <InputLabel htmlFor = 'standard-adornment-password' style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>PASSWORD</InputLabel>
                    <OutlinedInput 
                    id = 'outlined-basic2' 
                    type = {form.showPassword ? 'password' : 'password'}
                    name = 'password'
                    value = {password}
                    onChange = {handlerChangeForm}
                    endAdornment = {
                      <InputAdornment position = 'end'>
                        <IconButton
                          onClick = {togglePassword}
                        >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }                    
                    fullWidth 
                    placeholder = 'Password' 
                    style={{height: '2.5rem', fontSize: '0.875rem', ...borderLabel}}
                    />
                    <br /><br />
                    <InputLabel htmlFor = 'standard-adornment-repassword' style = {{...typeFont, ...sizeFontSecondary, ...colorFont, ...opacityFont}}>RE. PASSWORD</InputLabel>
                    <OutlinedInput 
                    id = 'outlined-basic3' 
                    type= {form.showRePassword ? 'password' : 'password'}
                    name = 'repassword'
                    value = {repassword}
                    onChange = {handlerChangeForm}
                    endAdornment = {
                      <InputAdornment position = 'end'>
                        <IconButton
                          onClick={togglePassword}
                        >
                        {form.showRePassword ? <Visibility /> : <VisibilityOff /> }
                        </IconButton>
                      </InputAdornment>
                    }
                    
                    fullWidth 
                    label = 'repassword' 
                    placeholder = 'Repeat password' 
                    style={{height: '2.5rem', fontSize: '0.875rem', ...borderLabel}}
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