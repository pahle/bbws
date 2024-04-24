import React from "react";
import { dataDokumenSDA, dataSubBabSDA } from "@/utils/getQueryOutputs";
import Link from "next/link";

const Dokumen = async (params) => {
  const data = await dataDokumenSDA();

  const filteredData = data.filter((item) => item.sub_babId == params.params.idSubBab);

  const dataSubBab = await dataSubBabSDA();

  const filteredDataSubBab = dataSubBab.find((item) => item.id == params.params.idSubBab);

  return (
    <div>
      <h1 className="text-start font-bold mb-8">
        {filteredDataSubBab.judul}
        <Link href={`/sumberdayaair/${params.params.id}/${params.params.idSubBab}/create`}>+</Link>
      </h1>
      <table className="table-auto w-full text-start">
        <thead>
          <tr>
            <td>Kode Surat</td>
            <td>Tahun</td>
            <td>Judul</td>
            <td>File</td>
            <td>Tanggal Input</td>
            <td>Lihat</td>
            <td>Hapus</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.kode_surat}</td>
              <td>{item.tahun}</td>
              <td>{item.judul}</td>
              <td>{item.file}</td>
              <td>{item.created_at.toDateString()}</td>
              <td>Lihat</td>
              <td>Hapus</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dokumen;
