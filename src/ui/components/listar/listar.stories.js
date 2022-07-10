import React from "react";
//import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";

import { Listar } from "./Listar";
export default {
    title: "ui/components/Listar",
    component:Listar
}
const Template = (args) => <Listar {...args}/>
export  const logue= Template.bind({}); 
logue.args = {
    isLoading: false,
    label: "test", 
    errors: false
}