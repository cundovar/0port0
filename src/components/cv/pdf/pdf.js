import React, { useRef } from "react";
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';
import Bouton from "./bouton";
import DebutLeft from "../debut/left";
import DebutRight from "../debut/right";
import Header from "../header/header";
import CompetenceDigital from "../milieu/compétenceDigital";
import ParcoursPro from "../milieu/parcourPro";
import ParcoursScolair from "../milieu/parcourscolaire";
import html2canvas from 'html2canvas';


const Pdf = () => {
  
    const pdfRef = useRef(null);

    // Fonction pour convertir le JSX en PDF et télécharger
    const convertToPDF = () => {
      if (!pdfRef.current) return;
  
      const input = pdfRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const pageHeight = 500;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('mon_cv.pdf');
      });
  };

  return (
    <div ref={pdfRef} className="w-8/12 flex h-full  flex-col items-center bg-neutral-50 text-slate-800 absolute right-0 border overflow-y-scroll">
      <Header/>
      <section className="w-full p-3 border space-y-5">
        <div className="border w-full space-y-3">
          <div className="flex p-3">
            <DebutLeft/>
            <DebutRight/>
          </div>
        </div>
        <div className="w-full border p-3 space-y-20">
          <CompetenceDigital/>
          <ParcoursPro/>
          <ParcoursScolair/>
        </div>
      </section>
      {/* Utilisation du composant Bouton pour le téléchargement en PDF */}
      <Bouton onClick={convertToPDF} />
    </div>
  );
};

export default Pdf;
