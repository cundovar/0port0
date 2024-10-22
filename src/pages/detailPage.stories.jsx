import React from 'react';
import DetailPage from "./detaiPage";

export default {
    title:"projet/detailPage",
    component:DetailPage,
  
    tags: ['autodocs'],
    argTypes:{
        project:{
            control:'object'
        },
        onClose:{
            control:'function'
        }

    }
}

export const Default = (args) => <DetailPage {...args}  />;

Default.args={
    project:{
      
            id:0,
            type: "react, scss",
            titre: "Mini-projet space-tourism",
            tekno: "javascript/react",
            lien: "https://espace.varascundo.com/",
            lienCode: "https://github.com/cundovar/tourism-spacial",
            description: "Projet react. Sources issues d'un fichier json. Maquettes figma",
            imageSrc: ["/images/portfolio/space/space0.PNG",
            "/images/portfolio/space/space1.PNG",
            "/images/portfolio/space/space2.PNG",
            "/images/portfolio/space/space3.PNG"],
            titreHover: "",
            text1: "Travail basé sur React",
            text2: "Gestion des différentes pages",
            text3: "",
            text4: "",
            alt: "Image projet space react",
            video:"/video/space.mp4"
         
    }
}