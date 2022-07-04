import React from "react";
import  SuperDocumentCard  from "./SuperDocumentCard";
export default {
    title: 'ui/components/documentCard',
    component: SuperDocumentCard,
}

const Template = args => <SuperDocumentCard  {...args}/>
export const DefaultDocumentCard = Template.bind({});