import React from "react";
import Link from "next/link";
import { dataSubBab } from "@/utils/getQueryOutputs";
import Image from "next/image";
import ButtonDelete from "./ButtonDelete";
import { cookies } from "next/headers";

const SubBab = async (params) => {
  const data = await dataSubBab();

  const filteredData = data.filter(
    (item) => item.babId == params.params.id
  );

  return (
    <div>
      <h1 className="text-center font-bold mb-8">
        FASILITATIF
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="w-full border-2 flex p-8 rounded-xl bg-white drop-shadow-lg"
          >
            <Link
              className="flex justify-between w-full"
              href={`/fasilitatif/${params.params.id}/${item.id}`}
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-xl">{item.judul}</h1>
                <p>{item.dokumen.length} Dokumen</p>
              </div>
            </Link>
            {cookies().get("session").value === "admin" && (
              <ButtonDelete id={item.id} />
            )}
          </div>
        ))}
        {(cookies().get("session").value === "operator" ||
          cookies().get("session").value === "admin") && (
          <Link
            href={`/fasilitatif/${params.params.id}/create`}
            className="w-full border-2 flex p-8 rounded-xl gap-4 bg-white drop-shadow-lg"
          >
            <div className="flex gap-2 items-center justify-center w-full">
              <Image
                src="/add.png"
                alt="add"
                width={40}
                height={40}
              />
              <h1 className="text-xl">Tambah Tahun</h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SubBab;
