import React from "react";
import CardCrea from "../../classObject/cardCea/cardcea";

const CardCrea1 = () => {
  return (
    <>
 

      <CardCrea dataImage="/images/design-crea/Crea1.PNG">
        <h1 slot="header">Divers</h1>
        <p slot="content">Multiples exemples traveaux, créés avec tailwind.</p>
      </CardCrea>

      <CardCrea dataImage="/images/design-crea/Crea2.PNG">
              <h1 slot="header">Page d'accueil</h1>
              <p slot="content">Page d'accueil avec carousel,</p>
              <p slot="content"> reponsive, </p>
              <p slot="content">  taiwlind.</p>
            
            </CardCrea>

            <CardCrea dataImage="/images/taxi.PNG">
              <h1 slot="header">Page e-commerce</h1>
              <p slot="content">
             HTML5,
              </p>
              <p slot="content">
             BOOTSTRAP,
              </p>
              <p slot="content">
             JAVASCRIPT
              </p>
            </CardCrea>


    </>
  );
};

export default CardCrea1;
