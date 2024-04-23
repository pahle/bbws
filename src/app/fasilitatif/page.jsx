import React from "react";
import dataFasilitatif from "@/data/fasilitatif.json";

const Subtantif = () => {
  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        FASILITATIF
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {dataFasilitatif.map((item, index) => (
          <div
            key={index}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="text-xl font-bold text-[#0024E1]">
              {item.key}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{item.judul}</h1>
              <p>{item.arsip.length} Dokumen</p>
              <p>{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subtantif;
