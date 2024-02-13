import React, { useState } from "react";
import Modal from "./modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Crea2 = () => {


  
 




  const [imagePrincipal, setImagePrincipal] = useState(
    "/images/crea2/image-product-1.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const changeImage = (imageNew) => {
    setImagePrincipal(imageNew);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>

    
      <div className="max-sm:w-full w-2/3 max-md:mt-10">
        <section className="bg-stone-100 max-sm:pb-10 p-10  w-full  max-sm:w-full  flex items-center space-x-5  justify-center  max-sm:flex-col">
          <div className="left w-1/2 max-sm:w-full    flex flex-col   justify-center items-center">
            <div className="image h-2/3 w-2/3  max-sm:w-full space-y-5 flex flex-col  items-center justify-center">
              <div className="w-full cursor-pointer">
                <img
                  src={imagePrincipal}
                  className=" w-full rounded-xl"
                  alt="product-principal"
                  onClick={openModal}
                />
              </div>

              <div className="allSmallImage h-1/3 w-full  space-x-5 flex  ">
                <div className=" Smallimage w-44  ">
                  <img
                    src="/images/crea2/image-product-1.jpg"
                    className={`w-full h-auto rounded-xl ${
                      imagePrincipal === "/images/crea2/image-product-1.jpg"
                        ? "border-2 border-orange-700  opacity-50"
                        : ""
                    }`}
                    alt="product-1"
                    onClick={() =>
                      changeImage("/images/crea2/image-product-1.jpg")
                    }
                  />
                </div>
                <div className="Smallimage w-44 ">
                  <img
                    src="/images/crea2/image-product-2.jpg"
                    className={`w-full h-auto rounded-xl ${
                      imagePrincipal === "/images/crea2/image-product-2.jpg"
                        ? "border-2 border-orange-700  opacity-50"
                        : ""
                    }`}
                    alt="product-2"
                    onClick={() =>
                      changeImage("/images/crea2/image-product-2.jpg")
                    }
                  />
                </div>
                <div className="Smallimage w-44  ">
                  <img
                    src="/images/crea2/image-product-3.jpg"
                    alt="product-3"
                    onClick={() =>
                      changeImage("/images/crea2/image-product-3.jpg")
                    }
                    className={`w-full h-auto rounded-xl ${
                      imagePrincipal === "/images/crea2/image-product-3.jpg"
                        ? "border-2 border-orange-700  opacity-50"
                        : ""
                    }`}
                  />
                </div>
                <div className="Smallimage w-44 ">
                  <img
                    src="/images/crea2/image-product-4.jpg"
                    className={`w-full h-auto rounded-xl ${
                      imagePrincipal === "/images/crea2/image-product-4.jpg"
                        ? "border-2 border-orange-700  opacity-50"
                        : ""
                    }`}
                    alt="product-4"
                    onClick={() =>
                      changeImage("/images/crea2/image-product-4.jpg")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right w-1/2  max-sm:w-full   flex flex-col space-y-10 p-10  justify-center">
            <div className="flex flex-col space-y-10 w-full">
              <div className="title w-full ">
                <div>
                  <h2 className="text-orange-500 lg:text-xl max-sm:text-center ">
                    SNEAKER COMPAGNY
                  </h2>
                </div>
                <div className="mt-2">
                  <h1 className="2xl:text-7xl lg:text-5xl max-sm:text-4xl max-sm:text-stone-900  w-full">
                    100% Tailwind
                  </h1>
                  <h1 className="2xl:text-7xl lg:text-5xl max-sm:text-4xl max-sm:text-stone-900 ">
                    Sneakers
                  </h1>
                </div>
              </div>
              <div>
                <p className="text 2xl:w-4/6 text-justify text-stone-500">
                  Vous trouvez ici une page produit avec selction d'iamges et un
                  carouselle en modal en cliquant sur l'image principale. Une
                  petit compteur pour le panier.
                </p>
                <p className="text 2xl:w-4/6 text-justify text-stone-500">
                  Cette page est codé 100% en Tailwind, responsive tablette,
                  smartphone et ecran.
                </p>
              </div>

              <div className="flex items-center space-x-5 max-sm: max-sm:justify-center ">
                <div className="price text-4xl"> 354£</div>
                <div className="bg-orange-500 text-orange-900 p-1 rounded font-bold">
                  -50%
                </div>
              </div>

              <div className="panier flex  space-x-1 w-2/3 max-sm:w-full justify-center items-center max-sm:flex-col max-sm:space-y-3 max-sm:pt-10 ">
                <div className="cursor w-1/3 flex max-sm:w-full ">
                  <div
                    className="  w-1/3 border rounded-xl  flex items-center justify-center p-4 text-3xl max-sm:p-2 text-orange-600   "
                    onClick={incrementCount}
                  >
                    +
                  </div>
                  <div className="w-1/3 border  rounded-xl flex items-center justify-center p-4 text-3xl max-sm:p-2 ">
                    {" "}
                    {count}{" "}
                  </div>

                  <div
                    className="w-1/3 border rounded-xl  flex items-center justify-center p-4 text-3xl max-sm:p-2  text-orange-600  "
                    onClick={decrementCount}
                  >
                    -
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-2xl w-2/3 max-sm:w-full bg-orange-500 space-x-5 p-5 ">
                  <div>
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl"
                      icon={faCartShopping}
                    />
                  </div>
                  <div>Ajouter au panier</div>
                </button>
              </div>
            </div>
          </div>
        </section>
        {modalOpen && (
          <div className="gg flex items-center justify-center  ">
            <Modal image={imagePrincipal} closeModal={closeModal} />
          </div>
        )}
      </div>
    </>
  );
};
export default Crea2;
