import React from "react";
import { Button } from "./button";
export default {
    title: 'ui/components/button',
    component: Button,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <Button  {...args}/>
export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: 'Log In',
    size: 'md'
}
