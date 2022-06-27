import React from "react";
import { LastDocument } from "./LastDocument";
export default {
    title: 'ui/components/lastDocuments',
    component: LastDocument,
    //argTypes: { handleClick: {action: 'handleClick'}}
}


const Template = args => <LastDocument  {...args}/>
export const DefaultButton = Template.bind({});


