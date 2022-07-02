import React from "react";
import  Header  from "./header";

export default{
    title: 'ui/components/header',
    component: Header
}

const Template = args => <Header {...args} />
export const DefaultHeader = Template.bind({});
