import React from "react";
import Link from "next/link";
import { dataSubBab } from "@/utils/getQueryOutputs";

const SubBab = async (params) => {
  const data = await dataSubBab();

  const filteredData = data.filter((item) => item.babId == params.params.id);


  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        SUMBER DAYA AIR
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {filteredData.map((item, index) => (
          <Link
            href={`/sda/${params.params.id}/${item.id}`}
            key={index}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{item.judul}</h1>
              <p>{item.dokumen.length} Dokumen</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubBab;