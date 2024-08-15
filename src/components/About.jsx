import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-red-900 to-black text-white mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className>
        <p className="text-4xl font-bold inline">
            About
          </p>
        </div>

        <p className="text-xl mt-2">
        I'm Sudhanshu Kumar, a final-year undergraduate in 
        Material Science and Engineering at IIT Kanpur. My diverse 
        interests have driven me to explore a wide range of fields, from 
        Machine Learning, NLP, and Deep Learning to Iron and Steel Making,
        CAD, and Advanced Computational Techniques. I bring a unique blend of 
        these cutting-edge skills, seamlessly integrating them with my core 
        expertise in Material Science.
        </p>

        <br />

        <p className="text-xl">
        During my internship at KnowledgeEdgeAI, I developed a YouTube Video-Based Question Answering System, 
        utilizing advanced AI/ML techniques. My hands-on projects range from obstacle avoidance using CNNs to 
        building a Transformer architecture from scratch and synthesizing zinc-doped hydroxyapatite nanoparticles 
        for biomedical applications<br/> <br/>
        I've taken on significant leadership roles, notably as a Senior Executive at Techkriti’23, 
        where I led large teams and successfully organized major events. My technical expertise 
        spans programming in C++ and Python, along with web development using ReactJs. Through 
        various projects with the Aeromodelling Club, I've also refined my skills in CAD design, 
        structural analysis with ANSYS, and more.
        </p>
      </div>
    </div>
  );
};

export default About;
