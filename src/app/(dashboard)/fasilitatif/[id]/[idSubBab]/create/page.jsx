"use client";

import { createData } from "@/utils/createData";
import React from "react";

const CreateDokumen = (params) => {
  const initialValue = {
    kode_surat: "",
    tahun: "",
    judul: "",
    file: "",
    sub_babId: parseInt(params.params.idSubBab)
  };

  const [form, setForm] = React.useState(initialValue);
  const [file, setFile] = React.useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setForm({
      ...form,
      file: e.target.files[0].name.replaceAll(" ", "_"),
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function uploadFile() {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api", {
      method: "POST",
      body: formData,
    })
    const response = await res.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadFile();
    await createData(form);
    setForm(initialValue);
    history.back();

  };

  return (
    <div>
      <h1 className="text-start font-bold mb-8">
        Create Dokumen
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="kode_surat">Kode Surat</label>
          <input
            type="text"
            name="kode_surat"
            id="kode_surat"
            value={form.kode_surat}
            onChange={handleChange}
            className="border-2 border-gray-400 p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="tahun">Tahun</label>
          <input
            type="text"
            name="tahun"
            id="tahun"
            value={form.tahun}
            onChange={handleChange}
            className="border-2 border-gray-400 p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="judul">Judul</label>
          <input
            type="text"
            name="judul"
            id="judul"
            value={form.judul}
            onChange={handleChange}
            className="border-2 border-gray-400 p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="file">File</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleFile}
            className="border-2 border-gray-400 p-2 rounded-lg w-full"
          />
        </div>
        <button type="submit" className="bg-blue-300 w-24 p-2 rounded-lg self-center mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDokumen;
