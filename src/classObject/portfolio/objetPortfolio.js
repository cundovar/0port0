import React from "react";
import PortfolioModel from "./modelPortfolio";

const projects = [
    new PortfolioModel({
      id:0,
      type: "react/typescript/symfony",
      titre: "site d'art",
      tekno: "symfony/react",
      lien: "https://nat.varascundo.com/",
      lienCode: "https://github.com/cundovar/frontDePeint",
      description: "Projet react. Sources issues d'un fichier json. Maquettes figma",
      imageSrc: ["/images/portfolio/art/p0.PNG",
      "/images/portfolio/art/p1.PNG",
      "/images/portfolio/art/p2.PNG",
      "/images/portfolio/art/p3.PNG"],
      titreHover: "",
      text1: "filtrage des oeuvres par catégories",
      text2: "api/crud des articles",
      text3: "front tailwind, backOffice bootstrap twig",
      text4: "possibilité de changer texte/images de la page d'acceuil via backOffice",
      alt: "Image projet peinture react",
      video:"/video/art.mp4"
    }),
    new PortfolioModel({
      id:1,
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
      text3: "contenus dynamiques appelés via Json  ",
      text4: "",
      alt: "Image projet space react",
      video:"/video/space.mp4"
    }),
    new PortfolioModel({
      id:2,
      type: "wordpress, php",
      titre: "Maison édition",
      tekno: "php",
      lien: "https://la-magicieuse.varascundo.com/",
      lienCode: "",
      description: "Refonte site WordPress de la maison édition la magicieuse",
      imageSrc:[ "/images/portfolio/magi/magi0.PNG",
      "/images/portfolio/magi/magi1.PNG",
      "/images/portfolio/magi/magi2.PNG",
      "/images/portfolio/magi/magi3.PNG"],
      titreHover: "",
      text1: "Travail basé sur WordPress",
      text2: "Refonte du site, changement de thème",
      text3: "Personnalisation du thème, création de thème enfant, changement du code PHP de WordPress",
      text4: "Gestion de Woocommerce, ajout de code javascript",
      alt: "Image maison édition WordPress",
      video:"/video/magi.mp4"
    }),
    // new PortfolioModel({
    //   id:2,
    //     type: "twig, bootstrap",
    //     titre: "Mon premier portfolio",
    //     tekno: "twig",
    //     lien: "https://portfolio.varascundo.com/",
    //     lienCode: "https://github.com/cundovar/portfolio",
    //     description: "Mon premier portfolio",
    //     imageSrc: ["/images/portofolio1.PNG"],
    //     titreHover: "",
    //     text1: "Travail basé sur twig/javascript",
    //     text2: "Bootstrap",
    //     text3: "JavaScript",
    //     text4: "",
    //     alt: "image portofolio1",
    //   }),
      new PortfolioModel({
        id:3,
        type: "wordpress, php",
        titre: "Asso d'artistes",
        tekno: "php",
        lien: "https://duboutdesetangs.com/",
        lienCode: "",
        description: "Projet pour un site internet pour une association d'artistes avec WordPress",
        imageSrc: ["/images/portfolio/etang/etang0.PNG",
        "/images/portfolio/etang/etang1.PNG",
        "/images/portfolio/etang/etang2.PNG",
        "/images/portfolio/etang/etang3.PNG"],
        titreHover: "",
        text1: "Travail basé sur WordPress",
        text2: "Refonte du site de l'association ",
        text3: "Nouveau thème, ajout de plugin, SEO",
        text4: "",
        alt: "image projet bout des étangs wordpress",
        video:"/video/etang.mp4"
      }),
      // new PortfolioModel({
      //   id:4,
      //   type: "symfony, php, twig ,javascript",
      //   titre: "Site de peintures",
      //   tekno: "php",
      //   lien: "https://varascundo.com/",
      //   lienCode: "https://github.com/cundovar/peintureFacundo",
      //   description: "Projet pour l'examen pour le diplôme de développeur Front. Concentré essentiellement sur le back-end ",
      //   imageSrc: ["/images/portfolio/peinture/peinture0.PNG",
      //   "/images/portfolio/peinture/peinture1.PNG",
      //   "/images/portfolio/peinture/peinture2.PNG",
      //   "/images/portfolio/peinture/peinture3.PNG"],
      //   titreHover: "",
      //   text1: "Travail basé sur le framework Symfony",
      //   text2: "CRUD des œuvres, inscription ",
      //   text3: "Gestion de la base de données, gestion des stocks, création d'un panier",
      //   text4: "Gestion des commentaires en react",
      //   alt: "image site de peinture php",
      //   video:"/video/peinture.mp4"
      // }),
      // new PortfolioModel({
      //   id:5,
      //   type: "react, scss",
      //   titre: "Tableau de bord",
      //   tekno: "javascript/react",
      //   lien: "https://dashboard.varascundo.com/",
      //   lienCode: "https://github.com/cundovar/projet_tableau_de_bord",
      //   description: "Tableau de bord avec bibliothèque js CHARTJS, style en SASS, javascript REACT.",
      //   imageSrc: ["/images/dashboard.PNG",],
      //   titreHover: "",
      //   text1: "Travail basé sur React",
      //   text2: "Appel à la bibliothèque js.CHARTS sous React",
      //   text3: "Creation de fichier Json pour les données des graphiques ",
      //   text4: "Utilisation du pre-processeur SASS",
      //   alt: "image dashboard en reactjs",
      // }),
      // new PortfolioModel({
      //   id:6,
      //   type: "react, tailwind, scss",
      //   titre: "Mon premier portfolio",
      //   tekno: "React",
      //   lien: "https://portfolio2.2.varascundo.com/",
      //   lienCode: "https://github.com/cundovar/portefolioReact",
      //   description: "Vous êtes ICI",
      //   imageSrc: ["/images/portfolio2.PNG"],
      //   titreHover: "",
      //   text1: "Travail basé sur React",
      //   text2: "Travail essentiellement sur Tailwind",
      //   text3: "Accessibilité du code",
      //   text4: "Gestion de fichier json",
      //   alt: "image portofolio2",
      // }),
    
     
  
]

    export default projects

