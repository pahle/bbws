import React from "react";
import dataSubtantif from "@/data/substantif.json";

const Dokumen = (params) => {
  const dokumen = dataSubtantif.find(
    (item) => item.key === params.params.key
  );

  const file = dokumen.arsip.find(
    (item) => item.tahun === params.params.tahun
  );
  return (
    <div>
      <h1 className="text-start font-bold mb-8">
        {dokumen.judul} ({dokumen.key}) {params.params.tahun} +
      </h1>
      <table className="table-auto w-full text-start">
        <thead>
          <tr>
            <td>Kode Surat</td>
            <td>Tahun</td>
            <td>Judul</td>
            <td>Tanggal Input</td>
            <td>Lihat</td>
            <td>Hapus</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {file.dokumen.map((item, index) => (
            <tr key={index}>
              <td>{item.kode_surat}</td>
              <td>{item.tahun}</td>
              <td>{item.judul}</td>
              <td>{item.tanggal_input}</td>
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
