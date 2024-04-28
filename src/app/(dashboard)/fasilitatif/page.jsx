import React from "react";
import Link from "next/link";
import { dataBab } from "@/utils/getQueryOutputs";

const Subtantif = async () => {
  const data = await dataBab()

  const filteredData = data.filter((item) => item.kategori === "fasilitatif");

  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        FASILITATIF
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {filteredData.map((item, index) => (
          <Link
            href={`/fasilitatif/${item.id}`}
            key={index}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{item.judul}</h1>
              <p>{item.sub_bab.length} Dokumen</p>
              <p>
                {item.deskripsi}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subtantif;
