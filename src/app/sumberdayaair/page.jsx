import React from "react";
import Link from "next/link";
import { dataBabSDA } from "@/utils/getQueryOutputs";

const Subtantif = async () => {
  const data = await dataBabSDA()

  console.log(JSON.stringify(data, null, 2));
  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        SUMBER DAYA AIR
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {data.map((item, index) => (
          <Link
            href={`/sumberdayaair/${item.id}`}
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
