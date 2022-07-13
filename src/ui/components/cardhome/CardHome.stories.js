import React from "react";
import { CardHome } from "./CardHome"

export default {
    title:'ui/components/cardhome',
    component: CardHome,
}

const Template = args => <CardHome  {...args}/>
export const DefaultButton = Template.bind({});
