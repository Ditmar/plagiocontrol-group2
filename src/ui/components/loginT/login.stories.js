import React from "react";
import Login from "./login";

export default {
    title: 'ui/components/login',
    component: Login,
}

const Template = args => <Login  {...args}/>
export const DefaultLogin = Template.bind({});