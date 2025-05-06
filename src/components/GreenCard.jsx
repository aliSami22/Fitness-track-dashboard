import React from "react";

const GreenCard = (props) => {
  return (
    <div className="flex !pb-10 justify-center">
      <div className="w-37 h-67 rounded-full bg-gradient-to-r from-[#1D1D1D] via-[#4C8050] to-[#1D1D1D] shadow-lg text-white flex flex-col items-center !p-7">
        <img
          src={props.image}
          className="w-20 h-20 rounded-full object-cover !mb-3"
        />
        <h3 className="text-lg font-bold text-center">{props.name}</h3>
        <p className="text-3xl text-center font-bold !mt-7">{props.num}</p>
      </div>
    </div>
  );
};

export default GreenCard;
