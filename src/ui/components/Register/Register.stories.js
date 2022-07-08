import React from 'react';
import { Register } from './Register';

export default {
    title: 'context/Register',
    component: Register
}

const Template = args => <Register {...args}/>
export const DefaultRegister = Template.bind({});