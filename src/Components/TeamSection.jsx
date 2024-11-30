/* eslint-disable no-unused-vars */
// TeamSection.jsx
import React from "react";
import Hunchlunch from "../assets/Hunchlunch.png";  

const teamMembers = [
  { name: "James John", role: "Chef", img: Hunchlunch },   
  { name: "Joy Boom", role: "Product", img: Hunchlunch },
  { name: "Ade Stephen", role: "Business", img: Hunchlunch },
  { name: "Busayo Jacob", role: "Operations", img: Hunchlunch },
];

const TeamSection = () => {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl font-semibold mb-10">Meet The Hunch Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.img}  
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="mt-2 font-medium text-lg">{member.name}</h3>
            <p className="font-bold text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
