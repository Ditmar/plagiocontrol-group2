import React from "react";
import { UploadFiles } from "./UploadFiles";

export default {
    title: 'ui/components/UploadFiles',
    component: UploadFiles,
}


const Template = args => <UploadFiles  {...args}/>
export const DefaultButton = Template.bind({});