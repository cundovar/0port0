import Home from "./home";


export default{
    title:'projet/home',
  component:Home,
  parameters:{
    layout:'centered',
},
tags:['autodocs']


}

export const Default = () => <Home />;

export const SurMobile = () => (
    <div style={{ width: '375px' }}>
        <Home />
    </div>
);

export const SurTablette = () => (
    <div style={{ width: '768px' }}>
        <Home />
    </div>
);

export const SurGrandEcran = () => (
    <div style={{ width: '1440px' }}>
        <Home />
    </div>
);
