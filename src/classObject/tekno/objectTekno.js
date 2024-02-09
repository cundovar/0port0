import React from "react";
import TeknoModel from "./modelTekno";


const tekno=[
    new TeknoModel({
        id:0,
        titre:"JAVASCRIPT",
        l1:"Travail avec DOM (Document Object Model)",
        l2:"Fetch API ",
        l3:"Manipulation des tableaux et des objets  ",
        l4:"Gestion des événements",
        l5:"Asynchronisme et Promises ",
        l6:"Frameworks et bibliothèques"

    }),
    new TeknoModel({
        id:1,
        titre:"CSS",
        l1:"Maîtrise des sélecteurs CSS",
        l2:"Mise en page flexible avec Flexbox et Grid ",
        l3:" Responsive ",
        l4:"Stylisation avancée",
        l5:" Préprocesseurs CSS (SCSS, Tailwind, Bootstrap)",
        l6:"Conformité aux normes et compatibilité entre navigateurs"

    }),
    new TeknoModel({
        id:2,
        titre:"REACT",
        l1:"Routage avec React Router",
        l2:"Utilisation de useState et useEffect ",
        l3:" Gestion des props ",
        l4:"Composants réutilisables",
        l5:" Gestion des formulaires",
        l6:"Adaptabilité"

    }),
    new TeknoModel({
        id:3,
        titre:"SYMPHONY",
        l1:"Création de contrôleurs et de routes",
        l2:"Accès à la base de données avec Doctrine ",
        l3:"Création d'API REST",
        l4:"TWIG",
        l5:" Gestion des formulaires Symfony",
        l6:"Gestion des vues"

    }),
    new TeknoModel({
        id:4,
        titre:"WORDPRESS",
        l1:"Thèmes WordPress",
        l2:"Gestion de contenu ",
        l3:"Gestion de base de données",
        l4:"Utilisation d'ACF (Advanced Custom Fields)",
        l5:" Intégration de WooCommerce",
        l6:"PHP"

    }),

]

export default tekno