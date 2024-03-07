import { ButtonNavBar } from "./button";

export default{
    title:"projet/button",
    component:ButtonNavBar
}

const Template = (args) => <ButtonNavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click me!',
};