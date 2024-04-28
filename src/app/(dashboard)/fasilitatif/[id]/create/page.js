"use client";

import { createDataSubBab } from "@/utils/createData";
import React from "react";

const CreateDokumen = (params) => {

  const initialValue = {
    judul: "",
    babId: parseInt(params.params.id)
  };

  const [form, setForm] = React.useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDataSubBab(form);
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
          <label htmlFor="judul">Tahun</label>
          <input
            type="text"
            name="judul"
            id="judul"
            value={form.judul}
            onChange={handleChange}
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
