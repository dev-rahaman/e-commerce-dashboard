"use client";
import React, { useState } from "react";

const SupportAccordion = ({ subject, email, content, name, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg text-white">
      <h2
        className="p-4 text-left hover:bg-[#38bdf8] cursor-pointer border-b"
        onClick={toggleAccordion}
      >
        {subject}
      </h2>

      {isOpen && (
        <div className="p-4 border-b">
          <h2 className=" text-left">Name: {name}</h2>
          <h2 className="text-left">Email: {email}</h2>
          <h2 className="text-left mb-4">ID: {id}</h2>
          {content}
        </div>
      )}
    </div>
  );
};

export default SupportAccordion;
