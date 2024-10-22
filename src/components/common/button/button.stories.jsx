import { ButtonNavBar } from "./button";

export default{
    title:"projet/button",
    component:ButtonNavBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
}

const Template = (args) => <ButtonNavBar {...args} />;

export const Primary={

    args :{ 
        text: 'Click me!',
    className:'p-10  bg-stone-900',
    size:'small'
}
}

export const Secondary={
    args:{
        size:'large',
        text:'dqsdqd'
    }
}

