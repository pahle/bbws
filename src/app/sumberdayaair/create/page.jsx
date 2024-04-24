"use client";

import React from "react";
import { useState } from "react";
import { createData } from "@/utils/createData";

const CreateSubstantif = () => {
  const initialValue = {
    key: "",
    judul: "",
    deskripsi: "",
    kategori: "substantif",
  };

  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createData(formValue);
    setFormValue(initialValue)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={formValue.key}
          type="text"
          placeholder="Key"
          className="w-full p-4 border-2 rounded-lg mb-4"
          name="key"
          onChange={handleChange}
        />
        <input
          value={formValue.judul}
          type="text"
          placeholder="Judul"
          className="w-full p-4 border-2 rounded-lg mb-4"
          name="judul"
          onChange={handleChange}
        />
        <input
          value={formValue.deskripsi}
          type="text"
          placeholder="Deskripsi"
          className="w-full p-4 border-2 rounded-lg mb-4"
          name="deskripsi"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Kategori"
          className="w-full p-4 border-2 rounded-lg mb-4"
          value="substantif"
          disabled
        />
        <input
          type="submit"
          value="Submit"
          className="w-full p-4 border-2 rounded-lg mb-4 cursor-pointer bg-blue-500 text-white"
        />
      </form>
    </div>
  );
};

export default CreateSubstantif;
