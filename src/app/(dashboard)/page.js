import React from "react";
import { dataBab } from "@/utils/getQueryOutputs";
import Link from "next/link";

const Home = async () => {
  const data = await dataBab();
  return (
    <>
      <h1 className="text-center font-bold mb-8">
        SEMUA ARSIP
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {data.map((item, index) => (
          <Link
            href={`/sda/${item.id}`}
            key={index}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-xl">{item.judul}</h1>
              <p>{item.sub_bab.length} Dokumen</p>
              <p>{item.deskripsi}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
