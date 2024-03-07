import LoadingPage from "./loadingpage";

export default{

    title:'projet/animation',
    component:LoadingPage
}

export const Template2 = (arg) => <LoadingPage{...arg} />

export const Primary = Template2.bind({});
Primary.args = {
  text:'test',
};