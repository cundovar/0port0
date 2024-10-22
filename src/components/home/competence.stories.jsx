import Competence from "./competence";


export default {
 

    title:"projet/home/competence",
    component:Competence,
    parameters: {

    
        backgrounds: {
          default: 'dark',
        },
        decorators: [
            (Story) => (
              <div style={{ margin: '3em' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
              </div>
            ),
          ],
          argTypes: { onClick: { action: 'clicked' } },
    },
    tags:['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
     
      },
}

export const Default =()=><Competence/>
export const Primary=(args)=><Competence {...args}/>
Primary.args={
    primary:true,
    children:'click'
}







export const SurMobile = () => (
    <div style={{ width: '375px' }}>
        <Competence />
    </div>
);
