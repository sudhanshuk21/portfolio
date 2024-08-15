import React from "react";
import reactSmooth from "../assets/portfolio/jsw.png";
import aeromod from "../assets/portfolio/aeromod.png";
import robot from "../assets/portfolio/robot1.jpg";
import web3 from "../assets/portfolio/web3f.jpg";
import car1 from "../assets/portfolio/car2.jpg";
import motor from "../assets/portfolio/motor2.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactSmooth,
      pptText: "CODE",
      docText: "DOC",
      pptLink: "https://github.com/sudhanshuk21/Enhancing-PDF-Understanding-with-RAG1",
      docLink: "https://docs.google.com/document/d/1m4Eefpo_k5GC9mXFFcasF9n_BVq0pobwPIeWv9TVATI/edit?usp=sharing"
    },
    {
      id: 2,
      src: aeromod,
      pptText: "DEMO" ,
      docText: "CODE",
      docLink: "https://github.com/aryanraj4049/club-website-master-2",
      pptLink: "https://aryanraj4049.github.io/club-website-master-2/"
    },
    {
      id: 3,
      src: robot,
      pptText: "REPORT",
      docText: "PPT",
      docLink: "https://docs.google.com/document/d/1nFqnj8gb6NBHigBEIweCWaYqCJDskeAYsqfY9Y3MfMA/edit?usp=sharing",
      pptLink: "https://docs.google.com/presentation/d/1f1MGmswAcadVEz5zF1mlMgKsqwWN-fp4qj9q0l1m7E0/edit?usp=sharing"
    },
    {
      id: 4,
      src: web3,
      pptText: "CODE",
      docText: "REPORT",
      pptLink: "https://github.com/sudhanshuk21/GAN-Transformer",
      docLink: "https://docs.google.com/document/d/1-YL9YQ5-Eb3winxMw4oVnuopEcTZbfrLgP4QglhRBxA/edit?usp=sharing"
    },
    {
      id: 5,
      src: car1,
      pptText: "DOC",
      docText: "CODE",
      docLink: "https://github.com/sudhanshuk21/GAN-Transformer/blob/main/Transformer_implitation.ipynb",
      pptLink: "https://docs.google.com/document/d/1-YL9YQ5-Eb3winxMw4oVnuopEcTZbfrLgP4QglhRBxA/edit"
    },
    {
      id: 6,
      src: motor,
      pptText: "DOC",
      docText: "CODE",
      docLink: "https://github.com/sudhanshuk21/CS771ML",
      pptLink: "https://github.com/sudhanshuk21/CS771ML/blob/main/ML_Assignment1.pdf"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-red-900 w-full text-white md:h-screen mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, pptText, docText,docLink,pptLink}) => (
          <div key={id} className="shadow-md shadow-white rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <a href={pptLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {pptText}
                </button>
              </a>
              <a href={docLink} target="blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {docText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
