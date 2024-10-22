
class PortfolioModel {
    constructor(data) {
      this.id=data.id
      this.type = data.type || [];
      this.titre = data.titre || "";
      this.tekno = data.tekno || "";
      this.lien = data.lien || "";
      this.lienCode = data.lienCode || "";
      this.description = data.description || "";
      this.imageSrc = data.imageSrc || [] ;
      this.titreHover = data.titreHover || "";
      this.text1 = data.text1 || "";
      this.text2 = data.text2 || "";
      this.text3 = data.text3 || "";
      this.text4 = data.text4 || "";
      this.alt = data.alt || "";
      this.video = data.video || "";

    }
  }
  
  export default PortfolioModel;