import React,{Component} from "react";
import CardCrea from "../../classObject/cardCea/cardcea";

class CardCreaContainer extends Component {

        render() {
            const { integration } = this.props;
        
            
      return (
        <>
        
            <CardCrea key={ integration.id} dataImage={ integration.imageSrc}>
              {/* Contenu spécifique à chaque carte */}
           
            </CardCrea>
        
        </>
      );
    }
  }
  
  export default CardCreaContainer;
