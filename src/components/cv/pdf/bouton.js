import React from "react";

const Bouton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            Télécharger
        </button>
    );
};

export default Bouton;