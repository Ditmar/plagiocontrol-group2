import React from 'react';
import Sidebar_menu from './Sidebar_menu';
import { BrowserRouter as Router } from 'react-router-dom';
export default {
    title: "ui/components/menuStorybook",
    component: Sidebar_menu,
}
const Template = args => <Router><Sidebar_menu {...args}/></Router>
export const DefaultSidebar_menu = Template.bind({});
DefaultSidebar_menu.args = {
    name: 'Plagio Control',
}