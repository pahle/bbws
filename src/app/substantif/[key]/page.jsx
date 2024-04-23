import React from "react";
import dataSubtantif from "@/data/substantif.json";
import Link from "next/link";

const Arsip = (params) => {
  const dokumen = dataSubtantif.find(
    (item) => item.key === params.params.key
  );
  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        SUBSTANTIF
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {dokumen.arsip.map((item, index) => (
          <Link
            href={`/substantif/${dokumen.key}/${item.tahun}`}
            key={index}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="text-xl font-bold text-[#0024E1]">
              {dokumen.key}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{item.tahun}</h1>
              <p>{item.dokumen.length} Dokumen</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Arsip;
