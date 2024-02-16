import React from "react";
import Slider from "react-slick";
import modelImageCarousel from "../../classObject/carouselHome/modelImagecarousel";
const carouselcontent1 = [
  new modelImageCarousel({
    id: 1,
    titre: "test1",
    text: "Autodidacte ",
    image: "/images/design-crea/Crea3.PNG",
  }),
];

const carouselcontent2 = [
  new modelImageCarousel({
    id: 2,
    titre: "test2",
    text: "Veille Technologique",
    image: "/images/design-crea/Crea1.PNG",
  }),
];
const carouselcontent3 = [
  new modelImageCarousel({
    id: 3,
    titre: "test23",
    text: "Passionné",
    image: "/images/design-crea/Crea2.PNG",
  }),
];

const ImageCarousel = ({ carouselcontent }) => {
  return (
    <div className="w-full  h-full items-center   ">
      {carouselcontent &&
        carouselcontent.map((items) => (
          <div className=" ">
            <div className="w-full h-full  m-auto">
              <div className="m-auto h-full w-full " key={items.id}>
                <div className=" m-auto">
                <img
                  className=" h-60 w-60  object-cover z-20 rounded-full  m-auto "
                  src={items.image}
                  alt={items.titre}
                />

                </div>
              {/* <h1 className="text-center z-40">{items.text}</h1> */}
             
     
            </div>
           
             
            </div>
            
             
          </div>
        ))}
    </div>
  );
};

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  autoplay: true,
  arrows: false,
};
const CarouselPresentation = () => {
  return (
    <>
      <div className="h-1/2 w-full p-3  flex justify-center items-center">
        <div className="w-full min-h-full">
          <Slider {...settings}>
            <ImageCarousel carouselcontent={carouselcontent3} />
            <ImageCarousel carouselcontent={carouselcontent2} />
            <ImageCarousel carouselcontent={carouselcontent1} />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselPresentation;
